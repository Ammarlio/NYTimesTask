import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, I18nManager } from "react-native";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import CustomImage from "../../components/common/CustomImage";
import assets from '../../utils/assets';
import DatePicker from 'react-native-date-picker'
import { colors } from "../../utils/colors";
import CONSTANTS from "../../constants/constants";
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from "../../store/actions/userAction";
import PhoneInput from "react-native-phone-number-input";
import { changeLanguage } from "../../store/actions/settingsAction";
import RNRestart from 'react-native-restart';

export default function Login(props) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            email: '',
        }
    });

    const dispatch = useDispatch();
    const { language } = useSelector(state => state.settingsReducer)
    const [date, setDate] = useState(new Date())
    const [openDateModal, setOpenDateModal] = useState(false)
    const [defaultDateInput, setDefaultDateInput] = useState("Date of birth")
    const [phoneNumber, setPhoneNumber] = useState("")

    const onSubmit = data => {
        let userData = {
            ...data,
            phoneNumber,
            date: date?.toISOString().split('T')[0],
            isLoggedIn: true
        }
        dispatch(saveUser(userData))
    };

    const onChangeLanguage = () => {
        const isRTL = language == 'ar'
        I18nManager.allowRTL(!isRTL)
        I18nManager.forceRTL(!isRTL)
        dispatch(changeLanguage())
        clearTimeout(timeout)
        let timeout = setTimeout(() => RNRestart.Restart(), 500)
    }

    return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <TouchableOpacity onPress={onChangeLanguage}>
                <Text>
                    {language == 'en' ? 'عربي' : 'English'}
                </Text>
            </TouchableOpacity>

            <CustomImage
                source={assets.LOGO}
                style={styles.logo}
            />
            <CustomInput
                name={"username"}
                placeholder={"username"}
                control={control}
                rules={
                    {
                        required: 'Username is required',
                        minLength: {
                            value: 3,
                            message: 'Username should be at least 3 characters'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Username should be max of 20 characters'
                        },
                    }}
            />

            <CustomInput
                name={"email"}
                placeholder={"email"}
                control={control}
                rules={
                    {
                        required: 'Email is required',
                        pattern: {
                            value: CONSTANTS.REG_EXP.EMAIL_REG,
                            message: 'Email is invalid'
                        }
                    }
                }
            />

            <PhoneInput
                containerStyle={styles.phoneViewStyle}
                textContainerStyle={{ borderRadius: 8, paddingHorizontal: 12 }}
                codeTextStyle={{ height: 20 }}
                textInputStyle={{ color: colors.BLACK }}
                defaultValue={phoneNumber}
                defaultCode="JO"
                layout="first"
                onChangeText={(text) => {
                    setPhoneNumber(text);
                }}
                withShadow
            />

            <DatePicker
                mode='date'
                modal
                open={openDateModal}
                date={date}
                maximumDate={new Date("2021-12-31")}
                onConfirm={(date) => {
                    setOpenDateModal(false)
                    setDate(date)
                    setDefaultDateInput(false)
                }}
                onCancel={() => {
                    setOpenDateModal(false)
                }} />

            <CustomButton style={styles.date} buttonTextStyle={styles.buttonTextStyle} buttonText={defaultDateInput || date.toISOString().split('T')[0]} onPress={() => setOpenDateModal(true)} />

            <CustomButton buttonText="Submit" disabled={defaultDateInput || !phoneNumber} style={{ width: 100 }} onPress={handleSubmit(onSubmit)} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        margin: 32,
        borderRadius: 500
    },
    date: {
        backgroundColor: colors.WHITE,
        alignItems: 'flex-start',
    },
    buttonTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.GRAY
    },
    phoneViewStyle: {
        justifyContent: 'center',
        marginTop: 18,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: colors.WHITE,
        height: 50,
        borderColor: colors.PRIMARY,
    },
})

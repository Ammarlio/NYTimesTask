import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/common/CustomButton";
import CustomInput from "../../components/common/CustomInput";
import CustomImage from "../../components/common/CustomImage";
import assets from '../../utils/assets';
import DatePicker from 'react-native-date-picker'
import { colors } from "../../utils/colors";
import CONSTANTS from "../../constants/constants";

export default function Login(props) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            email: '',
            phone: '',
        }
    });
    const onSubmit = data => {
        console.log(data)
        props.passToHome(true)
    };

    const [date, setDate] = useState(new Date())
    const [openDateModal, setOpenDateModal] = useState(false)
    const [defaultDateInput, setDefaultDateInput] = useState("Date of birth")

    return (
        <View style={styles.container}>

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
            <CustomInput
                name={"phone"}
                placeholder={"phone"}
                control={control}
                keyboardType='number-pad'
                rules={
                    {
                        required: 'Phone number is required',
                        minLength: {
                            value: 14,
                            message: 'Phone number should be at least 14 characters'
                        },
                        pattern: {
                            value: CONSTANTS.REG_EXP.PHONE_REG,
                            message: 'Phone number is invalid'
                        }
                    }
                }
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

            <CustomButton buttonText="Submit" disabled={defaultDateInput} style={{ width: 100 }} onPress={handleSubmit(onSubmit)} />
        </View>
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
    }
})

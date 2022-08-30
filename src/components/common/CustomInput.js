import { StyleSheet, View, TextInput, Dimensions, Text } from 'react-native';
import { colors } from '../../utils/colors';
import { Controller } from 'react-hook-form';

const CustomInput = ({ control, name, rules = {}, placeholder, secure, keyboardType = null }) => {

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                        <TextInput
                            style={[styles.input, { borderColor: error ? colors.RED : colors.PRIMARY }]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}
                            secureTextEntry={secure}
                            keyboardType={keyboardType}
                        />
                        {error && <Text style={[styles.text, { color: colors.RED, marginTop: -4 }]}>{error.message}</Text>}
                    </>
                )}
            />
        </View>

    );
}


export default CustomInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width * 0.8,
        maxHeight: 50,
        marginVertical: 12
    },
    input: {
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: 12,
        height: '100%',
        color: colors.BLACK
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        marginStart: 8,
    }
});
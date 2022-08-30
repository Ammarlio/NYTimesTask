import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { colors } from '../../utils/colors';

const CustomButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} activeOpacity={.8}
            style={[styles.button, props.style, props.disabled ? { backgroundColor: colors.GRAY } : null]}>
            <Text style={[styles.text, props.buttonTextStyle]}>{props.buttonText}</Text>
        </TouchableOpacity>

    );
}

export default CustomButton;


const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width * 0.8,
        height: 50,
        backgroundColor: colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: colors.PRIMARY,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 20
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginStart: 8,
    }
});
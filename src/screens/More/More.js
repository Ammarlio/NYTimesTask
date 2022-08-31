import { View, StyleSheet } from "react-native"
import { Text, Card, Button, Icon, Image } from '@rneui/themed';
import { colors } from "../../utils/colors";

const More = (props) => {
    const { userData: { username, email, date, phoneNumber } } = props;
    return (
        <View style={styles.container}>
            <Card containerStyle={{ width: '90%' }}>
                <Card.Title>Personal Information</Card.Title>
                <Card.Divider />
                <View style={styles.row}>
                    <Icon
                        name="perm-identity"
                        size={24}
                        style={styles.icon}
                    />
                    <Text style={styles.field}>{username}</Text>
                </View>
                <View style={styles.row}>
                    <Icon
                        name="alternate-email"
                        size={24}
                        style={styles.icon}
                    />
                    <Text style={styles.field}>{email}</Text>
                </View>
                <View style={styles.row}>
                    <Icon
                        name="calendar-today"
                        size={24}
                        style={styles.icon}
                    />
                    <Text style={styles.field}>{date}</Text>
                </View>
                <View style={styles.row}>
                    <Icon
                        name="phone"
                        size={24}
                        style={styles.icon}
                    />
                    <Text style={styles.field}>{phoneNumber}</Text>
                </View>
            </Card>
            <View style={styles.buttonView}>
                <Button onPress={() => props.removeUser()} style={styles.button} color={colors.RED}>Logout</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    fonts: {
        marginBottom: 8,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
    field: {
        fontSize: 16,
    },
    buttonView: {
        margin: 16
    },
    button: {
        width: 100,
    }
});

export default More;
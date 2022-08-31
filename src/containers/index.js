import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CONSTANTS from '../constants/constants';
import News from '../screens/News';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import More from '../screens/More';
import Details from '../screens/Details';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NewsStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();

const NewsStackScreen = () => {
    return (
        <NewsStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
            <NewsStack.Screen
                name={CONSTANTS.SCREENS.NEWS}
                component={News}
                options={{
                    headerShown: false,
                    headerTitleStyle: {
                        color: colors.PRIMARY,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: colors.WHITE,
                    },
                }}
            />
        </NewsStack.Navigator>
    );
}

const MoreStackScreen = () => {
    return (
        <MoreStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
            <MoreStack.Screen
                name={CONSTANTS.SCREENS.MORE}
                component={More}
                options={{
                    headerShown: false,
                    headerTitleStyle: {
                        color: colors.PRIMARY,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: colors.WHITE,
                    },
                }}
            />
        </MoreStack.Navigator>
    );
}

const TabbarStackScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={CONSTANTS.SCREENS.HOME}
                component={NewsStackScreen}
                options={{
                    headerTitle: 'News',
                    headerTitleStyle: {
                        color: colors.PRIMARY,
                        fontWeight: 'bold',
                        fontSize: 24
                    },
                    headerStyle: {
                        backgroundColor: colors.WHITE,
                    },
                    tabBarHideOnKeyboard: true,
                    tabBarLabel: "News",
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIconStyle: styles.tabBarIcon,
                    tabBarActiveTintColor: colors.PRIMARY,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon
                            style={focused ? styles.focused : styles.normal}
                            name="newspaper-o"
                            type="font-awesome"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={CONSTANTS.SCREENS.MORE_TAB}
                component={MoreStackScreen}
                options={{
                    headerTitle: 'More',
                    headerTitleStyle: {
                        color: colors.PRIMARY,
                        fontWeight: 'bold',
                        fontSize: 24
                    },
                    headerStyle: {
                        backgroundColor: colors.WHITE,
                    },
                    tabBarHideOnKeyboard: true,
                    tabBarLabel: "More",
                    tabBarLabelStyle: styles.tabBarLabel,
                    tabBarIconStyle: styles.tabBarIcon,
                    tabBarActiveTintColor: colors.PRIMARY,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon
                            style={focused ? styles.focused : styles.normal}
                            name="user-circle"
                            type="font-awesome"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const Home = () => {
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
            <RootStack.Screen
                name={'BottomTabbar'}
                component={TabbarStackScreen}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name={CONSTANTS.SCREENS.DETAILS}
                component={Details}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        color: colors.PRIMARY,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: colors.WHITE,
                    },
                }}
            />
        </RootStack.Navigator>
    )
}

export default Home;


const styles = StyleSheet.create({
    focused: {
        fontSize: 24,
        color: colors.PRIMARY,
    },
    normal: {
        fontSize: 24,
        color: colors.GRAY,
    },
    tabBarStyle: {
        backgroundColor: colors.WHITE,
        borderTopWidth: 1,
        borderTopColor: colors.BLACK,
    },
    tabBarLabel: {
        marginBottom: 4,
        fontSize: 12,
    },
    tabBarIcon: {
        marginTop: 4,
    },
    tabBarBadge: {
        fontSize: 10,
        color: colors.WHITE,
        backgroundColor: colors.PRIMARY,
        borderColor: colors.BLACK,
        borderWidth: 0.5,
    },
})
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/index'
import { Exercicios } from './pages/exercicios'
import { Ionicons } from '@expo/vector-icons/'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#7fadc4"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#3e4e57"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="exercicios"
                component={Exercicios}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#7fadc4"} name="fitness" />)
                        }
                        return (<Ionicons size={20} color={"#3e4e57"} name="fitness-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}
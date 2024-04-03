import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AS_USER from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Menu from './Menu';
import Login from '../pages/Login/Login';

const Stack = createStackNavigator();
const Routes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };
    const handleLogOut = () => {
        setIsAuthenticated(false);
        AS_USER.removeItem('user');
    };
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                    initialParams={{ loginSuccess: handleLoginSuccess }}
                />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;

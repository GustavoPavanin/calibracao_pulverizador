import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/components/Menu';

export default function App() {
    return (
        <NavigationContainer>
            <Menu />
        </NavigationContainer>
    );
}

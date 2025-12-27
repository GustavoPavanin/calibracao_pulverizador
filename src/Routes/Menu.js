import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../pages/Home/Home';
import CalibraCaoPulverizador from '../pages/CalibracaoPulverizador/CalibracaoPulverizador';
import CalculadoraAdubacao from '../pages/CalculadoraAdubacao/CalculadoraAdubacao';
import RegraDeTres from '../pages/RegraDeTres/RegraDeTres';
import { Text } from 'react-native';
import CalculadoraCalda from '../pages/CalculadoraCalda/CalculadoraCalda';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
);

export default function Menu() {
    return (
        <Drawer.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Inicio" component={Home} />

            <Drawer.Screen
                name="Calibração de pulverizador"
                component={CalibraCaoPulverizador}
                options={{
                    drawerLabel: () => <Text>Calibração de pulverizador</Text>,
                }}
            />

            <Drawer.Screen
                name="Regulagem de adubação"
                component={CalculadoraAdubacao}
                options={{
                    drawerLabel: () => <Text>Regulagem de adubação</Text>,
                }}
            />

            <Drawer.Screen
                name="Regra de Três"
                component={RegraDeTres}
                options={{
                    drawerLabel: () => <Text>Regra de Três Simples</Text>,
                }}
            />
            <Drawer.Screen
                name="Calculadora de calda"
                component={CalculadoraCalda}
                options={{
                    drawerLabel: () => <Text>Calculadora de calda</Text>,
                }}
            />
        </Drawer.Navigator>
    );
}

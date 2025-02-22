import {
    DrawerContentScrollView,
    DrawerItemList,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import Home from '../pages/Home/Home';
import CalibraCaoPulverizador from '../pages/CalibracaoPulverizador/CalibracaoPulverizador';
import CalculadoraAdubacao from '../pages/CalculadoraAdubacao/CalculadoraAdubacao';
import RegraDeTres from '../pages/RegraDeTres/RegraDeTres';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const Menu = () => {
    return (
        <>
            <Drawer.Navigator
                initialRouteName="Inicio"
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Inicio" component={Home} />
                <Drawer.Screen
                    name="Calibração de pulverizador"
                    component={CalibraCaoPulverizador}
                    options={{
                        drawerLabel: ({ focused }) => <Text>Calibração de pulverizador</Text>,
                    }}
                />
                <Drawer.Screen
                    name="Regulagem de adubação"
                    component={CalculadoraAdubacao}
                    options={{
                        drawerLabel: ({ focused }) => <Text>Regulagem de adubação</Text>,
                    }}
                />
                <Drawer.Screen
                    name="Regra de Três"
                    component={RegraDeTres}
                    options={{
                        drawerLabel: ({ focused }) => <Text>Regra de Três Simples</Text>,
                    }}
                />
                {/* <Drawer.Screen
                    name="Calibrador de Distribuição"
                    component={CalibradorDistribuicao}
                    options={{
                        drawerLabel: ({ focused }) => <Text>Calibrador de Distribuição</Text>,
                    }}
                /> */}
            </Drawer.Navigator>
        </>
    );
};

export default Menu;

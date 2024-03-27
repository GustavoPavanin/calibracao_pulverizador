import { createDrawerNavigator } from '@react-navigation/drawer';
import CalibracaoPulverizador from '../pages/CalibracaoPulverizador/CalibracaoPulverizador';
import Home from '../pages/Home/Home';
import CalibradorDistribuicao from '../pages/CalibradorDistribuicao';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();
const Menu = () => {
    return (
        <>
            <Drawer.Navigator initialRouteName="Inicio">
                <Drawer.Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        drawerLabel: ({ focused }) => <Text>Inicio</Text>,
                    }}
                />
                <Drawer.Screen
                    name="Calibração de pulverizador"
                    component={CalibracaoPulverizador}
                    options={{
                        drawerLabel: ({ focused }) => <Text>Calibração de pulverizador</Text>,
                    }}
                />
                <Drawer.Screen
                    name="Calibrador de Distribuição"
                    component={CalibradorDistribuicao}
                    options={{
                        drawerLabel: ({ focused }) => <Text>Calibrador de Distribuição</Text>,
                    }}
                />
            </Drawer.Navigator>
        </>
    );
};

export default Menu;

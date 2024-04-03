import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import Home from '../pages/Home/Home';
import CalibradorDistribuicao from '../pages/CalibradorDistribuicao';
import CalibraCaoPulverizador from '../pages/CalibracaoPulverizador/CalibracaoPulverizador';
import { Text } from 'react-native';
import AS_USER from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
    const handleLogout = async () => {
        AS_USER.removeItem('user');
        props.navigation.pop();
    };
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={handleLogout} />
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

import { Text, View } from 'react-native';

const HomeView = () => {
    const appVersion = '1.0.0'; // Versão do seu aplicativo
    return (
        <View className="flex flex-1 justify-center items-center">
            <Text className="text-2xl font-bold mb-4">Boas Vindas</Text>
            <View className="absolute bottom-0 left-0 right-0 p-4 bg-gray-200">
                <Text className="text-center text-sm">Versão do aplicativo: {appVersion}</Text>
            </View>
        </View>
    );
};

export default HomeView;

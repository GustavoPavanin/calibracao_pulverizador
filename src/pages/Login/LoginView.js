import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ModalCustom from '../../components/Modal';

const LoginView = ({
    email,
    handleEmail,
    password,
    handlePassword,
    handleLogin,
    disableLoginButton,
    errorLogin,
    isLoading,
    handleResetPassword,
    isModalVisible,
    modalTitle,
    modalMessage,
    handleCloseModal,
}) => {
    const buttonStyle = disableLoginButton
        ? 'rounded-md w-11/12 py-2 h-12 justify-center bg-gray-500'
        : 'rounded-md w-11/12 py-2 h-12 justify-center bg-blue-500';
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('../../../assets/icon.png')}
                style={{ width: 300, height: 300, marginTop: 20 }}
            />
            <TextInput
                className="border border-gray-300 rounded-md w-11/12 px-4 py-2 mb-4"
                placeholder="Email"
                value={email}
                onChangeText={handleEmail}
                autoCapitalize="none"
            />
            <TextInput
                className="border border-gray-300 rounded-md w-11/12 px-4 py-2 mb-4"
                placeholder="Senha"
                value={password}
                onChangeText={handlePassword}
                secureTextEntry
            />
            {errorLogin && <Text className="text-red-600 mb-2">Usuário ou senha inválidos</Text>}
            <TouchableOpacity
                onPress={handleLogin}
                className={buttonStyle}
                disabled={disableLoginButton}
            >
                <Text className="text-white text-center font-semibold">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mt-4" onPress={handleResetPassword}>
                <Text className="text-blue-500">Esqueceu sua senha?</Text>
            </TouchableOpacity>

            {isLoading && (
                <View className="bg-black w-full h-full opacity-50 absolute inset-0 flex items-center justify-center pt-12">
                    <ActivityIndicator size="large" color="#00f000" />
                </View>
            )}
        </View>
    );
};

export default LoginView;

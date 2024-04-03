import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const ModalCustom = (isVisible, onClose, modalTitle, modalMessage) => {
    return (
        <Modal isVisible={isVisible} className="justify-center items-center">
            <View className="bg-white p-4 rounded-lg">
                <Text className="text-lg font-bold mb-2">{modalTitle}</Text>
                <Text className="text-base mb-4">{modalMessage}</Text>
                <TouchableOpacity onPress={onClose} className="bg-blue-500 rounded-lg p-2">
                    <Text className="text-white font-bold text-center">Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ModalCustom;

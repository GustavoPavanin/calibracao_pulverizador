import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const FloatingResult = ({ isVisible, onClose, results }) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            backdropOpacity={0.3}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <View className="bg-white p-6 rounded-t-2xl items-center w-full relative">
                <TouchableOpacity className="absolute top-2 right-4" onPress={onClose}>
                    <Text className="text-lg font-bold text-gray-500">x</Text>
                </TouchableOpacity>

                <Text className="text-lg font-semibold mb-2">Resultados:</Text>

                <View className="w-full items-center">
                    {Object.entries(results).map(([key, value]) => (
                        <View key={key} className="mt-2 items-center">
                            <Text className="text-base font-medium">{key}:</Text>
                            <Text className="text-2xl font-bold text-blue-500">{value}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Modal>
    );
};

export default FloatingResult;

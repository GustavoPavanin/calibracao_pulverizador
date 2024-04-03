import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ id, onChangeText, value, keyboardType, unMed, editable, placeholder }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View className="w-full relative">
            <Text className="text-gray-600 ">{placeholder}</Text>
            <View className="relative flex flex-row items-center">
                <TextInput
                    id={id}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    className="border border-gray-300 p-2 rounded-md flex-1 focus:border-blue-500"
                    editable={editable}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <Text className="text-gray-500 text-md text-opacity-80 absolute left-80 top-3">
                    {unMed}
                </Text>
            </View>
        </View>
    );
};

export default Input;

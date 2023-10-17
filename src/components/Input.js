import { Text, TextInput, View } from "react-native";

const Input = ({id, onChangeText, value, keyboardType, unMed, editable}) => {
    return(
        <View className="flex flex-row content-center">
        <TextInput 
            id={id} 
            onChangeText={onChangeText} 
            value={value} 
            keyboardType={keyboardType} 
            className="border border-slate-600 rounded w-5/6 px-1"
            editable={editable}
        />
        <Text className="px-2">{unMed}</Text>
        </View>
    );
}

export default Input;
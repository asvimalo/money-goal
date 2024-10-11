import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function MainScreen() {
  return (
    <>
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        <Text>Main</Text>    
        </View>
    </>
  );
}


const styles = StyleSheet.create({
    text: {
        
        backgroundColor: "cyan"
    },
    button:{
        fontSize: 20,
        color: "white"    
    }
})
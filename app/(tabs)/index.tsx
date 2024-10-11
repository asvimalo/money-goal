import IncomeScreen from "@/components/joel/income";
import Main from "@/components/main/main";
import OutcomeScreen from "@/components/pablo/outcome";
import { Image, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Link } from "expo-router";


export default function HomeScreen() {
  return (
    
      <View
        style={styles.container}
      >
        <Text></Text>
        <View style={styles.nav}>          
        </View>
      </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  nav: {
    flexDirection: "row",
    backgroundColor: "grey"
  },
  button: {
    fontSize: 20,
    color: "white",
    padding: 10,
    backgroundColor: "blue"  
  }
});


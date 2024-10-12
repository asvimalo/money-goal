import { Link, withLayoutContext } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from "@/components/main/main";
import IncomeScreen from "@/components/joel/income";
import OutcomeScreen from "@/components/pablo/outcome";

const Tab  = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Income" component={IncomeScreen} />
      <Tab.Screen name="Outcome" component={OutcomeScreen} />
  </Tab.Navigator>
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


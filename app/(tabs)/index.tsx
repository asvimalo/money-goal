import { Text, View, StyleSheet } from "react-native";

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


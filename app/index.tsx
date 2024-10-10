import IncomeScreen from "@/components/joel/income";
import Main from "@/components/main/main";
import OutcomeScreen from "@/components/pablo/outcome";
import { Image, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text></Text>
      <View style={{flexDirection: "row"}}>
        <Main></Main>
        <IncomeScreen></IncomeScreen>
        <OutcomeScreen></OutcomeScreen>
      </View>
    </View>
  );
}

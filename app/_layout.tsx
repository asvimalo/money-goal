import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
// import NavigationScreen from "@/components/navigation/navigation"

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{headerShown:true, title: "Money Goal"}}/>
      </Stack>
  );
}

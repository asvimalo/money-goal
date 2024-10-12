import { Stack } from "expo-router";
import { Image } from "react-native";
import { Ionicons }  from "@expo/vector-icons"

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" 
          options={{ 
            headerLeft: () => (
              <Image 
                source={{uri: "https://avatars.githubusercontent.com/u/10258558?v=4&size=64"}}
                style={{ width: 25, height:25, borderRadius:50, resizeMode: 'contain'}}
              />
            ),
            headerRight: () => <Ionicons name="settings-outline" size={25} color="black"/>,
            title: ""
          }}
         />
        <Stack.Screen name="+not-found" options={{ headerShown:false, title: "Not Found"}}/>
      </Stack>
  );
}

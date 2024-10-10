import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

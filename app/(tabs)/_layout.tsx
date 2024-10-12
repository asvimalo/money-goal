import { Tabs, withLayoutContext } from "expo-router";
import { Ionicons }  from "@expo/vector-icons"


export default function TabsLayout() {
  return (
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
            backgroundColor: '#25292e'
        }
      }}>
        <Tabs.Screen 
            name="index" 
            options={{ 
                headerShown:true, 
                headerTitle: "Money Goal", 
                tabBarIcon: ({focused, color}) => <Ionicons 
                    name={focused ? "home-sharp" : "home-outline"} 
                    color={color} 
                    size={30}/>}}
        />
        <Tabs.Screen 
            name="about" 
            options={{ 
                headerShown:true, 
                title: "About",
                tabBarIcon: ({focused, color}) => <Ionicons 
                    name={focused ? 'information-circle' : 'information-circle-outline'} 
                    color={color} 
                    size={30}/>}}
        />
      </Tabs>     
  );
}

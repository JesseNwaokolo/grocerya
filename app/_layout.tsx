import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Index from "./index";
import Onbaording from "./(auth)/onboarding";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name="onboarding" component={Onbaording} />
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  const [loaded] = Font.useFonts({
    PoppinsLight: require("@/assets/fonts/Poppins-Light.ttf"),
    PoppinsRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("@/assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("@/assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (!loaded) return;
    SplashScreen.hideAsync();
  }, [loaded]);

   if (!loaded) return null;

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

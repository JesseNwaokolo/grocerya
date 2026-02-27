import Onboarding from "@/src/screens/onboarding";
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeDrawerNavigator from "./src/navigation/HomeDrawerNavigator";
import Category from "./src/screens/category";
import Location from "./src/screens/location";
import Login from "./src/screens/login";
import Notification from "./src/screens/notification";
import Otp from "./src/screens/otp";

export type HomeTabParamList = {
  home: undefined;
  cart: undefined;
  favourite: undefined;
  profile: undefined;
};

export type RootStackParamList = {
  onboarding: undefined;
  login: undefined;
  otp: undefined;
  category: undefined;
  location: undefined;
  notification: undefined;
  app: NavigatorScreenParams<HomeTabParamList>
};

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
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
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="onboarding"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="otp" component={Otp} />
          <Stack.Screen name="category" component={Category} />
          <Stack.Screen name="location" component={Location} />
          <Stack.Screen name="notification" component={Notification} />
          <Stack.Screen name="app" component={HomeDrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

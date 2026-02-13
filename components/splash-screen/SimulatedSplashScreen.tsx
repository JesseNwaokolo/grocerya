import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SimulatedSplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 184.79, height: 40.33 }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default SimulatedSplashScreen;

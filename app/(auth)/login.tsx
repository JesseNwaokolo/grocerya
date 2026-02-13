import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 32, fontFamily: "PoppinsBold" }}>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

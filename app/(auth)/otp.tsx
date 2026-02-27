import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionMarkIcon from "@/components/icons/question-mark-icon";
import { BackIcon } from "@/components/icons";
import { useRouter } from "expo-router";
import Button from "@/components/buttons/Button";
import { FONTS } from "@/themes/theme";
import OTPInput from "@/components/auth/OTPInput";

const Otp = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {/* icon */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 40,
              }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <BackIcon />
              </TouchableOpacity>
              <QuestionMarkIcon />
            </View>

            {/* content */}
            <View>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: 20,
                  color: "#0D0D0D",
                  marginBottom: 8,
                }}
              >
                Enter your OTP number
              </Text>

              <Text style={{ fontFamily: FONTS.regular, fontSize: 16, color:"#777777" }}>
                We’ve sent the OTP number via sms to{" "}
              </Text>
              <Text style={{ fontFamily: FONTS.semiBold, fontSize: 16, marginBottom:20  }}>
                +62 888 1234 5678
              </Text>

              <View>
                <OTPInput />
              </View>
            </View>
          </View>

          {/* button */}
          <View style={{ gap: 8, alignItems: "center" }}>
            <Button title="Continue" onPress={()=>router.push("/(auth)/category")} />
            <Text style={{ fontSize: 12, fontFamily: FONTS.medium, color:"#777777" }}>
              By clicking, I accept the <Text style={{color:"#000000"}}>Terms and Conditions</Text> & <Text style={{color:"#000000"}}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

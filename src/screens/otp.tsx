import OTPInput from "@/components/auth/OTPInput";
import Button from "@/components/buttons/Button";
import { BackIcon } from "@/components/icons";
import QuestionMarkIcon from "@/components/icons/question-mark-icon";
import SafeAreaWithKeyboard from "@/components/SafeAreaWithKeyboard";
import { useRouter } from "@/hooks/useRouter";
import { FONTS } from "@/themes/theme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Otp = () => {
  const navigation = useRouter();
  return (
    <SafeAreaWithKeyboard>
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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

            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 16,
                color: "#777777",
              }}
            >
              We’ve sent the OTP number via sms to{" "}
            </Text>
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: 16,
                marginBottom: 20,
              }}
            >
              +62 888 1234 5678
            </Text>

            <View>
              <OTPInput />
            </View>
          </View>
        </View>

        {/* button */}
        <View style={{ gap: 8, alignItems: "center", marginBottom: 48 }}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("category")}
          />
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.medium,
              color: "#777777",
            }}
          >
            By clicking, I accept the{" "}
            <Text style={{ color: "#000000" }}>Terms and Conditions</Text> &{" "}
            <Text style={{ color: "#000000" }}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaWithKeyboard>
  );
};

export default Otp;



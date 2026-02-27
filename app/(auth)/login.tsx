import Button from "@/components/buttons/Button";
import QuestionMarkIcon from "@/components/icons/question-mark-icon";
import { FONTS } from "@/themes/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import PhoneInput, {
  ICountry,
  isValidPhoneNumber,
} from "react-native-international-phone-number";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);

    if (isValidPhoneNumber(inputValue, selectedCountry!)) {
      setError("");
    } else {
      setError("Not a valid Phone number");
    }
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
      >
        {/* icon */}
        <View style={styles.iconContainer}>
          <QuestionMarkIcon />
        </View>

        {/* content-conatiner */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {/* content */}
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.contentTitle}>Get started</Text>
              <Text style={styles.contentText}>
                You can log in or make an account if you’re new
              </Text>
            </View>

            {/* phone-number */}
            <View style={{ marginBottom: 16 }}>
              {/* title */}
              <Text style={styles.numberTitle}>Enter your phone number</Text>
              <View>
                <PhoneInput
                  defaultValue=""
                  value={inputValue}
                  onChangePhoneNumber={handleInputValue}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={handleSelectedCountry}
                  placeholder="Phone Number"
                  placeholderTextColor={"#000000"}
                  defaultCountry="NG"
                  phoneInputStyles={{
                    container: {
                      borderWidth: 0,
                    },
                    input: {
                      backgroundColor: "#F2F2F3",
                      borderRadius: 8,
                    },
                    flagContainer: {
                      marginRight: 16,
                      borderRadius: 8,
                      backgroundColor: "#F2F2F3",
                      width: "auto",
                      height: 52,
                    },
                    divider: {
                      display: "none",
                    },
                    caret: {
                      display: "none",
                    },
                    callingCode: {
                      fontFamily: FONTS.medium,
                      fontSize: 18,
                    },
                  }}
                />
              </View>
            </View>

            <Text style={{ color: "red" }}>{error}</Text>
          </View>

          {/* button */}
          <View>

          <Button title="Continue" onPress={() => router.push("/(auth)/otp")} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: "flex-end",
    marginBottom: 40,
  },
  contentTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    color: "#0D0D0D",
    // lineHeight : 16,
    marginBottom: 8,
  },
  contentText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    // lineHeight : 16,
    color: "#777777",
  },
  numberTitle: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#0D0D0D",
    marginBottom: 8,
  },
});

{
  /* <Text>
          isValid:{' '}
          {isValidPhoneNumber(inputValue, selectedCountry) ? 'true' : 'false'}
        </Text> */
}

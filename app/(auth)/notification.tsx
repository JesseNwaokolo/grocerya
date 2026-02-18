import Button from "@/components/buttons/Button";
import { BackIcon, PhoneIcon, QuestionMarkIcon } from "@/components/icons";
import { FONTS } from "@/themes/theme";
import { useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
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

            {/* title */}
            <View>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: 20,
                  color: "#0D0D0D",
                  marginBottom: 8,
                }}
              >
                Lastly, please enable notification
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: 16,
                  color: "#777777",
                  marginBottom: 20,
                }}
              >
                Enable your notifications for more update and important messages
                about your grocery needs
              </Text>
            </View>

            {/* contents */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PhoneIcon />
            </View>
          </View>
        </View>

        {/* button */}
        <View style={{ gap: 16 }}>
          <Button title="Enable Notifications" />

          <Button title="Skip For Now" variant="secondary" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

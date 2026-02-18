import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon, MapIcon, QuestionMarkIcon } from "@/components/icons";
import { useRouter } from "expo-router";
import Button from "@/components/buttons/Button";
import { FONTS } from "@/themes/theme";

const Location = () => {
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

            {/* contents */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginBottom: 40 }}>
                <MapIcon />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: 20,
                  color: "#0D0D0D",
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                Set your location
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: 16,
                  color: "#777777",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                This let us know your location for best shipping experience
              </Text>
            </View>
          </View>
        </View>

        {/* button */}
        <View style={{ gap: 16 }}>
          <Button
            title="Allow Google Maps"
            onPress={() => router.push("/(auth)/notification")}
          />

          <Button title="Set Manually" variant="secondary" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

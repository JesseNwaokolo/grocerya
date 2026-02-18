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
import { BackIcon, QuestionMarkIcon } from "@/components/icons";
import { useRouter } from "expo-router";
import Button from "@/components/buttons/Button";
import { FONTS } from "@/themes/theme";
import CategorySelection from "@/components/auth/CategorySelection";

const Category = () => {
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
            <View>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: 20,
                  color: "#0D0D0D",
                  marginBottom: 8,
                }}
              >
                All your grocery need in one place
              </Text>

              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: 16,
                  color: "#777777",
                  marginBottom: 20,
                }}
              >
                Select your desired shop category
              </Text>


              {/* category */}

              <CategorySelection />
            </View>
          </View>

          {/* button */}
          <View>
            <Button title="Continue" onPress={()=>router.push("/(auth)/location")} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

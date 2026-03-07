import { KeyboardAvoidingView, Platform } from "react-native";
import SafeArea from "./SafeArea";
import { ReactNode } from "react";

const SafeAreaWithKeyboard = ({ children }: { children: ReactNode }) => {
  return (
    <SafeArea>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default SafeAreaWithKeyboard;

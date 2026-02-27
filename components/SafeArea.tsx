import { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

interface Props extends SafeAreaViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeArea = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

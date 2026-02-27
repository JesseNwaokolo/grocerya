import Button from "@/components/buttons/Button";
import { BackIcon, PhoneIcon, QuestionMarkIcon } from "@/components/icons";
import SafeArea from "@/components/SafeArea";
import { useRouter } from "@/hooks/useRouter";
import { FONTS } from "@/themes/theme";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";

const Notification = () => {
  const navigation = useRouter();
  return (
   <SafeArea>

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
        <View style={{ gap: 16, marginBottom: 48 }}>
          <Button
            title="Enable Notifications"
            onPress={() => navigation.replace("app", { screen: "home" })}
          />
          <Button title="Skip For Now" variant="secondary" />
        </View>
        </SafeArea>
  );
};

export default Notification;


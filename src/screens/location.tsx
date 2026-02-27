import { BackIcon, MapIcon, QuestionMarkIcon } from "@/components/icons";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Button from "@/components/buttons/Button";
import SafeArea from "@/components/SafeArea";
import { useRouter } from "@/hooks/useRouter";
import { FONTS } from "@/themes/theme";

const Location = () => {
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
      <View style={{ gap: 16, marginBottom: 48 }}>
        <Button
          title="Allow Google Maps"
          onPress={() => navigation.navigate("notification")}
        />

        <Button title="Set Manually" variant="secondary" />
      </View>
    </SafeArea>
  );
};

export default Location;



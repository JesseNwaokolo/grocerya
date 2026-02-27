import { BackIcon, QuestionMarkIcon } from "@/components/icons";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";

import CategorySelection from "@/components/auth/CategorySelection";
import Button from "@/components/buttons/Button";
import SafeArea from "@/components/SafeArea";
import { useRouter } from "@/hooks/useRouter";
import { FONTS } from "@/themes/theme";

const Category = () => {
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
          <View style={{ marginBottom: 48 }}>
            <Button
              title="Continue"
              onPress={() => navigation.navigate("location")}
            />
          </View>
        </View>
        </SafeArea>
   
  );
};

export default Category;



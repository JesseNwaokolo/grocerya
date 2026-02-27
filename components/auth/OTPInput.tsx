import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";

interface OtpInputProps {
  inputNumber?: number;
}

const OTPInput = ({ inputNumber = 5 }: OtpInputProps) => {
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [otp, setOtp] = useState<string[]>(Array(inputNumber).fill(""));
  const [value, setValue] = useState("");

  useEffect(() => {
    // Auto-focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (text: string, index: number) => {
    //  remove non digit
    const sanitized = text.replace(/[^0-9]/g, "");

    const newOtp = [...otp];
    newOtp[index] = sanitized;
    setOtp(newOtp);

    // Auto-focus next input if there's a digit
    if (sanitized && index < inputNumber - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Console log when all filled
    if (newOtp.every((digit) => digit !== "")) {
      setValue(newOtp.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace - move to previous input
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {otp.map((item, index) => {
          return (
            // <View key={index}>
            <TextInput
              key={index}
              defaultValue={item}
              style={{
                height: 71,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "f2f2f3",
                backgroundColor: "#F2F2F3",
                flex: 1,
                alignItems: "center",
                textAlign: "center",
              }}
              keyboardType="number-pad"
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              maxLength={1}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
            />
            // </View>
          );
        })}
      </View>
      <Text style={{ color: "black", fontSize: 16, marginTop: 10 }}>
        {value}
      </Text>
    </View>
  );
};

export default OTPInput;

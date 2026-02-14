import {  Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
interface IButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
}

const Button = ({ title, variant = "primary", ...rest }: IButtonProps) => {
  switch (variant) {
    case "primary":
      return (
        <TouchableOpacity
          {...rest}
          style={{
            width: "100%",
            paddingVertical: 14,
            borderRadius: 100,
            backgroundColor: "#0D0D0D",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "PoppinsMedium",
              fontSize: 16,
              color: "white",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      );

    case "secondary":
      return (
        <TouchableOpacity
          {...rest}
          style={{
            width: "100%",
            paddingVertical: 14,
            borderRadius: 100,
            backgroundColor: "#F2F2F3",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "PoppinsMedium",
              fontSize: 16,
              color: " #0D0D0D",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      );
  }
};

export default Button;

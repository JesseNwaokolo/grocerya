import { RootStackParamList } from "@/App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useRouter = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return navigation;
};

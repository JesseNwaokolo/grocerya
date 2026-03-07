import SafeArea from "@/components/SafeArea";
import { useRouter } from "@/hooks/useRouter";
import { DrawerActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Home = () => {
  const navigation = useRouter();
  return (
    <SafeArea>
      <View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text>Home</Text>
      </View>
    </SafeArea>
  );
};

export default Home;

const styles = StyleSheet.create({
  avatar: { width: 64, height: 64, borderRadius: 32, marginBottom: 12 },
});

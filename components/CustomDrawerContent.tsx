import { FONTS } from "@/themes/theme";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Image } from "expo-image";
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* Profile section */}
        <View>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolO3gMJCbvwCa7YtpaZDfyZ4CKasuqvj6qg&s",
            }}
            style={styles.avatar}
            placeholder={
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd4AZxrll0-kGt2oi0eyMa-nwDhJH2kYOHwTl3JGRCw-f25TUK"
            }
          />
        </View>

        <Text style={styles.name}>Jesse Nwaokolo</Text>
        <Text style={styles.email}>jesse@example.com</Text>

        {/* Drawer links */}
        <Pressable style={styles.item}>
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable style={styles.item}>
          <Text style={styles.text}>Cart</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.text}>Favourite</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.text}>Profile</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  avatar: { width: 64, height: 64, borderRadius: 32, marginBottom: 12 },
  name: { fontSize: 18, fontFamily: FONTS.semiBold },
  email: { color: "#888", marginBottom: 24, fontFamily: FONTS.light },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  text: {
    fontFamily: FONTS.regular,
  },
});

// src/components/CustomDrawerContent.tsx
import { FONTS } from "@/themes/theme";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* Profile section */}
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@example.com</Text>

        {/* Drawer links */}
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Favourite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
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

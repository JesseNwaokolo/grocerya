import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import CustomDrawerContent from "@/components/CustomDrawerContent";
const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
        swipeEnabled: true,
        swipeEdgeWidth: 100,
      }}
    >
      <Drawer.Screen name="tabs" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

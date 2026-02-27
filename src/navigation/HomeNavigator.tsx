import { BagIcon, FavouriteIcon, HomeIcon, ProfileIcon } from "@/components/icons";
import { FONTS } from "@/themes/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Cart from "../screens/home/cart";
import Favourite from "../screens/home/favourite";
import Home from "../screens/home/home";
import Profile from "../screens/home/profile";

const Tab = createBottomTabNavigator();

const TABS = [
  { name: "home", icon: HomeIcon },
  { name: "cart", icon: BagIcon },
  { name: "favourite", icon: FavouriteIcon },
  { name: "profile", icon: ProfileIcon },
];

function CustomTabBar({ state, navigation }: any) {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={[styles.tabBarWrapper, { paddingBottom: bottom, paddingTop: 16 }]}
    >
      <View style={styles.tabBarContainer}>
        {state.routes.map((route: any, index: number) => {
          const isActive = state.index === index;
          const tab = TABS[index];
          const Icon = tab.icon
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={[styles.tabItem, isActive && styles.activeTabItem]}
            >
              <Icon color={isActive ? "#0D0D0D" : "#CCCCCC"} />
              {isActive && (
                <Text style={styles.activeLabel}>
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="favourite" component={Favourite} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarWrapper: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    gap: 12,
  },
  activeTabItem: {
    backgroundColor: "#EEEEEE",
  },
  activeLabel: {
    color: "#0D0D0D",
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
});

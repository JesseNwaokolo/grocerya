import Button from "@/components/buttons/Button";
import { data } from "@/constants/onboarding-data";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../themes/theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Onbaording = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter()

  //handle scroll function
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  // navigate to next slide
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: SCREEN_WIDTH * (currentIndex + 1),
        animated: true,
      });
    }
  };

  // skip to last slide
  const handleSkip = () => {
    scrollViewRef.current?.scrollTo({
      x: SCREEN_WIDTH * (data.length - 1),
      animated: true,
    });
  };

  // navigate to app
  const handleGetStarted = () => {
    router.replace("/(auth)/login")
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* pagination */}
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activePaginationDot,
            ]}
          />
        ))}
      </View>

      {/* content */}
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          decelerationRate={"fast"}
          scrollEventThrottle={16}
          onMomentumScrollEnd={handleScroll}
          ref={scrollViewRef}
        >
          {data.map((item) => {
            const Icon = item.icon;
            return (
              <View
                key={item.id}
                style={[styles.slideItem, { width: SCREEN_WIDTH }]}
              >
                {/* image */}
                <View style={styles.iconContainer}>
                  <Icon />
                </View>
                {/* title */}
                <Text style={styles.title}>{item.title}</Text>
                {/* content */}
                <Text style={styles.content}>{item.content}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* buttons */}
      <View style={styles.buttonContainer}>
        {currentIndex === data.length - 1 ? (
          <View>
            <Button title="Get Started" onPress={handleGetStarted} />
          </View>
        ) : (
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={{ flex: 1 }}>
              <Button title="Skip" variant="secondary" onPress={handleSkip} />
            </View>
            <View style={{ flex: 1 }}>
              <Button title="Next" onPress={handleNext} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onbaording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },

  paginationContainer: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 20,
  },

  paginationDot: {
    height: 3,
    borderRadius: 100,
    backgroundColor: "#F2F2F3",
    flex: 1,
  },

  activePaginationDot: {
    backgroundColor: "#0D0D0D",
  },

  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 48,
  },
  slideItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 29,
  },
  iconContainer: {
    marginBottom: 28,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    marginBottom: 8,
    textAlign: "center",
    color: "#0D0D0D",
  },

  content: {
    fontSize: 16,
    color: "#777777",
    fontFamily: FONTS.regular,
    textAlign: "center",
  },
});

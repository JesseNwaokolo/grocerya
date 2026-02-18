import { categoryData } from "@/constants/category-data";
import { FONTS } from "@/themes/theme";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

const CategorySelection = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(false);

  const handleSelectedItem = (id: string) => {
    if (selected.includes(id)) {
      const newSelected = selected.filter((item) => item !== id);
      setSelected(newSelected);
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 16,
        columnGap: 20,
      }}
    >
      {categoryData.slice(0, 8).map((item) => {
        return (
          <Pressable
            key={item.id}
            style={[
              {
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderRadius: 100,
                backgroundColor: "#F2F2F3",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
              },
              selected.includes(item.id) && {
                backgroundColor: "#1ED7001A",
                borderColor: "#2DB217",
                borderWidth: 1.5,
              },
            ]}
            onPress={() => handleSelectedItem(item.id)}
          >
            <Text
              style={{
                color: "#0D0D0D",
                fontFamily: FONTS.medium,
                fontSize: 16,
              }}
            >
              {item.title}
            </Text>
          </Pressable>
        );
      })}

      {showMore ? (
        <View  style={{
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 16,
        columnGap: 20,
      }}>

        {categoryData.slice(8).map(item=>(
            <Pressable
            key={item.id}
            style={[
              {
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderRadius: 100,
                backgroundColor: "#F2F2F3",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
              },
              selected.includes(item.id) && {
                backgroundColor: "#1ED7001A",
                borderColor: "#2DB217",
                borderWidth: 1.5,
              },
            ]}
            onPress={() => handleSelectedItem(item.id)}
          >
            <Text
              style={{
                color: "#0D0D0D",
                fontFamily: FONTS.medium,
                fontSize: 16,
              }}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
            
        </View>
      ) : (
        <View>
          {categoryData.length > 8 ? (
            <Pressable
              style={[
                {
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 100,
                  backgroundColor: "#F2F2F3",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "auto",
                },
              ]}
              onPress={() => setShowMore(true)}
            >
              <Text
                style={{
                  color: "#0D0D0D",
                  fontFamily: FONTS.medium,
                  fontSize: 16,
                }}
              >
                Show + {categoryData.length - 8} More
              </Text>
            </Pressable>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default CategorySelection;

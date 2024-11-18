import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SuggestionProps } from "../../types/types";

export const SuggestionIcon = ({ title, image }: SuggestionProps) => {
  return (
    <TouchableOpacity style={styles.suggestionCard}>
      <View style={styles.imgContainer}>
        <Image
          source={image}
          style={styles.suggestionImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  suggestionCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  imgContainer: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  suggestionImage: {
    width: 40,
    height: 40,
  },
  title: {
    fontWeight: "500",
  },
});

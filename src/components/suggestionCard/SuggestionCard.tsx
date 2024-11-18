import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PlansProps } from "../../types/types";

export const SuggestionCard = ({
  title,
  image,
  description,
  arrow,
}: PlansProps) => {
  return (
    <TouchableOpacity style={styles.suggestionCard}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description} {arrow && <Text>&#10141;</Text>}
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={image}
          style={styles.suggestionImage}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  suggestionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    borderRadius: 12,
    marginRight: 15,
    paddingVertical: 10,
    paddingLeft: 15,
    width: "10%",
  },
  titleContainer: {
    flexWrap: "wrap",
    backgroundColor: "#f5f5f5",
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: "wrap",
    width: "100%",
  },
  description: {
    paddingVertical: 10,
  },
  imgContainer: {
    maxWidth: "45%",
  },
  suggestionImage: {
    width: 145,
    height: 100,
  },
});

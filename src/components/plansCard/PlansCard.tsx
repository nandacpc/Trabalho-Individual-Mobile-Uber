import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PlansProps } from "../../types/types";

export const PlansCard = ({ title, image, description, arrow }: PlansProps) => {
  return (
    <TouchableOpacity style={styles.suggestionCard}>
      <View>
        <Image
          source={image}
          style={styles.suggestionImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textCard}>
        <Text style={styles.title}>
          {title} {arrow && <Text>&#10141;</Text>}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  suggestionCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 14,
    marginRight: 15,
  },
  suggestionImage: {
    borderRadius: 14,
    width: 350,
    height: 200,
  },
  textCard: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  description: {
    paddingVertical: 5,
  },
});

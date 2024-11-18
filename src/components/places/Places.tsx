import { StyleSheet, Text, View } from "react-native";
import { PlaceProps } from "../../types/types";

export const Places = ({ title, adress }: PlaceProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeTitle}>{title}</Text>
      <Text style={styles.placeAddress}>{adress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 3,
    paddingVertical: 15,
  },
  placeTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  placeAddress: {
    color: "#666",
    fontSize: 16,
  },
});

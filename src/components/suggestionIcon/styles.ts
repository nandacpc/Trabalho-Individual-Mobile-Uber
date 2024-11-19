import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

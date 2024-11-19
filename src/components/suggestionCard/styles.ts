import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  suggestionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    marginRight: 15,
    paddingLeft: 12,
    maxWidth: "100%",
  },
  titleContainer: {
    backgroundColor: "#f5f5f5",
    maxWidth: "50%",
    paddingVertical: 10,
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
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    width: 155,
    height: 110,
  },
});

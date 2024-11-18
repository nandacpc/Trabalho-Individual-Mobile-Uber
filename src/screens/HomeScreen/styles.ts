import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  navBar: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  tabs: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 4,
  },
  tabIcon: {
    height: 40,
    width: 40,
  },
  tabActive: {
    borderBottomColor: "#000",
    borderBottomWidth: 3,
  },
  navText: {
    fontSize: 24,
    color: "#888",
  },
  navTextActive: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  searchSection: {
    backgroundColor: "#fff",
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
  },

  nowButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
    alignItems: "center",
  },
  nowText: {
    fontSize: 14,
  },
  placesSection: {
    backgroundColor: "#fff",
  },
  place: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 10,
  },
  placeIcon: {
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 20,
  },
  placesBorder: {
    height: 2,
    backgroundColor: "#f5f5f5",
    width: "83%",
    alignSelf: "flex-end",
  },
  suggestionSection: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  suggestionTitle: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  sectionSeeAll: {
    fontWeight: "bold",
  },
  suggestionIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plansSection: {
    backgroundColor: "#fff",
    padding: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  footerIcon: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
});

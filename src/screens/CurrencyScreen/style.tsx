import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F9F9FC",
    marginHorizontal: 16,
    marginTop: 115,
  },
  convert: {
    position: "absolute",
    top: -40,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    zIndex: 200,
  },
  itemContainer: {
    borderRadius: 8,
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
});

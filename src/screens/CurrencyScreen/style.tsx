import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'transparent',
    marginHorizontal: 16,
    marginTop: 115,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4,
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

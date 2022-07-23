import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  list: {
    shadowColor: "#4972F40D",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 4,
  },
  textHeader: {
    marginBottom: 22,
    marginLeft: 16,
    fontWeight: "500",
    fontSize: 16,
  },
});

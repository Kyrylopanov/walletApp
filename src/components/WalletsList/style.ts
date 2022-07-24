import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 4,
  },
  textHeader: {
    marginBottom: 22,
    marginLeft: 16,
    fontWeight: "500",
    fontSize: 16,
  },
});

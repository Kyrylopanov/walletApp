import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  borderBottom: {
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
  },
  borderRadiusTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  borderRadiusBottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  leftContainer: {
    paddingLeft: 22,
    paddingRight: 24,
  },
  rightContainer: {
    paddingVertical: 13,
  },
  title: {
    color: "#102D6F",
    marginBottom: 3,
    fontSize: 18,
  },
  cryptoValue: {
    fontSize: 14,
    marginBottom: 3,
  },
  value: {
    fontSize: 14,
    color: "#B3B6C6",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    marginHorizontal: 16,
    marginTop: 146,
  },
  textLabel: {
    color: "#102D6F",
    fontSize: 12,
    marginBottom: 8,
    fontWeight: "500",
  },
  group: {
    alignItems: "center",
    marginTop: 44,
    marginBottom: 22,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D9DBE5",
    borderRadius: 8,
    height: 52,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBorderRight: {
    borderColor: "rgba(217, 219, 229, .25)",
  },
  inputLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingLeft: 13,
    width: 200,
  },
  imageCurrency: {
    paddingLeft: 12,
  },
  currencyText: {
    marginRight: 15,
    color: "#B3B6C6",
  },
});

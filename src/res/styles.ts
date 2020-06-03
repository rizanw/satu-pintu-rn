import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    alignContent: "center",
  },
  containerSub: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 18,
  },
  button: {
    flex: 1,
    width: "96%",
    maxHeight: 48,
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 8,
  },
  buttonPrimary: {
    backgroundColor: colors.PRIMARY_BLUE,
  },
  buttonSecondary: {
    backgroundColor: colors.WHITE,
  },
  buttonOutlined: {
    backgroundColor: colors.WHITE,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: colors.BORDER_BLUE,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 12,
  },
  textFieldContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: colors.BORDER_BLUE,
    marginVertical: 10,
  },
  textFieldArea: {
    flex: 3,
    height: 14,
  },
  textFieldLabel: {
    flex: 3,
    textAlign: "right",
    fontSize: 12,
    color: colors.PRIMARY_BLUE,
  },
  bantuanContainer: {
    margin: 20,
    marginBottom: 0,
  },
  bantuanTextContainer: {
    marginVertical: 10,
  },
  bantuanText: {
    fontSize: 14,
  },
  bantuanTextTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoMainTitle: {
    fontSize: 20,
    textAlign: "center",
    color: colors.TEXT_BLUE,
    marginBottom: 50,
    marginHorizontal: 26,
  },
  infoSubTitle: {
    fontSize: 14,
    textAlign: "center",
    color: colors.TEXT_BLUE,
    marginBottom: 20,
    marginHorizontal: 42,
  },
  infoDot: {
    backgroundColor: colors.PRIMARY_BLUE,
    width: 6,
    height: 6,
    borderRadius: 6,
    margin: 6,
  },
  infoDotDisabled: {
    backgroundColor: colors.BORDER_BLUE,
    width: 6,
    height: 6,
    borderRadius: 6,
    margin: 6,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "stretch",
    alignItems: "center",
  },
  categoryItem: {
    margin: 6,
    alignItems: "center",
    padding: 12,
  },
  categoryIcon: {
    backgroundColor: colors.BORDER_BLUE,
    width: 48,
    height: 48,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  homeListTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 24,
  },
  cardIcon: {
    backgroundColor: colors.BORDER_BLUE,
    width: 184,
    height: 136,
  },
  cardContainer: {
    marginLeft: 20,
  },
  cardTitle: {
    color: colors.TEXT_GRRAY,
    fontSize: 14,
    marginVertical: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.GRAY,
    marginVertical: 10,
    marginHorizontal: 18,
    padding: 10,
  },
  searchBarIcon: {
    marginRight: 10,
  },
  searchBarField: { 
    flex: 3,
    height: 20,
  },
});

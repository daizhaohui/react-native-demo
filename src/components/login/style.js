import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 200,
    flexDirection: "column",
    justifyContent: "center"
  },
  containerItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  containerButtonItem: {
    flex: 1
  },
  itemTitle: {
    width: 100
  },
  textInputStyle: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 4
  }
});

export default Styles;

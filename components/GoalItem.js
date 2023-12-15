import { StyleSheet, Text, View, FlatList } from "react-native";

export default function GoalItem({ itemData }) {
    console.log("itemData", itemData)
  return (
    <View style={styles.goalItem}>
      <Text>{itemData.item.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#2DD4BF",
    color: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
});

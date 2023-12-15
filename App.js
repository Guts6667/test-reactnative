import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import AddItemInput from "./components/AddGoal";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [myGoal, setMyGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const goalHandler = (enteredText) => {
    setMyGoal(enteredText);
  };
  const addGoalHandler = () => {
    if (myGoal.length !== 0) {
      setGoals((currentGoal) => [
        ...goals,
        { text: myGoal, id: Math.random().toString() },
      ]);
      setMyGoal("");
      console.log(goals);
    } else {
      alert("Please enter a goal");
    }

    // Can we then, clear the TextInput?
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EDMC</Text>
      </View>
      <AddItemInput myGoal={myGoal} addGoalHandler={addGoalHandler} goalHandler={goalHandler} />
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return <GoalItem itemData={itemData} />;
        }}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 100,
  },
  titleContainer: {
    marginTop: 100,
    fontSize: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  addGoalBtn: {
    backgroundColor: "black",
    color: "white",
    borderBlockColor: "black",
    borderRadius: 10,
    overflow: "hidden",
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#2DD4BF",
    color: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
});

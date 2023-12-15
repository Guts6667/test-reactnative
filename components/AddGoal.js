import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddGol(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={props.myGoal}
        placeholder="My Goal"
        onChangeText={props.goalHandler}
      />
      <Button title="Add a goal" onPress={props.addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    gap: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
  },
});

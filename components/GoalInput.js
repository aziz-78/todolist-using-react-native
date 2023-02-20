import { View, StyleSheet, Button, TextInput, Modal,Image } from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal ,visible,inVisible}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goal_Input_Handler = (enteredtext) => {
    setEnteredGoalText(enteredtext);
  };
  const add_Goal_Handler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image}/>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goal_Input_Handler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button} ><Button title="Add Goal" onPress={add_Goal_Handler} color="#b180f0" /></View>
            <View style={styles.button}  ><Button title="Cancel" onPress={inVisible} color="#f31282"/></View>
          
          
        </View>
       
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
   
    padding:16,
    backgroundColor:"#311b6b"
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    backgroundColor:"#e4d0ff",
    color:"#120438",
    borderRadius:6,
    

  },
  buttonContainer:{
    flexDirection:"row",
    margin:16
  },
  button:{
   width:100,
   marginHorizontal:8
  }
});

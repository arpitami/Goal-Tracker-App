import { StyleSheet, Button, View, TextInput, Modal, Image} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [entergoalText, setEnterGoalText] = useState();

  function goalInputHandler(enteredText) {
    setEnterGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(entergoalText);
    setEnterGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* <Image style={styles.image} source={require('.../assets/images/goal.jpg')} /> */}
        <Image style={styles.image} source={require('../assets/images/goal.jpg')} />

        <TextInput
          style={styles.textInput}
          placeholder="Write your goals here"
          onChangeText={goalInputHandler}
          value={entergoalText} 
        />
        <View style={styles.buttonContainer}>
          <View style = {styles.button}>
            <Button title="Add Goals" onPress={addGoalHandler} color='#5e0acc'/>
          </View>
          <View style = {styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center", 
    flex: 1,
    padding: 16,
    backgroundColor: "#c9ada7"
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderColor:  "#e4d0ff",
    padding: 16,
    borderRadius:6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button:{
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20  }
});

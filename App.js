import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [CourseGoal, SetCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(entergoalText) {
    const newGoal = { text: entergoalText, id: Math.random().toString() };
    SetCourseGoal((currentGoalCourse) => [...currentGoalCourse, newGoal]);
    setModalIsVisible(false);
  }

  function AddDeleteHandler(id) {
    SetCourseGoal(currentGoalCourse =>{
      return currentGoalCourse.filter((goal) => goal.id !== id); 
    });
  }  
  return (
    
    <View style={styles.appContainer}>
      <Button title="Add New Goals" color='#ffb4a2' onPress={startAddGoalHandler}/> 
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler} />
      <View style={styles.goalInput}>
        <FlatList
          data={CourseGoal}
          renderItem={(Dataitem) => {
            return (
              <GoalItem
                text={Dataitem.item.text}
                id = {Dataitem.item.id}
                onDeleteItem={AddDeleteHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#e9edc9",
  },

  goalInput: {
    flex: 5,
  },
});

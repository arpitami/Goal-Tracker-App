import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    
      <View style={styles.goalText}>
      <Pressable
      android_ripple={{color: '#f4acb7'}}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style= {({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goaltextt}>{props.text} </Text>
        </Pressable>
      </View>
    
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    margin: 8,
    borderRadius: 6,
    
    backgroundColor: "#9d8189",
  },
  goaltextt: {
    color: "#ffe5d9",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

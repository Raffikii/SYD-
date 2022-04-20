import {Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function RegButton({ text, onPress }) {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Regbutton}>
        <Text style={styles.RegbuttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  Regbutton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 67,
    backgroundColor: '#ccebff',
    alignSelf: "center",
    marginTop: 30,
  },
  RegbuttonText: {
    color: '#41445D',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
})
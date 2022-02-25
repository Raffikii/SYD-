import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function CoButton({ text, onPress }) {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Cobutton}>
        <Text style={styles.CobuttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  Cobutton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: '#0071bc',
    alignSelf: "center",
    marginTop: 20,
  },
  CobuttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
})
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Test from '../test'

/*Créé un choix pour ce connecter sois en Barman ou en Partculier*/

//Je ne suis pas arriver à savoir comment mettre dans le button 
//un lien pour aller sur une autre page

class Identifier extends React.Component {
  render() {
    return (
      <View style={styles.container_id}>
        <View style={styles.container}>
            <Text style={styles.text}>
                Identifiez vous !
            </Text>
        </View>
        <View style={styles.container_button1}>
            <TouchableOpacity style={styles.button} /*Ici c'est ce qui devrais changer de page -->*/onPress={() => Test }>
                <Image source={require("../img/google.png")}/>
            </TouchableOpacity>
        </View>
        <View style={styles.container_button2}>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Image source={require("../img/google.png")}/>
            </TouchableOpacity>
        </View>
    </View>
    
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  text: {
    marginRight: 125,
    marginTop: 100,
    height: 50,
    fontSize: 34
  },
  container_id: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 1,
    marginBottom: 5,
  },
  container_button1:{
    flex: 3,
    paddingTop: 150
  },
  container_button2:{
    flex: 4,
    paddingTop:5 
  }
})


export default Identifier
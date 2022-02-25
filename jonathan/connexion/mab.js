import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class Mab extends React.Component {
    render() {
      return (
        <View>
            <View style={styles.container_titre}>
                <Text style={styles.text_titre}>Vous êtes au bon endroit !</Text>
                <Text style={styles.text_titre}>faisons connaissance.</Text>
            </View>
            <View style={styles.container_text}>
                <Text style={styles.text_text}>Nous avons besoin de quelques</Text>
                <Text style={styles.text_text}>information pour commencer à</Text>
                <Text style={styles.text_text}>personnaliser votre profil.</Text>
            </View>
            <Image style={styles.container_fleche} source={require("../img/fleche.png")}/>  
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
      container_titre:{
        marginTop: 350,
        marginLeft: 35
      },
      text_titre:{
        fontSize: 26,
        fontWeight: "bold"
      },
      container_text:{
        marginLeft: 35,
        marginTop: 20
      },
      text_text:{
        fontSize: 18
      },
      container_fleche:{
        marginTop: 100,
        marginLeft: 260
      }

  })


  export default Mab
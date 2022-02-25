import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import CoButton from "./shared/Connexionbutton";
import RegButton from "./shared/Registerbutton";

export default function Bienvenue() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      
      <Text onPress={handlePress} style={styles.Title}>
        Bienvenue
      </Text>

      <Image source={require("./assets/Logo_Chargement.png")} style={styles.Logo} />
      
      <CoButton text='connexion' onPress={() => alert("Co Button jolie")}/>
      <RegButton text="S'inscrire" onPress={() => alert("Reg Button jolie")}/>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF3FB",
    textAlign: "left",
  },
  Title: {
    fontSize: 35,
    marginTop: 30,
    marginLeft: 15,
  },
  Logo: {
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 100,
    width: 200,
    height: 300,
  },
});
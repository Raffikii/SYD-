// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={{styles.main_container, flexDirection: 'row' }}>
        <View style={{justifyContent: 'flex-start', backgroundColor: 'blue'}} >
          <Text style={{styles.title_text}}>Image du film</Text>
        </View>
        <View style={{flexDirection: 'column'}} >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Text style={{styles.title_text}}>Titre du film</Text>
            <Text style={{styles.title_text}}>Vote</Text>
          </View>
          <View  >
            <Text style={{styles.title_text}}>Description</Text>
          </View>
          <View  >
            <Text style={{styles.title_text}}>Sorti le 00/00/0000</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190
  },
  title_text: {
    
  }
})

export default FilmItem
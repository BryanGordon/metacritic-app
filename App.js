import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
// import icon from './assets/icon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image 
        source={{uri: 'https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg'}} 
        style={{width: 215, height: 294}}
      />
      <Text style={{color:'white'}}>Open up App.js to start working on your app!</Text>
      <Text style={{color:'white'}}>Nuevo texto de ejemplo</Text>
      <Text style={{color:'white'}}>Funciona perfecto</Text>
      <Button 
        color={'grey'}
        title='No tengo estilos' 
        onPress={() => alert('Pulsacion')}
      />

      <TouchableHighlight
        onPress={() => alert('Hola boton 2')}
        underlayColor={'#09f'}
        style={{marginTop:30, backgroundColor:'#333B2F', padding:15, borderRadius:7}}
      >
        <Text style={{color:'white'}}>Boton customizable</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

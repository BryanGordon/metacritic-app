import { Image, StyleSheet, Text, View } from 'react-native'

export function Gamecard ({game}) {
  return (
   <View style={styles.card}>
               <Image
                 source={{ uri: game.thumbnail }}
                 style={styles.imageCard}
               />
               <Text style={styles.titleCard}>
                 {game.title}
               </Text>
               <Text style={styles.descriptionCard}>
                 {game.short_description}
               </Text>
   
               <Text style={styles.genreCard}>
                 {game.genre}
               </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42
  },

  imageCard: {
    width: 100,
    height: 147,
    borderRadius: 10
  },

  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10
  },
  
  descriptionCard: {
    fontSize: 16,
    color: '#eee'
  },
  
  genreCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8609E6',
    marginBottom: 10
  }
})
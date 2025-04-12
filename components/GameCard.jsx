import { Image, StyleSheet, Text, View } from 'react-native'

export function Gamecard ({game}) {
  return (
   <View className='flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10'>
               <Image
                 source={{ uri: game.thumbnail }}
                 style={styles.imageCard}
               />
               <View>
               <Text style={styles.titleCard}>
                 {game.title}
               </Text>
               <Text style={styles.descriptionCard}>
                 {game.short_description.slice(0, 100)}...
               </Text>
   
               <Text style={styles.genreCard}>
                 {game.genre}
               </Text>
               </View>
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
    marginTop: 10,
    marginBottom: 4
  },
  
  descriptionCard: {
    marginTop: 8,
    fontSize: 16,
    color: '#eee',
    flexShrink: 1
  },
  
  genreCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8609E6',
    marginBottom: 10
  }
})
import { Link } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { styled } from 'nativewind'

export function Gamecard ({game}) {
  const StyledPressable = styled(Pressable)
  return (
    <Link asChild href={`/${game.id}`}>
   <StyledPressable className='active:opacity-60 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4'>
   <View className='flex-row gap-4'>
               <Image
                 source={{ uri: game.thumbnail }}
                 style={styles.imageCard}
               />
               <View className='flex-shrink'>
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
    </StyledPressable>
   </Link>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42
  },

  imageCard: {
    width: 100,
    height: 147,
    borderRadius: 10,
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
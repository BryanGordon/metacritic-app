import { useEffect, useState } from 'react'
import { Link } from 'expo-router';
import { View, ActivityIndicator, FlatList, StyleSheet, Pressable } from 'react-native';
import { gamesData } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from './Logo'
import { AnimatedGameCard } from './AnimatedGameCard'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CircleInfoIcon } from '../components/Icons'


export function Main () {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    gamesData().then((games) => {
      setGames(games)
    })
  }, [])

  return (
    <View className='bg-black'>
      
      {
        games.length === 0
          ? (<ActivityIndicator color='#8609E6' size='large' />)
          : (
          <FlatList
            data={games}
            keyExtractor={game => game.id}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} /> }
          />
            )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 20
  }
})

import { useEffect, useState } from 'react'
import { Link } from 'expo-router';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { gamesData } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from './Logo'
import { AnimatedGameCard } from './AnimatedGameCard'

export function Main () {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    gamesData().then((games) => {
      setGames(games)
    })
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Link href='/about' className='text-purple-500 text-lg my-1'>Ir al about</Link>
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

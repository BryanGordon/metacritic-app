import { useEffect, useState } from 'react'
import { ScrollView, View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { gamesData } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Gamecard } from './GameCard'
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

import { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { gamesData } from '../lib/metacritic'
import { AnimatedGameCard } from './AnimatedGameCard'

export function Main () {
  const [games, setGames] = useState([])

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
              renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
            />
            )
      }
    </View>
  )
}

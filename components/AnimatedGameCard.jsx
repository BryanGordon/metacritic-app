import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { Gamecard } from './GameCard'

export function AnimatedGameCard ({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 450,
      delay: index * 300,
      useNativeDriver: true
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <Gamecard game={game} />
    </Animated.View>
  )
}

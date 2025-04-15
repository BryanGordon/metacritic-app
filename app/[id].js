import { useLocalSearchParams, Link } from 'expo-router'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { Screen } from '../components/Screen'
import { Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import { gameDatabyID, gamesData } from '../lib/metacritic'
import { ScrollView } from 'react-native-web'

export default function Detail () {
  const { id } = useLocalSearchParams()
  const [gameInfo, setGameInfo] = useState(null)

  useEffect(() => {
    if (id) {
      gameDatabyID(id).then(setGameInfo)
    }
  }, [id])

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#ffee00' },
          headerTintColor: 'black',
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: 'Tarisland'
        }}
      />
      <View>
        {
          gameInfo === null ? (
            <ActivityIndicator color={'purple'} size={'large'} />
          ) : (
            <ScrollView>
              <View className='justify-center items-center text-center'>
                <Image
                  className='mb-4 rounded'
                  source={{ uri: gameInfo.thumbnail }}
                  style={{ width: 214, height: 294 }}
                />
                <Text className='text-white text-center font-bold text-2xl'>
                  {gameInfo.title}
                </Text>
                <Text className='text-white/70 mt-4 text-left mb-8 text-base'>
                  {gameInfo.short_description}
                </Text>
              </View>
            </ScrollView>
          )
        }
      </View>
    </Screen>
  )
}

import { Link, Stack } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { Logo } from '../components/Logo'
import { CircleInfoIcon } from '../components/Icons'

export default function Layout () {
  return (
    <View className='flex-1'>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          // headerShown: false
          headerTintColor: 'white',
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
                  <Link asChild href='/about'>
                    <Pressable className='text-purple-500 text-lg my-1'>
                      <CircleInfoIcon />
                    </Pressable>
                  </Link>
          )
        }}
      />
    </View>
  )
}

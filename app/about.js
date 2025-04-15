import { Link } from 'expo-router'
import { Pressable, ScrollView, Text } from 'react-native'
import { HomeIcon } from '../components/Icons'

export default function About () {
  return (
    <ScrollView className='bg-black'>
      <Link asChild href='/'>
        <Pressable className='my-1'>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
      </Link>
      <Text className='text-white font-bold mb-8 text-2xl'>Sobre el proyecto</Text>
      <Text className='text-white text-base text-white/90 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
      </Text>

      <Text className='text-white text-base text-white/90 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
      </Text>

      <Text className='text-white text-base text-white/90 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
      </Text>

      <Text className='text-white text-base text-white/90 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
      </Text>

      <Text className='text-white text-base text-white/90 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?
      </Text>
    </ScrollView>
  )
}

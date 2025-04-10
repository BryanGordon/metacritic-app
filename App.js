import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { gamesData } from './lib/metacritic'
// import icon from './assets/icon.png'

export default function App () {
  const [games, setGames] = useState([])

  useEffect(() => {
    gamesData().then((games) => {
      setGames(games)
    })
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
      {
        games.map((game) => (
          <View key={game.id} style={styles.card}>
            <Image
              source={{ uri: game.thumbnail }}
              style={styles.imageCard}
            />
            <Text style={styles.titleCard}>
              {game.title}
            </Text>
            <Text style={styles.descriptionCard}>
              {game.short_description}
            </Text>

            <Text style={styles.genreCard}>
              {game.genre}
            </Text>
          </View>
        ))
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 12,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

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
    marginTop: 10
  },
  
  descriptionCard: {
    fontSize: 16,
    color: '#eee'
  },
  
  genreCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10
  }
})

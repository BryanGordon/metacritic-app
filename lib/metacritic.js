export const gamesData = () => {
  return fetch('https://www.freetogame.com/api/games')
    .then(res => res.json())
}

export const gameDatabyID = (id) => {
  return fetch(`https://www.freetogame.com/api/game?id=${id}`)
    .then(res => res.json())
}

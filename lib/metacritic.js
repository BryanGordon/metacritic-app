export const gamesData = () => {
  return fetch('https://www.freetogame.com/api/games')
    .then(res => res.json())
}

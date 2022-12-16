function createGames(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>
        ${date}
        <span>${day}</span>
      </h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGames("cameroon", "16:00", "portugal") +
      createGames("brazil", "16:00", "serbia") +
      createGames("switzerland", "16:00", "uruguai")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGames("portugal", "13:00", "switzerland") +
      createGames("cameroon", "16:00", "serbia") +
      createGames("uruguai", "16:00", "brazil")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGames("brazil", "16:00", "cameroon") +
      createGames("cameroon", "16:00", "serbia") +
      createGames("uruguai", "16:00", "brazil")
  )

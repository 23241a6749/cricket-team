// Player data
const players = [
  {
    name: "Virat Kohli",
    jersey: 18,
    matches: 250,
    strikeRate: "138.76",
    best: "183 vs Pakistan"
  },
  {
    name: "MS Dhoni",
    jersey: 7,
    matches: 350,
    strikeRate: "127.00",
    best: "183* vs Sri Lanka"
  },
  {
    name: "Jasprit Bumrah",
    jersey: 93,
    matches: 150,
    strikeRate: "85.50",
    best: "6/19 vs England"
  }
];

function openModal(index) {
  const p = players[index];
  document.getElementById('modalName').innerText = p.name;
  document.getElementById('modalJersey').innerText = p.jersey;
  document.getElementById('modalMatches').innerText = p.matches;
  document.getElementById('modalStrikeRate').innerText = p.strikeRate;
  document.getElementById('modalBest').innerText = p.best;

  document.getElementById('playerModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('playerModal').style.display = 'none';
}

// Optional: close modal when clicking outside it
window.onclick = function (event) {
  const modal = document.getElementById('playerModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
    
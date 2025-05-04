// 6. Random Theme Button
const randomThemeBtn = document.createElement('button');
randomThemeBtn.innerText = '🎨 Random Theme';
randomThemeBtn.className = 'theme-toggle';
document.body.appendChild(randomThemeBtn);

randomThemeBtn.addEventListener('click', () => {
  const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
  document.body.style.color = '#333';
});

// 7. Reload Button
const reloadBtn = document.createElement('button');
reloadBtn.innerText = '🔄 Reload';
reloadBtn.className = 'reload-btn';
document.body.appendChild(reloadBtn);

reloadBtn.addEventListener('click', () => {
  window.location.reload();
});

// 8. Play Sound Button
const playSoundBtn = document.createElement('button');
playSoundBtn.innerText = '🔊 Play Sound';
playSoundBtn.className = 'sound-btn';
document.body.appendChild(playSoundBtn);

playSoundBtn.addEventListener('click', () => {
  const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3');
  audio.play();
});

// 9. Surprise Fact Button
const factBtn = document.createElement('button');
factBtn.innerText = '🎲 Surprise Fact';
factBtn.className = 'fact-btn';
document.body.appendChild(factBtn);

const facts = [
  "The pyramids of Giza were built more than 4,500 years ago!",
  "The Great Wall of China is over 13,000 miles long.",
  "Ancient Mesopotamia invented the first form of writing!",
  "The Indus Valley had the world's first planned cities.",
  "Maya civilization had a more accurate calendar than Europeans!"
];

factBtn.addEventListener('click', () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  alert(randomFact);
});

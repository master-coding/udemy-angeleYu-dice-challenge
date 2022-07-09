const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const [image1] = document.getElementsByClassName('img1');
const [image2] = document.getElementsByClassName('img2');

const dice1 = 'dice' + randomNumber1 + '.png';
const dice2 = 'dice' + randomNumber2 + '.png';

image1.src = '../images/' + dice1;
image2.src = '../images/' + dice2;

// image1.setAttribute('src', '../images/' + dice1);
// image1.setAttribute('src', '../images/' + dice2);

let winner = '';

if (randomNumber1 > randomNumber2) 
    winner = "🚩 Player 1 wins";
else if (randomNumber1 === randomNumber2) 
    winner = "Draw";
else 
    winner = "Player 2 wins 🚩";


document.querySelector('h1').innerText = winner;



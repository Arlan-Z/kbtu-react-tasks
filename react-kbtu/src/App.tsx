import './App.css'
import Header from './components/partials/Header/Header'
import About from './components/About/About'
import Coffee from './assets/img/coffee.png'
import CoffeeCup from './assets/img/coffee-cup.png'
import Tumbler from './assets/img/tumbler.png'


const images = [
  Coffee,
  CoffeeCup,
  Tumbler
];

function createFallingImage() {
  const img = document.createElement('img');
  img.src = images[Math.floor(Math.random() * images.length)];
  img.classList.add("falling");

  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.animationDuration = 2 + Math.random() * 5 + "s"; 

  document.body.appendChild(img);

  img.addEventListener("animationend", () => img.remove());
}

setInterval(createFallingImage, 200);

function App() {

  return (
    <div className='app-wrapper'>
    <Header/>
    <About/>
    </div>
  )
}

export default App

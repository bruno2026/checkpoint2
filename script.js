//  Background Squares
const ulSquares = document.querySelector("ul.squares");

for(let i = 0; i < 20; i++){
  
  // Estilização
  // criando tamanhos randomicos - evitando a repetição no cod
  const random = (min, max) => Math.random() * (max - min) + min; 

  const li = document.createElement("li");
  const size = Math.floor(random(10, 120)); 
  const position = random(1, 99);
    
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  
  
  // Animação
  // cada li ficará com o tempo diferente uma da outra
  const delay = random(0.1, 5);
  const duration = random(24, 12);
  
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`; 
  
  // criando li's
  ulSquares.appendChild(li);
  
}

// open modal

let modal = document.querySelector("modal");

modal.setAttribute("hidden")
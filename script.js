const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsElement = document.querySelector('.random-dogs');

const goButton = document.querySelector('.go-button');

async function getRandomDogs() {
  randomDogsElement.innerHTML = '';
  
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);
  
  json.message.forEach(dogImage => {
    randomDogsElement.innerHTML += `
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="${dogImage}" alt="Placeholder image">
          </figure>
        </div>
      </div>
    </div>
    `;

  });
  
}

goButton.addEventListener('click', getRandomDogs);
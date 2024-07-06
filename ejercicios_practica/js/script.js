"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
*/
const personajeInput = document.getElementById('personaje');
const consultarButton = document.getElementById('btnConsultar');
const characterInfoDiv = document.getElementById('login'); 

consultarButton.addEventListener('click', () => {
  const personaje = personajeInput.value.trim();
  if (!personaje) return;

  const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.info.count === 0) {
        characterInfoDiv.innerHTML = '<p>Personaje no encontrado.</p>';
        return;
      }

      displayCharacterInfo(data.results[0]);
    })
    .catch(error => {
      console.error('Error:', error);
      characterInfoDiv.innerHTML = '<p>Error al buscar el personaje.</p>';
    });
});

function displayCharacterInfo(character) {
    const characterHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <ul>
        <li>Especie: ${character.species}</li>
        <li>Género: ${character.gender}</li>
        <li>Origen: ${character.origin.name}</li>
        <li>Estado: ${character.status}</li>
      </ul>
    `;
    characterInfoDiv.innerHTML = '';L
    characterInfoDiv.innerHTML = characterHTML;
  }
  console.log(character); 

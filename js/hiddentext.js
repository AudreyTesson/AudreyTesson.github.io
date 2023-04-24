// const texte = document.querySelectorAll('.texte');
// const bouton = document.querySelectorAll('.bouton');
// const longueurLimite = 50;

// if (texte.innerHTML.length > longueurLimite) {
//   const texteCourt = texte.innerHTML.substring(0, longueurLimite);
//   const texteLong = texte.innerHTML;
//   texte.innerHTML = texteCourt + '<span id="points">...</span>';
//   bouton.style.display = 'block';

//   bouton.addEventListener('click', function() {
//     if (bouton.innerHTML === 'En savoir plus') {
//       texte.innerHTML = texteLong + '<button id="bouton">Réduire</button>';
//       bouton.innerHTML = 'Réduire';
//     } else {
//       texte.innerHTML = texteCourt + '<span id="points">...</span>';
//       bouton.innerHTML = 'En savoir plus';
//     }
//   });
// }


// const texte = document.querySelector('.text');
// const bouton = document.querySelector('.button');
// const longueurLimite = 200;

// if (texte.textContent.length > longueurLimite) {
//   const texteCourt = texte.textContent.substring(0, longueurLimite);
//   const texteLong = texte.textContent;
//   texte.textContent = texteCourt + '...';
//   bouton.style.display = 'block';

//   bouton.addEventListener('click', function() {
//     if (bouton.textContent === 'En savoir plus') {
//       texte.textContent = texteLong + ' ';
//       bouton.textContent = 'Réduire';
//     } else {
//       texte.textContent = texteCourt + '...';
//       bouton.textContent = 'En savoir plus';
//     }
//   });
// }


// const texte = document.querySelector('.text');
// const bouton = document.querySelector('.button');
// const projet = document.querySelector('.project');
// const longueurLimite = 200;

// if (texte.textContent.length > longueurLimite) {
//   const texteCourt = texte.textContent.substring(0, longueurLimite);
//   const texteLong = texte.textContent;
//   texte.textContent = texteCourt + '...';
//   bouton.style.display = 'block';

//   bouton.addEventListener('click', function() {
//     if (bouton.textContent === 'En savoir plus') {
//       texte.textContent = texteLong + ' ';
//       bouton.textContent = 'Réduire';
//       projet.classList.add('expanded'); // Ajouter la classe "expanded"
//     } else {
//       texte.textContent = texteCourt + '...';
//       bouton.textContent = 'En savoir plus';
//       projet.classList.remove('expanded'); // Supprimer la classe "expanded"
//     }
//   });
// }

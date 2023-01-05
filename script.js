let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};




// TIMELINE 

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.workCard');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(workCard => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === workCard.getAttribute('data-anim')){

            let tween = gsap.from(workCard, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})

// TEXTE CACHE 

// const button = document.querySelector('button');
// const hiddenText = document.querySelector('.hidden-text');
// const workCard = document.querySelector('.workCard');

// button.addEventListener('click', function() {
//    workCard.style.height = '800px';
//    workCard.style.width = '600px';
// });


// button.addEventListener('click', function() {
//    if (hiddenText.style.display === 'none') {
//       hiddenText.style.display = 'block';
//       button.textContent = 'Réduire';
//    } else {
//       hiddenText.style.display = 'none';
//       button.textContent = 'En savoir plus';
//    }
// });

const button = document.querySelector('button');
const hiddenText = document.querySelector('.hidden-text');
const workCard = document.querySelector('.workCard');

button.addEventListener('click', function() {
   if (hiddenText.style.display === 'none') {
    workCard.style.display = 'block';
      hiddenText.style.display = 'block';
      // workCard.style.height = window.innerHeight + '300px';
      // workCard.style.width = window.innerWidth + '300px';
      workCard.style.zIndex = '999';
      button.textContent = 'Réduire';
   } else {
      hiddenText.style.display = 'none';
      // workCard.style.height = '400px';
      // workCard.style.width = '400px';
      workCard.style.zIndex = '1';
      button.textContent = 'En savoir plus';
   }
});


document.addEventListener('click', function(event) {
  if (!workCard.contains(event.target) && workCard.style.display === 'block') {
    //  workCard.style.display = 'none';
     hiddenText.style.display = 'none';
     button.textContent = 'Cliquez ici pour afficher le conteneur';
  }
});
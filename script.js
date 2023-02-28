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

// EN SAVOIR PLUS 

const parentContainer =  document.querySelector('.box-timeline');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('En savoir plus') ? "Réduire" : "En savoir plus";

})


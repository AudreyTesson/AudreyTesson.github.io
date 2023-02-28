/**
 * Gestion des reviews
 */
const filtre = {

    /**
     * Méthode appelée lorsque le DOM est prêt
     */
    init: function() {
      // on délègue la mise en place des écouteurs d'évènements
      filtre.addEvents();
      // puis, ici, un jour
      // on pourrait aussi déléguer d'autres fonctionnalités ?
      // who knows ?
    },
  
    /**
     * Méthode qui met en place les écouteurs d'évènements
     */
    addEvents: function() {
      // on sélectionne les checkboxs
      const checkboxs = document.querySelectorAll('.filters input');
      // on écoute le click sur chacun de ces checkboxs
      for (const el of checkboxs) {
        el.addEventListener('click', filtre.handleClickFilter);
      }
    },
  
    /**
     * Handler permettant d'afficher (ou cacher) les filtre ayant une certaine note
     * @param {object} evt L'évènement envoyé au handler
     */
    handleClickFilter: function(evt) {
      // on récupère l'élément cliqué
      const clickedEl = evt.currentTarget;
      // on en récupère sa valeur (ex: 3, 2, ou 1)
      const rating = clickedEl.value;
      // on délègue le fait d'afficher ou cacher les filtre ayant cette valeur
      filtre.togglefiltre(rating);
    },
  
    /**
     * Méthode permettant d'afficher ou de cacher les filtre ayant une certaine note
     * @param {Number} ratingToToggle Note correspondant à ce qui doit être togglé
     */
    togglefiltre: function(ratingToToggle) {
      // on sélectionne toutes les filtre existantes
      const reviewElements = document.querySelectorAll('.review');
      // pour chacune de ces filtre
      for (const el of reviewElements) {
        // on récupère la valeur de son attribut de donnée rating
        //const currentRating = el.getAttribute('data-rating');
        const currentRating = el.dataset.rating; // idem
        // si sa valeur correspond à celle qu'il faut permuter (toggle)
        if (currentRating === ratingToToggle) {
          el.classList.toggle('review--hidden');
        }
      }
    },
  
  };
  
  // on exécute la méthode filtre.init
  // lorsque la page web est chargée
  document.addEventListener('DOMContentLoaded', filtre.init);
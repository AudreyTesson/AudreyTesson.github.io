/**
 * Gestion du theme
 */
const theme = {

  /**
   * Mode du thème (dark/light)
   */
  mode: null,

  /**
   * Méthode appelée lorsque le DOM est prêt
   */
  init: function() {
    // on sélectionne le bouton de changement de mode (dark/light)
    // ayant l'id theme-switch
    const themeSwitchElement = document.querySelector('#theme-switch');
    themeSwitchElement.addEventListener('click', theme.toggleDark);

    // on délègue à la méthode initLocalState
    // la mise en place des préférences utilisateur de thème
    // sauvegardée dans le localStorage
    theme.initLocalState();
  },

  /**
   * Méthode qui met en place les préférences utilisateur
   * de thème, sauvegardées dans le localStorage
   */
  initLocalState: function() {
    // on récupère le mode (dark/light) du thème
    // sauvegardé dans le localStorage
    const localMode = localStorage.getItem('modeTheme');

    // si cette entrée est définie
    if (localMode) {
      // alors on donne sa valeur à notre propriété theme.mode
      theme.mode = localMode;
      // on applique ce thème à l'élément body
      // pour cela, on sélectionne le body
      const body = document.querySelector('body');
      // on conditionne l'ajout/le retrait de classes sur cet élément
      if (theme.mode === 'theme-dark') {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
      }
      // sinon, on fait l'inverse
      else {
        body.classList.add('theme-light');
        body.classList.remove('theme-dark');
      }
    }

  },

  /**
   * Méthode qui permet de changer de mode (dark/light)
   */
  toggleDark: function() {

    // si le mode du thème n'est pas encore défini
    // alors on passe en mode dark
    if (!theme.mode) {
      theme.mode = 'theme-dark';
    }
    // ou, si le mode est light, dans ce cas on passe en dark
    else if(theme.mode === 'theme-light') {
      theme.mode = 'theme-dark';
    }
    // sinon, on passe en light
    else {
      theme.mode = 'theme-light';
    }

    // on stocke ce choix dans le localStorage
    localStorage.setItem('modeTheme', theme.mode);
    
    // on cible l'élément body de notre page
    const body = document.querySelector('body');

    // si on passe en dark mode
    // - on retire du body la classe theme-light
    // - on ajoute au body la classe theme-dark
    if (theme.mode === 'theme-dark') {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
    }
    // sinon, on fait l'inverse
    else {
      body.classList.add('theme-light');
      body.classList.remove('theme-dark');
    }

  },

};

// on exécute la méthode theme.init
// lorsque la page web est chargée
document.addEventListener('DOMContentLoaded', theme.init);
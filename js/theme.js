/**
 * Gestion du theme
 */
const theme = {

    /**
     * Mode du thème (dark/light)
     */
    mode: null,
  
    /**
     * Couleur principale du thème (green/red/blue)
     */
    color: null,
  
    /**
     * Méthode appelée lorsque le DOM est prêt
     */
    init: function() {
      // on délègue à la méthode initLocalState
      // la mise en place des préférences utilisateur de thème
      // sauvegardée dans le localStorage
      theme.initLocalState();
  
      // on délègue à la méthode addEvents
      // la mise en place des écouteurs d'événements
      theme.addEvents();
    },
  
    /**
     * Méthode qui met en place les préférences utilisateur
     * de thème, sauvegardées dans le localStorage
     */
    initLocalState: function() {
  
      // -----------------------------------------------------
      // mode du thème (dark / light)
      // -----------------------------------------------------
  
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
  
      // -----------------------------------------------------
      // couleur du thème (green / red / blue)
      // -----------------------------------------------------
  
      // on récupère la couleur principale (green/red/blue) du thème
      // sauvegardée dans le localStorage
      const localColor = localStorage.getItem('colorTheme');
  
      // si cette entrée est définie
      if (localColor) {
        // alors on donne sa valeur à notre propriété theme.color
        theme.color = localColor;
        // et on applique ce thème à l'élément body
        // en déléguant cela à la méthode changeColorTheme
        theme.changeColorTheme(localColor);
      }
  
    },
  
    /**
     * Méthode qui pose tous les écouteurs d'événements
     * nécessaires à la gestion du thème
     */
    addEvents: function() {
  
      // on sélectionne le bouton de changement de mode (dark/light)
      // ayant l'id theme-switch
      const modeSwitchElement = document.querySelector('#theme-switch');
      modeSwitchElement.addEventListener('click', theme.handleToggleDark);
  
      // on sélectionne les pastilles de couleurs
      // qui changeront la couleur principale du thème
      const pastillesElements = document.querySelectorAll('.theme-button');
  
      // on pose un écouteur d'évènement
      // sur chacune d'entres elles
      for (const pastille of pastillesElements) {
        pastille.addEventListener('click', theme.handleThemeColorClick);
      }
  
    },
  
    /**
     * Handler qui permet de changer de couleur (green / red / blue)
     * @param {object} evt L'évènement déclenché lorsqu'on click sur une pastille
     */
    handleThemeColorClick: function(evt) {
      // on récupère l'élément qui a déclenché cet évènement
      const pastoche = evt.currentTarget;
      
      // on récupère la valeur de l'id de cet élément
      // car cette valeur est le nom de la couleur principale choisie
      // const clickedColor = pastoche.id;
      const clickedColor = pastoche.getAttribute('id'); // idem
      
      // on délègue à la méthode changeColorTheme le changement de couleur (green / red / blue) de la page
      theme.changeColorTheme(clickedColor);
  
    },
  
    /**
     * Méthode permettant de changer la couleur principale du thème
     * @param {string} themeColor Couleur principale choisie
     */
    changeColorTheme: function(themeColor) {
      // on sélectionne l'élément body
      const body = document.querySelector('body');
      // on retire du body toutes les classes
      // liées aux couleurs principales
      body.classList.remove('theme-green', 'theme-red', 'theme-blue');
      // on ajoute celle passée en argument
      body.classList.add(themeColor);
  
      // on sélectionne le logo
      // ayant la classe logo__image
      const logo = document.querySelector('.logo__image');
      // on définit une variable qui contient
      // le nouveau chemin d'accès vers un fichier image
      const logoRelativePath = 'img/logo-' + themeColor + '.png';
      // on donne ce nouveau chemin d'accès
      // comme valeur de son attribut src
      logo.src = logoRelativePath;
      // logo.setAttribute('src', logoRelativePath); // idem
  
      // on garde ce choix dans la propriété color
      theme.color = themeColor;
  
      // on stocke ce choix également dans le localStorage
      localStorage.setItem('colorTheme', themeColor);
    },
  
    /**
     * Handler qui permet de changer de mode (dark / light)
     */
    handleToggleDark: function() {
  
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
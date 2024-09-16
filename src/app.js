// imports
import './styles.scss';

// Fonction pour initialiser l'application
function initApp() {
    console.log('LifeHub est initialisé !');
    // Ici, vous pouvez ajouter du code pour charger les données initiales
    // ou configurer des écouteurs d'événements
}

// Fonction pour charger le contenu des modules
function loadModuleContent(moduleName) {
    console.log(`Chargement du module : ${moduleName}`);
    // Ici, vous pouvez ajouter la logique pour charger dynamiquement
    // le contenu de chaque module
}

// Écouteur d'événement pour le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    initApp();

    // Ajout d'écouteurs d'événements pour la navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const module = e.target.getAttribute('href').substr(1);
            loadModuleContent(module);
        });
    });
});
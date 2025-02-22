// Déclarations des variables
const citations = [
    "Je pense, donc je suis. - René Descartes",
    "La folie, c’est de faire toujours la même chose et de s’attendre à un résultat différent. - Albert Einstein",
    "Le sage parle parce qu'il a quelque chose à dire ; l'insensé parle parce qu'il doit dire quelque chose. - Platon",
    "Ce que je sais, c'est que je ne sais rien. - Socrate",
    "La seule chose que je sais, c'est que je suis né pour mourir. - Jean-Jacques Rousseau",
    "Fais de ta vie un rêve, et d’un rêve, une réalité. - Antoine de Saint–Exupéry",
    "La connaissance s’acquiert par l’expérience, tout le reste n’est que de l’information. - Albert Einstein",
    "Il n'y a point de génie sans un grain de folie. - Aristote",
    "Vivre sans espoir, c’est cesser de vivre. - Fiodor Dostoïevski",
    "L’homme qui déplace une montagne commence par enlever les petites pierres. - Confucius",
];

// Définition des fonctions
function CitAuteurSplit(citation){
    let CitAuteur = citation.split("-");
    return CitAuteur;
}
function citation(){
    let random = Math.floor(Math.random() * citations.length);
    return CitAuteurSplit(citations[random]);
}

// Gestion des événements
const image = document.getElementById("thinker");
const texte = document.getElementById("citation");
image.addEventListener("click", function() {;
    let tab  = citation();
    texte.innerHTML = tab[0] + "<br>-<br>" + tab[1];
});
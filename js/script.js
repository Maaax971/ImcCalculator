// Sélection du bouton submit 
const submit = document.querySelector("#submitBtn");

let divFormulaire = document.querySelector("#formulaire");
let divShowResult = document.querySelector("#showResult");

// Déclaration des variables pour le scope
let divId;
let goodDivToCreate;
let buttonReset;

submit.addEventListener("click", function getUserData() {

    const lastname = document.querySelector("#nom").value;
    const firstname = document.querySelector("#prenom").value;
    const age = document.querySelector("#age").value;
    const height = document.querySelector("#taille").value;
    const weight = document.querySelector("#poids").value;

    // Calcul de l'IMC - le principal est fait !
    const yourImc = (weight / Math.pow(parseFloat(height/100),2)).toFixed(1);

    // Désactiver le display quand formulaire rempli + les fonctions à activer

    if (!isNaN(yourImc)) {
        divFormulaire.style.display = "none";
        createDiv(yourImc);
        addElements(lastname, firstname, height, weight, yourImc);
    } if (isNaN(yourImc)) {
        alert ("Veuillez remplir correctement le formulaire ! ")
        document.location.reload();
    }

})

function createDiv(userImc) {

    goodDivToCreate = document.createElement("div");
    goodDivToCreate.className = "wrapper";

    if (userImc < 18.5) {
        
        goodDivToCreate.id = "skinnyImc";
            
    } else if (userImc >= 18.5 && userImc < 25) {
        
        goodDivToCreate.id = "normalImc";    

    } else if (userImc >= 25 && userImc < 30) {
        
        goodDivToCreate.id = "bitBigImc";
            
    } else if (userImc >= 30 && userImc < 35) {
        
        goodDivToCreate.id = "bigImc";
            
    } else if (userImc >= 35 && userImc < 40) {
        
        goodDivToCreate.id = "veryBigImc";
            
    } else if (userImc >= 40) {
        
        goodDivToCreate.id = "deathlyBigImc";
    }
    
    divShowResult.append(goodDivToCreate);
    goodDivToCreate.style.display = "flex";

    divId = goodDivToCreate.id;
    console.log(divId);
    
}

function addElements(nom, prenom, taille, poids, imc) {
    
    const addH1 = document.createElement("h1");
    const addH2 = document.createElement("h2");
    const addP = document.createElement("p");
    
    // Ajout du graphique
    
    const addDiv = document.createElement("div");
    const addImg = document.createElement("img");
    addImg.src = "../img/roue-calcul-imc.png";
    addDiv.style.position = "relative";
    addDiv.className = "graphic";

    // Ajout du bouton reset

    const createResetBtn = document.createElement("button");
    createResetBtn.id = "buttonReset";
    createResetBtn.textContent = "Recommencer le test";

// Ajout d'un h1 personnalisé via les données récupérées par la fonction getUserData()

    addH1.innerHTML = "Bonjour " + prenom + " " + nom + ", selon votre taille (" + taille + "cm) et votre poids (" + poids + "kg) votre IMC serait de " + imc + ". Vous êtes alors dans le cas suivant :";
    goodDivToCreate.append(addH1);

// Ajout d'un h2 personnalisé via les données récupérées par la fonction selectGoodDiv()

    switch (divId) {
        case "skinnyImc":
            addH2.innerHTML = "Vous êtes en insuffisance pondérale";
            addH2.style.color = "orange";
            addP.innerHTML = "Les risques pour la santé liés à l'insuffisance pondérale comprennent l'ostéoporose, l'infertilité et une faiblesse au niveau du système immunitaire. L'insuffisance pondérale peut également indiquer un trouble de l'alimentation ou une autre maladie sous-jacente.";
            addDiv.id = "skinnyGraphic";
            break;

        case "normalImc":
            addH2.innerHTML = "Vous êtes en super forme !";
            addH2.style.color = "green";
            addP.innerHTML = "Vous êtes considéré comme étant en bonne « santé ». Cela peut réduire votre risque de développer des problèmes de santé liés au poids.";
            addDiv.id = "normalGraphic";
            break;

        case "bitBigImc":
            addH2.innerHTML = "Vous êtes en surpoids";
            addH2.style.color = "orange";
            addP.innerHTML = "Attention à vous. Vous êtes plus à risque de développer le diabète, des maladies cardiovasculaires ainsi que certains types de cancer. Plus votre IMC est élevé, plus le risque de ces maladies chroniques augmente."
            addDiv.id = "bitBigGraphic";
            break;
        case "bigImc":
            addH2.innerHTML = "Vous êtes dans une situation d'obésité";
            addH2.style.color = "red";
            addP.innerHTML = "Attention à vous. Vous êtes plus à risque de développer le diabète, des maladies cardiovasculaires ainsi que certains types de cancer. Plus votre IMC est élevé, plus le risque de ces maladies chroniques augmente.";
            addDiv.id = "bigGraphic";
            break;

        case "veryBigImc":
            addH2.innerHTML = "Vous êtes dans une situation de forte obésité";
            addH2.style.color = "red";
            addP.innerHTML = "Attention à vous. Vous êtes plus à risque de développer le diabète, des maladies cardiovasculaires ainsi que certains types de cancer. Plus votre IMC est élevé, plus le risque de ces maladies chroniques augmente.";
            addDiv.id = "veryBigGraphic";
            break;
        case "deathlyBigImc":
            addH2.innerHTML = "Vous êtes dans une situation de forte obésité morbide";
            addH2.style.color = "red";
            addP.innerHTML = "Attention à vous. Vous êtes plus à risque de développer le diabète, des maladies cardiovasculaires ainsi que certains types de cancer. Plus votre IMC est élevé, plus le risque de ces maladies chroniques augmente.";
            addDiv.id = "deathlyBigGraphic";
            break;
    }

    goodDivToCreate.append(addH2);
    goodDivToCreate.append(addP);
    goodDivToCreate.append(addDiv);
    addDiv.append(addImg);

// Ajout d'un bouton Reset

    goodDivToCreate.append(createResetBtn);
    buttonReset = document.querySelector("#buttonReset");
    console.log(buttonReset);
    buttonReset.addEventListener("click", e => {
        document.location.reload();
    })
}

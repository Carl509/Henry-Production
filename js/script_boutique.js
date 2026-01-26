const catalogue = {
  "Tableau PVC":[{name:"8x10 3mm",price:750},{name:"10x12 3mm",price:1000},{name:"10x14 3mm",price:1250},{name:"10x16 3mm",price:1500},{name:"10x16 6mm",price:1750},{name:"12x14 3mm",price:1750},{name:"12x14 6mm",price:2000},{name:"12x16 3mm",price:1750},{name:"12x16 6mm",price:2000},{name:"14x18 3mm",price:2300},{name:"14x18 6mm",price:2500},{name:"14x20 3mm",price:2500},{name:"14x20 6mm",price:2800},{name:"16x20 3mm",price:2800},{name:"16x20 6mm",price:3000},{name:"18x22 6mm",price:4500},{name:"20x26 6mm",price:5500},{name:"22x26 6mm",price:6500},{name:"22x28 6mm",price:7500},{name:"24x36 6mm",price:8500},{name:"30x40 6mm",price:10000}],
  "Tasse":[{name:"Tasse simple",price:200},{name:"Tasse Magic",price:400}],
  "Porte-clé":[{name:"Porte-clé simple",price:250},{name:"Porte-clé double-face",price:300}],
  "Bidon":[{name:"Bidon non conserve 750ml",price:450},{name:"Bidon non conserve kid",price:350},{name:"Tumbler simple 20Oz",price:500},{name:"Tumbler double 20Oz",price:600},{name:"Bidon conserve 22Oz",price:700},{name:"Bidon enfant 12Oz",price:500},{name:"Bidon enfant 20Oz",price:600}],
  "Agenda / Cahier":[{name:"Calendrier",price:100},{name:"Cahier NB",price:300},{name:"Cahier couleur",price:400}],
  "Bijoux":[{name:"Chaîne gravée",price:600},{name:"Bracelet gravé",price:700},{name:"Chaîne avec photo",price:300}],
  "Bourse":[{name:"Bourse fille",price:700},{name:"Bourse garçon",price:500}],
  "Maillot":[{name:"Avec peinture",price:0},{name:"Avec image",price:0}],
  "Plaque Céramique":[{name:"Plaque",price:0}],
  "Autres":[{name:"Bloc reçu",price:0},{name:"Cahier économat",price:0},{name:"Cahier préparer",price:0}]
};
const produitSelect=document.getElementById("produit");
const optionsSelect=document.getElementById("options");
const prixSpan=document.getElementById("prix");
function majOptions(){const produit=produitSelect.value;optionsSelect.innerHTML="";catalogue[produit].forEach(item=>{const option=document.createElement("option");option.value=item.price;option.textContent=item.name;optionsSelect.appendChild(option);});calculPrix();}
function calculPrix(){const prix=optionsSelect.value;prixSpan.innerText=prix;}
function commanderProduit(){const nom=document.getElementById("nom").value;const texte=document.getElementById("texte").value;const produit=produitSelect.value;const option=optionsSelect.options[optionsSelect.selectedIndex].text;const paiement=document.getElementById("paiement").value;const message=`Bonjour, je souhaite commander :
Produit : ${produit}
Option : ${option}
Nom : ${nom}
Texte : ${texte}
Paiement : ${paiement}`;const url=`https://wa.me/50941626470?text=${encodeURIComponent(message)}`;window.open(url,"_blank");}
majOptions();
const generateButton = document.querySelector(".js-generateButton");
const complexButton = document.querySelector(".js-complexButton");
const tesisTitle = document.querySelector(".tesis-title");
const tesisWrapper = document.querySelector(".tesis-wrapper")
const complexSub = document.querySelector(".complex-wrapper");

const verbos = [
  "La llegada",
  "El regreso",
  "La influencia",
  "Un enfoque antropológico",
  "Un análisis marxista",
  "Resignificación",
  "Abordajes socioeducativos",
  "Una reconstrucción",
  "Génesis y desarrollo",
  "Las características",
  "Un abordaje histórico-sociológico",
  "Los orígenes",
  "El impacto",
];

let sujetos = [
"del peronismo", 
"del comunismo",
"de los primeros movimientos obreros de América Latina", 
"del radicalismo",
"del Partido Socialista Argentino", 
"de las fiestas mayas",
"de las comunidades aymaras", 
"del leninismo", 
"de la Revolución Rusa", 
"del pensamiento marxista",
"de la rebelión de Tupac Amaru",
"del anarquismo argentino",
"de la cultura cinematográfica soviética", 
"del movimiento rastafari", 
"de Montoneros",
"del imperialismo norteamericano",
"del campesinado tucumano",
"del estalinismo",
"del movimiento zapatista de liberación nacional",
];

let lugares = [
  "en el territorio rioplatense",
  "en los municipios del norte de Entre Ríos",
  "en las fábricas del sur de la provincia de Buenos Aires",
  "en el partido de Lanús",
  "en los valles de los ríos Nilo, Tigris y Éufrates",
  "en los llanos de La Rioja",
  "en la gobernación del Tucumán",
  "en las plantaciones del Caribe",
  "en el norte de Potosí",
  "en las selvas sudamericanas",
  "en la Huasteca mexicana",
  "en el reino del Kongo",
  "en el África occidental",
  "en la comuna rural rusa",
  "en un señorío monástico castellano",
  "en las villas reales del sur valenciano",
  "en la Inglaterra de Cromwell",
];

let tiempo = [
  "durante el período tardocolonial",
  "tras la caída del muro de Berlín",
  "durante la Baja Edad Media",
  "en el marco de la revolución inglesa del siglo XVII",
  "durante el rosismo temprano",
  "durante los gobiernos radicales",
  "tras la crisis general del siglo XVII",
  "entre 1880 y 1916",
  "tras la crisis del siglo XIV",
  "durante la Revolución Industrial Inglesa",
  "tras la caída del Imperio romano de Occidente",
  "durante la Revolución Francesa",
  "durante la Guerra Fría",
  "a fines del siglo XIX",
  "durante la Revolución cubana",
  "tras la caída de Salvador Allende",
  "durante la guerra civil de Estados Unidos",
  "tras la Gran Depresión",
  "durante la transición del feudalismo al capitalismo",
];

generateButton.addEventListener("click", getTesisTitle);
complexButton.addEventListener("click", masComplejo);

function verb () {
  let randomVerb = Math.floor(Math.random() * (verbos.length));
  return (verbos[randomVerb]);
}

verb () 

function person () {
  let randomPerson = Math.floor(Math.random() * (sujetos.length));
  return (sujetos[randomPerson]);
}
person ()

function place () {
  let randomPlace = Math.floor(Math.random() * (lugares.length));
  return (lugares[randomPlace]);
}

place ()

function temporal () {
  let randomTime = Math.floor(Math.random() * (tiempo.length));
  return (tiempo[randomTime]);
}
temporal () 

function getTesisTitle() {
  tesisWrapper.style.display = "flex";
  complexSub.style.display = "none";
  tesisTitle.innerHTML = verb()+" "+person()+" "+place()+" "+temporal();
}

function masComplejo () {
  tesisWrapper.style.display = "none";
  complexSub.style.display = "block";
}
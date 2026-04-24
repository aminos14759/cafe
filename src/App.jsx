import './App.css'
import { useState } from 'react'
import cafeImg from './assets/cafe.jpg'
import breakfastImg from './assets/breakfast.png'
import coffeeImg from './assets/coffee.png'
import latteImg from './assets/latte.png'
import iceDrinksImg from './assets/ice_drinks.png'
import hotDrinksImg from './assets/hot_drinks.png'
import sweetImg from './assets/crepe nutella.png'
import savoryImg from './assets/pasta.png'
import florentinaImg from './assets/pattes/florentina.jpg'
import sandwichImg from './assets/sandwich.png'
import toastAvocatImg from './assets/trio breakfast/toast avocat.jpg'
import croissantSaleImg from './assets/trio breakfast/croissant salé.jpg'
import frenchToastImg from './assets/trio breakfast/french toast.jpg'
import miniBrunchImg from './assets/brunch .png'
import omletteBrunchImg from './assets/bruch1personne items/omlettebrunch.png'
import sucreeBrunchImg from './assets/bruch1personne items/sucreebrunch.png'
import toastBrunchImg from './assets/bruch1personne items/toastbrunch.png'
import crepefruitrouge from './assets/crepes/crepe fruit rouge.png'
import Ricebowlimg from './assets/Healtycorner/rice.jpg'
import omelette from './assets/omelette/omelette.png'
import crepo from './assets/crepes/crepo.png'
import toastavocado from './assets/toast/toastavocdo.png'
import toastjambonchedar from './assets/toast/toastjambon.png'
import pesto from './assets/pattes/pesto.png'
import crepenutella from './assets/crepes/crepenutella.png'
import tiramisu from './assets/tiramissu/tiramisupistache.png'
import painperdupistache from './assets/painperdu/pistache.png'
import pancakepistache from './assets/pancakes/pistache.png'
import frenchcroissant from './assets/croissant/french.png'
import tiramisunature from './assets/tiramissu/nature.png'
import lotustiramissu from './assets/tiramissu/lotus.png'
import afficheImg from './assets/affiche.jpeg'

const featuredProducts = {
  "Toast Avocat & Eggs + Bol Granola + Café": {
    desc: "Toast avocat avec oeufs, bol granola et cafe au choix.",
    images: [toastAvocatImg],
  },
  "Croissant Salé + Café au choix + Mini Jus": {
    desc: "Croissant sale servi avec cafe au choix et mini jus.",
    images: [croissantSaleImg],
  },
  "French Toast Miel + Café au choix + Mini Jus": {
    desc: "French toast au miel avec cafe au choix et mini jus.",
    images: [frenchToastImg],
  },
  "Florentina": {
    desc: "Pates Florentina (Blanche / Rosee / Rouge).",
    images: [florentinaImg],
  },
  "Mini brunch 1 personne ": {
    desc: "Café, mini jus, croissant , omelette, fromage,charcuterie , tartine oeuf brouillé , tartine roquette tomate ,tartine Au fromage , harrisa,frommage blanc ,barquette, nuggets et boule fromage, crepe sucre, pain perdu miel fruit, bol granola, confiture,miel",
    images: [miniBrunchImg, omletteBrunchImg,  sucreeBrunchImg, toastBrunchImg],
  },
  "Brownie Pocket" :{
    images:[crepefruitrouge],
  },
  "Rice Bowl" : {
    images : [Ricebowlimg]
  },
  "omelette  Fromage":{
    images :[omelette]
  },
  "Crêpe Fromage":{
    images :[crepo],
    desc: "crepe  fromage , harissa , mayonnaise"
  },
  "Crêpe Thon Fromage" :{
    images :[crepo],
    desc: "crepe Thon fromage , harissa , mayonnaise"
  },
  "Crêpe Jambon Fromage" :{
    images :[crepo],
     desc: "crepe jambon fromage , harissa , mayonnaise"
  },
  "Avocat Saumon":{
    images:[toastavocado],
     desc: "Toast avocat avec saumon",
  },
  "Jambon Cheddar":{
    images:[toastjambonchedar],
    desc:"Jambon , Oeuf , Cheddar ",
  },
  "Pesto alla Genovese":{
    images:[pesto],
    desc:"pesto , escalope ",
  },
  "Nutella":{
    images:[crepenutella],
    desc:"Nutella "
  },
  "Tiramisu au Choix":{
    images:[tiramisu,lotustiramissu],
    desc:""
  },
  "Pistache Fruits Rouges":{
    images:[painperdupistache],
    desc:"pain perdu fruits rouges et pistache"
  },
  "Pancake Pistache":{
    images:[pancakepistache],
    desc:"nutella, pistache"
  },
  "French Croissant":{
    images:[frenchcroissant],
    desc:""
  },
  "Tiramisu Classique":{
    images:[tiramisunature],
    desc:"",
  },
    


   
}

/* ═══════════════════ MENU DATA ═══════════════════ */

const menuSections = [
  {
    title: "Petit Déjeuner",
    subtitle: "Commencez votre journée en beauté",
    bannerImage: breakfastImg,
    categories: [
      {
        name: "Petit Déjeuner",
        items: [
          { name: "Quick Breakfast", desc: "Café au choix, mini jus, croissant, eau 0.5L", price: "8,700" },
          { name: "Morning Classic", desc: "Café au choix, mini jus, croissant, omelette, fromage blanc & confiture", price: "11,900", popular: true },
        ],
      },
      {
        name: "Trio Breakfast",
        items: [
          { name: "Toast Avocat & oeufs + Bol Granula + Café", price: "22,900" },
          { name: "Croissant Salé + Café au choix + Mini Jus", price: "12,600" },
          { name: "pain perdu miel + Café au choix + Mini Jus", price: "14,900",popular: true },
        ],
      },
      {
        name: "Mini brunch 1 personne ",
        items: [
          { name: "Mini brunch 1 personne ", desc: "Café, mini jus, croissant , omelette, fromage,charcuterie , tartine oeuf brouillé , tartine roquette tomate ,tartine Au fromage , harrisa,frommage blanc ,barquette, nuggets et boule fromage, crepe sucre, pain perdu miel fruit, bol granola, confiture,miel", price: "37,800", popular: true },
        ],
      },
      {
        name: "Viennoiseries",
        items: [
          { name: "Croissant", price: "2,400", hideDetails: true },
          { name: "Pain au Chocolat", price: "2,400", hideDetails: true },
          { name: "French Croissant", price: "8,800" },
        ],
      },
    ],
  },
  {
    title: "Sandwiches & Tacos",
    subtitle: "Des sandwiches gourmands et généreux",
    bannerImage: sandwichImg,
    categories: [
      {
        name: "Sandwiches",
        items: [
          { name: "Crispy chicken", price: "14,200", popular: true },
          { name: "Grillé chicken", price: "13,900" },
          { name: "Tunisien", price: "11,900" },
        ],
      },
      {
        name: "Tacos",
        items: [
          { name: "Crispy", price: "15,600" },
          { name: "Grillé", price: "14,800" },
        ],
      },
    ],
  },
  {
    title: "Salé & Plats",
    subtitle: "Des saveurs qui régalent",
    bannerImage: savoryImg,
    categories: [
      {
        name: "Crêpe Salée",
        items: [
          { name: "Crêpe Fromage", price: "11,800" },
          { name: "Crêpe Thon Fromage", price: "14,600" },
          { name: "Crêpe Jambon Fromage", price: "13,600" },
          { name:"Crêpe Tunisienne " , price :"16.800"}
          
        ],
      },
       {
        name: "Nos Gratins",
        items: [
          { name: "crépe Fourée poulet champignons", price: "18.800" },
          { name: "Lasagne bolognaise", price: "22.800" },
         
        ],
      },
      {
        name: "Omelette",
        items: [
          {name : "omelette  Fromage",price :"12.800"},
          { name: "omelette Thon Fromage", price: "14,600" },
          { name: "omelette  Jambon Fromage", price: "13,800" },
          { name: "omelette Épinard Ricotta", price: "16,800", popular: true },
          { name: "omelette La Desseada", desc: "Thon & Jambon , riz , légumes sautés , frites ", price: "17,200" },
        ],
      },
      {
        name: "Toast",
        items: [
          { name: "Saumon oeufs", price: "16,400" },
          { name: "Jambon Cheddar", price: "13,900" },
          { name: "Avocat Saumon", price: "19,900" },
        ],
      },
      {
        name: "Healthy Corner",
        items: [
          { name: "Rice Bowl", desc: "Riz aux fruits secs, salade, escalope grillé, œuf", price: "18,500", popular: true },
          { name: "Protéine Bowl", desc: "Saumon, avocat, salade, œuf, riz", price: "25,900" },
        ],
      },
      {
        name: "Salades",
        items: [
          { name: "César", price: "16,900" },
          { name: "Protéine", desc: "Quinoa, haricots rouges, œuf, salade verte", price: "22,400", popular: true },
          { name: "Healthy Avocado", desc: "Avocat, salade verte, graines de chia, fruits secs", price: "17,800" },
        ],
      },
      {
        name: "Pâtes",
        items: [
          { name: "Putanesca", price: "15,900" },
          { name: "Florentina", desc: "Blanche / Rosée / Rouge", price: "19,200", popular: true },
          { name: "Pesto alla Genovese", price: "21,800" },
          { name : "Spaghetti bolognaise ", price:"23.600"}
        ],
      },
      {
        name: "Plats",
        items: [
          { name: "Suprême Grillé", price: "19,200" },
          { name: "Panné Sauce Fromage", price: "21,800" },
          { name: "Blanc de Poulet Sauce Champignon", price: "23,400" },
        ],
      },
      {
        name: "Suppléments",
        items: [
          { name: "Frites", price: "5,000" },
          { name: "Thon", price: "3,000" },
          { name: "Jambon", price: "3,000" },
          { name: "Fromage", price: "3,000" },
          { name : "Nestle" , price:"1.500" }
        ],
      },
    ],
  },
  {
    title: "Sucré & Gourmand",
    subtitle: "Pour les âmes gourmandes",
    bannerImage: sweetImg,
    categories: [
      {
        name: "Crêpe Sucrée",
        items: [
          { name: "Nutella", price: "14,800" },
          { name: "Brownie Pocket", price: "15,600" },
          { name: "Bueno Fruits Rouges", price: "16,800", popular: true },
          {name:"Crepe Delice Royale" , price:"17.800"},
        ],
      },
      {
        name: "Pancakes",
        items: [
          { name: "Nutella", price: "17,800" },
          { name: "Pancake Pistache", price: "18,900", popular: true },
          { name: "Crunchy", price: "15,800" },
          { name: "Beurre de Cacahuète", price: "19,600" },
        ],
      },
      {
        name: "Pain Perdu",
        items: [
          { name: "Caramel Banane", price: "16,400" },
          { name: "Lemon Marshmallow", price: "17,200" },
          { name: "Tiramisu", price: "17,600" },
          { name: "Pistache Fruits Rouges", price: "18,700", popular: true },
        ],
      },
      {
        name: "Le Moment Sucré",
        items: [
          { name: "Cheesecake au Choix", price: "12,500" },
          { name: "Tiramisu Classique", price: "13,800" },
          { name: "Tiramisu au Choix", price: "15,800" },
          { name: "Saint Sébastien", price: "14,800", popular: true },
          { name: "Fondant Chocolat", price: "10,900" },
        ],
      },
    ],
  },
  {
    title: "Nos Cafés",
    subtitle: "L'art du café, tasse après tasse",
    bannerImage: coffeeImg,
    categories: [
      {
        name: "Cafés Classiques",
        items: [
          { name: "Expresso", price: "3,900" },
          { name: "Américain", price: "4,000" },
          { name: "Cappucin", price: "4,300" },
          { name: "Grande Tasse", price: "4,500" },
          { name: "Café Crème", price: "5,200" },
          { name: "Cappuccino", price: "5,500" },
          { name: "Chocolat au Lait", price: "3,900" },
          { name: "Café Turc", price: "6,500" },
        ],
      },
      
    ],
  },
  {
    title: "Lattés & Spécialités",
    subtitle: "Des créations gourmandes et onctueuses",
    bannerImage: latteImg,
    categories: [
      {
        name: "Nos Lattés",
        items: [
          { name: "Spanish", price: "6,500" },
          { name: "Caramel", price: "9,500" },
          { name: "Vanille", price: "9,500" },
          { name: "Noisette", price: "9,500" },
          { name: "Nutella", price: "10,500" },
          { name: "Pistache", price: "10,500" },
          { name: "Spéculoos", price: "10,500" },
        ],
      },
      {
        name: "Iced Latte",
        items: [
          { name: "Iced Americano", price: "5,500" },
          { name: "Spanish", price: "7,500" },
          { name: "Caramel", price: "10,500" },
          { name: "Nutella", price: "10,500" },
          { name: "Pistache", price: "10,500" },
          { name: "Spéculoos", price: "10,500" },
        ],
      },
      {
        name: "Affogato",
        items: [
          { name: "Pistache", price: "7,500", popular: true },
          { name: "Caramel", price: "7,100" },
          { name: "Tiramisu", price: "7,100" },
          { name: "Vanille", price: "7,100" },
        ],
      },
    ],
  },
  {
    title: "Boissons Fraîches",
    subtitle: "Fraîcheur et saveurs à chaque gorgée",
    bannerImage: iceDrinksImg,
    categories: [
      {
        name: "Frappuccino",
        items: [
          { name: "Caramel", price: "11,900" },
          { name: "Spéculoos", price: "11,900" },
          { name: "Nutella", price: "12,600" },
          { name: "Caramel Spéculoos", price: "13,000" },
          { name: "Nutella Spéculoos", price: "13,000", popular: true },
          { name: "Pistache", price: "12,600" },
        ],
      },
      {
        name: "Smoothies",
        items: [
          { name: "fraise", price: "11,900" },
          { name: "Mango", price: "12,300" },
          { name: "Ananas", price: "11,900" },
          { name: "Framboise", price: "12,300" },
          { name: "Piña Colada", price: "12,300" },
          { name: "Colado", desc: "Fraise & Ananas", price: "12,300" },
        ],
      },
      {
        name: "Mojito",
        items: [
          { name: "Virgin", price: "9,500" },
          { name: "Fraise", price: "11,900" },
          { name: "Framboise", price: "11,900" },
          { name: "Blueberry", price: "11,900" },
          { name: "Iced Fruit Passion", price: "12,800" },
          { name: "Iced Night Sea", price: "12,800" },
          { name: "Iced Galaxy (Energy)", price: "14,200" },
        ],
      },
      {
        name: "Milkshake",
        items: [
          { name: "Pistache", price: "12,300" },
          { name: "Rosy", price: "11,800" },
          { name: "Nutella", price: "13,800" },
          { name: "Spéculoos", price: "12,700" },
        ],
      },
    ],
  },
  {
    title: "Boissons Chaudes",
    subtitle: "Chaleur et réconfort",
    bannerImage: hotDrinksImg,
    categories: [
      {
        name: "Thés",
        items: [
          { name: "Thé à la Menthe", price: "3,900" },
          { name: "Thé aux Amandes", price: "7,400" },
          { name: "Thé aux Pignons", price: "10,800" },
          { name: "Thé La Desseada", price: "14,000" },
          { name: "Thé Infusion", price: "5,500" },
        ],
      },
      {
        name: "Hot Chocolate",
        items: [
          { name: "Simple Chaud", price: "8,000" },
          { name: "Spéculoos Chaud", price: "10,500" },
          { name: "Nutella Chaud", price: "10,500" },
          { name: "Tiramisu Chaud", price: "11,500" },
          { name: "Fruits Secs Chaud", price: "14,500" },
          { name: "Marshmallow", price: "11,000" },
        ],
      },
      {
        name: "Boissons Froides",
        items: [
          { name: "Eau Minérale 1L", price: "3,900" },
          { name: "Eau Minérale 0.5L", price: "2,300" },
          { name: "Garci 1L", price: "3,900" },
          { name: "Garci 0.5L", price: "2,300" },
          { name: "Soda", price: "3,900" },
          { name: "Energy Drink", price: "9,500" },
        ],
      },
      {
        name: "Nos Jus",
        items: [
          { name: "Orange", price: "7,800" },
           { name: "Fraise", price: "9,500" },
          { name: "Citron", price: "8,200" },
          { name: "Citron Menthe", price: "9,000" },
          { name: "Banane", price: "9,500" },
          { name: "Citron aux Amandes", price: "11,500" },
          { name: "Duo Fraise Banane", price: "11,900" },
          { name: "Power", desc: "Dattes, Banane, fruits secs", price: "15,900" },
        ],
      },
    ],
  },
]

/* ═══════ Decorative Divider ═══════ */
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="h-px w-8 bg-amber-400/40" />
      <div className="h-1.5 w-1.5 rotate-45 bg-amber-400/60" />
      <div className="h-px w-8 bg-amber-400/40" />
    </div>
  )
}

/* ═══════ Menu Item Row ═══════ */
function MenuItem({ name, desc, price, popular, onClick, hideDetails }) {
  const isInteractive = !hideDetails;
  return (
    <li className="group relative rounded-xl p-2 -mx-2 transition-all duration-300 hover:bg-amber-50 hover:shadow-sm">
      <div onClick={isInteractive ? onClick : undefined} className={`w-full text-left outline-none ${isInteractive ? 'cursor-pointer' : ''}`}>
        <div className="flex items-baseline justify-between gap-3">
          <div className="min-w-0 flex-1 flex items-baseline">
            <span className="text-[0.95rem] font-medium text-stone-800 transition-colors duration-200 group-hover:text-amber-800">
              {name}
            </span>
            <span className="mx-2 inline-block flex-1 translate-y-[-3px] border-b border-dotted border-stone-300 align-middle transition-colors duration-200 group-hover:border-amber-300" style={{ minWidth: '20px' }} />
          </div>
          <span className="shrink-0 font-serif text-sm font-semibold text-amber-800 transition-transform duration-200 group-hover:scale-105">
            {price}
          </span>
        </div>
        
        <div className="mt-1 flex items-end justify-between gap-3">
          {desc ? (
            <p className="text-xs leading-relaxed text-stone-500 italic flex-1 pr-2 line-clamp-2">{desc}</p>
          ) : (
            <div className="flex-1"></div>
          )}
          
          <div className="shrink-0 flex flex-col items-end gap-1.5">
            {popular && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-amber-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Recommandé
              </span>
            )}
            {isInteractive && (
              <div className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-stone-500 shadow-sm transition-all duration-300 group-hover:border-amber-300 group-hover:bg-amber-100 group-hover:text-amber-700">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="hidden sm:inline-block">Voir détails</span>
                <span className="sm:hidden">Détails</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

/* ═══════ Category Card ═══════ */
function CategoryCard({ name, items, delay, sectionTitle, onItemClick }) {
  const hideDetails = name === "Thés" || sectionTitle === "Nos Cafés" || name === "Cafés Classiques" || name === "Boissons Froides" || name === "Suppléments" || name === "Nos Jus";
  return (
    <div
      className="animate-fade-in-up rounded-xl border border-stone-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h4 className="mb-1 font-serif text-lg font-bold text-stone-800">{name}</h4>
      <div className="mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-200" />
      <ul className="divide-y divide-stone-50">
        {items.map((item, i) => (
          <MenuItem
            key={i}
            {...item}
            hideDetails={hideDetails || item.hideDetails}
            onClick={() => onItemClick({ ...item, sectionTitle, categoryName: name })}
          />
        ))}
      </ul>
    </div>
  )
}

/* ═══════ Section Banner ═══════ */
function SectionBanner({ title, subtitle, bannerImage, sectionIndex }) {
  if (!bannerImage) {
    return (
      <div className="animate-fade-in mb-10 text-center" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
        <Divider />
        <h2 className="mt-4 font-serif text-2xl font-bold text-stone-800 sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-stone-400">{subtitle}</p>
        <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" />
      </div>
    )
  }

  return (
    <div className="animate-fade-in relative mb-10 overflow-hidden rounded-2xl shadow-xl" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
      <img
        src={bannerImage}
        alt={title}
        className="h-48 w-full object-cover sm:h-56 md:h-64"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-bold text-white drop-shadow-lg sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        <div className="mt-3 h-0.5 w-12 bg-amber-400" />
      </div>
    </div>
  )
}

/* ═══════════════════ MAIN APP ═══════════════════ */

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [showAffiche, setShowAffiche] = useState(true)

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ═══════ HERO ═══════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={cafeImg}
          alt="La Sdesseda café"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <div className="animate-fade-in mb-6 h-px w-16 bg-amber-400/70" />

          <h1 className="animate-fade-in-up font-serif text-4xl font-bold leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to<br />
            <span className="mt-2 inline-block bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              La desseada
            </span>
          </h1>

          <p className="animate-fade-in animation-delay-200 mt-4 max-w-md text-base font-light tracking-wide text-white/70 sm:text-lg">
            Un café d'exception, une expérience unique
          </p>

          <div className="animate-fade-in animation-delay-200 mt-6 h-px w-16 bg-amber-400/70" />

          <button
            onClick={scrollToMenu}
            className="animate-fade-in-up animation-delay-400 mt-10 cursor-pointer rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-700 to-amber-600 px-10 py-3.5 text-base font-semibold tracking-wider text-white shadow-lg shadow-amber-900/30 transition-all duration-300 ease-out hover:scale-105 hover:from-amber-600 hover:to-amber-500 hover:shadow-xl hover:shadow-amber-800/40 active:scale-95 sm:px-12 sm:py-4 sm:text-lg"
          >
            Voir Menu
          </button>
        </div>

        {/* Bottom fade into warm background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* ═══════ MENU ═══════ */}
      <section id="menu" className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">

        {/* Top menu heading */}
        <div className="animate-fade-in-up mb-16 text-center">
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            Notre Carte
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-stone-800 sm:text-4xl lg:text-5xl">
            Le Menu
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
        </div>

        {/* Render each major section */}
        {menuSections.map((section, sIdx) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <SectionBanner
              title={section.title}
              subtitle={section.subtitle}
              bannerImage={section.bannerImage}
              sectionIndex={sIdx}
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.categories.map((cat, cIdx) => (
                <CategoryCard
                  key={cat.name}
                  name={cat.name}
                  items={cat.items}
                  delay={cIdx * 100}
                  sectionTitle={section.title}
                  onItemClick={setSelectedItem}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl font-bold text-stone-800 sm:text-2xl">{selectedItem.name}</h3>
            <p className="mt-1 text-sm text-stone-500">{selectedItem.sectionTitle} - {selectedItem.categoryName}</p>
            {featuredProducts[selectedItem.name]?.images?.length > 0 && (
              <div className={`mt-4 grid gap-3 ${featuredProducts[selectedItem.name].images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {featuredProducts[selectedItem.name].images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${selectedItem.name} ${idx + 1}`}
                    className="w-full aspect-square rounded-xl object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
            <p className="mt-4 text-sm leading-relaxed text-stone-600 italic">
              {featuredProducts[selectedItem.name]?.desc || selectedItem.desc || "Description bientôt disponible."}
            </p>
            <p className="mt-4 font-serif text-lg font-semibold text-amber-800">{selectedItem.price}</p>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="mt-6 w-full rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600 sm:w-auto"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {showAffiche && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setShowAffiche(false)}
        >
          <div
            className="relative w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] rounded-2xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowAffiche(false)}
              className="absolute -right-2 -top-2 md:-right-4 md:-top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-800 shadow-xl hover:bg-stone-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={afficheImg}
              alt="Affiche"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-stone-200 bg-stone-900 py-10 text-center">
        <Divider />
        <p className="mt-4 font-serif text-xl text-amber-400">La desseada</p>
        <p className="mt-2 text-xs tracking-wider text-stone-500">
          © {new Date().getFullYear()} — Tous droits réservés
        </p>
      </footer>
    </div>
  )
}

export default App

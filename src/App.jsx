import './App.css'
import cafeImg from './assets/cafe.jpg'
import breakfastImg from './assets/breakfast.png'
import coffeeImg from './assets/coffee.png'
import latteImg from './assets/latte.png'
import iceDrinksImg from './assets/ice_drinks.png'
import hotDrinksImg from './assets/hot_drinks.png'
import sweetImg from './assets/crepe nutella.png'
import savoryImg from './assets/pasta.png'
import sandwichImg from './assets/sandwich.png'

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
          { name: "Morning Classic", desc: "Café au choix, mini jus, croissant, omelette, fromage blanc & confiture", price: "11,900" },
        ],
      },
      {
        name: "Trio Breakfast",
        items: [
          { name: "Toast Avocat & Eggs + Bol Granola + Café", price: "22,900" },
          { name: "Croissant Salé + Café au choix + Mini Jus", price: "12,600" },
          { name: "French Toast Miel + Café au choix + Mini Jus", price: "14,900" },
        ],
      },
      {
        name: "Le Prestige",
        items: [
          { name: "Le Prestige", desc: "Café, mini jus, crêpe salée, omelette, fromage, tartine jambon , tartine oeuf brouillé,tartine Au fromage , charcuterie, brochette escalope,", price: "37,800" },
        ],
      },
      {
        name: "Viennoiseries",
        items: [
          { name: "Croissant", price: "2,400" },
          { name: "Pain au Chocolat", price: "2,400" },
          { name: "French Croissant", price: "8,800" },
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
      {
        name: "Cafés Capsules",
        items: [
          { name: "Expresso", price: "4,900" },
          { name: "Americano", price: "5,000" },
          { name: "Cappucin", price: "5,300" },
          { name: "Crème", price: "6,300" },
          { name: "Cappuccino", price: "6,500" },
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
          { name: "Speculose", price: "10,500" },
        ],
      },
      {
        name: "Ice Latté",
        items: [
          { name: "Ice Americano", price: "5,500" },
          { name: "Spanish", price: "7,500" },
          { name: "Caramel", price: "10,500" },
          { name: "Nutella", price: "10,500" },
          { name: "Pistache", price: "10,500" },
          { name: "Speculose", price: "10,500" },
        ],
      },
      {
        name: "Affogato",
        items: [
          { name: "Pistache", price: "7,500" },
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
          { name: "Speculose", price: "11,900" },
          { name: "Nutella", price: "12,600" },
          { name: "Caramel Speculose", price: "13,000" },
          { name: "Nutella Speculose", price: "13,000" },
          { name: "Pistache", price: "12,600" },
        ],
      },
      {
        name: "Smoothie",
        items: [
          { name: "Strawberry", price: "11,900" },
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
          { name: "Strawberry", price: "11,900" },
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
          { name: "Speculose", price: "12,700" },
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
          { name: "Speculose Chaud", price: "10,500" },
          { name: "Nutella Chaud", price: "10,500" },
          { name: "Tiramisu Chaud", price: "11,500" },
          { name: "Fruit Sec Chaud", price: "14,500" },
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
          { name: "Citron", price: "8,200" },
          { name: "Citron Menthe", price: "9,000" },
          { name: "Banane", price: "9,500" },
          { name: "Citron aux Amandes", price: "11,500" },
          { name: "Duo Fraise Banane", price: "11,900" },
          { name: "Power", desc: "Dattes, banane, fruits secs", price: "15,900" },
        ],
      },
    ],
  },
  {
    title: "Sandwishes & Tacos",
    subtitle: "Des sandwichs gourmands et généreux",
    bannerImage: sandwichImg,
    categories: [
      {
        name: "Sandwishes",
        items: [
          { name: "Crispy chiken", price: "14,200" },
          { name: "Grillé chiken", price: "13,900" },
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
    title: "Sucré & Gourmand",
    subtitle: "Pour les âmes gourmandes",
    bannerImage: sweetImg,
    categories: [
      {
        name: "Crêpe Sucrée",
        items: [
          { name: "Nutella", price: "14,800" },
          { name: "Brownie Pocket", price: "15,600" },
          { name: "Buno Fruit Rouge", price: "16,800" },
        ],
      },
      {
        name: "Pancake",
        items: [
          { name: "Nutella", price: "17,800" },
          { name: "Pistache", price: "18,900" },
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
          { name: "Pistache Fruit Rouge", price: "18,700" },
        ],
      },
      {
        name: "Le Moment Sucré",
        items: [
          { name: "Cheesecake au Choix", price: "12,500" },
          { name: "Tiramisu Classique", price: "13,800" },
          { name: "Tiramisu au Choix", price: "15,800" },
          { name: "San Sébastien", price: "14,800" },
          { name: "Fondant Chocolat", price: "10,900" },
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
          { name: "Fromage", price: "11,800" },
          { name: "Thon Fromage", price: "14,600" },
          { name: "Jambon Fromage", price: "13,600" },
        ],
      },
      {
        name: "Omelette",
        items: [
          { name: "Thon Fromage", price: "14,600" },
          { name: "Jambon Fromage", price: "13,800" },
          { name: "Épinard Ricotta", price: "16,800" },
          { name: "La Desseada", desc: "Thon & Jambon", price: "17,200" },
        ],
      },
      {
        name: "Toste",
        items: [
          { name: "Suman Eggs", price: "16,400" },
          { name: "Jambon Cheddar", price: "13,900" },
          { name: "Avocat Suman", price: "19,900" },
        ],
      },
      {
        name: "Healthy Corner",
        items: [
          { name: "Rice Bowl", desc: "Riz aux fruits secs, salade, escalope grillé, œuf", price: "18,500" },
          { name: "Protéine Bowl", desc: "Suman, avocat, salade, œuf, riz", price: "25,900" },
        ],
      },
      {
        name: "Salades",
        items: [
          { name: "César", price: "16,900" },
          { name: "Protéine", desc: "Quinoa, haricots rouges, œuf, salade verte", price: "22,400" },
          { name: "Healthy Avocat", desc: "Avocat, salade verte, graines de chia, fruits secs", price: "17,800" },
        ],
      },
      {
        name: "Pâtes",
        items: [
          { name: "Poutanesca", price: "15,900" },
          { name: "Florentina", desc: "Blanche / Rosée / Rouge", price: "19,200" },
          { name: "Pesto alla Genovese", price: "21,800" },
        ],
      },
      {
        name: "Plats",
        items: [
          { name: "Suprême Grillé", price: "19,200" },
          { name: "Panné Sauce Fromage", price: "21,800" },
          { name: "Blanc Poulet Sauce Champignon", price: "23,400" },
        ],
      },
      {
        name: "Suppléments",
        items: [
          { name: "Frites", price: "5,000" },
          { name: "Thon", price: "3,000" },
          { name: "Jambon", price: "3,000" },
          { name: "Fromage", price: "3,000" },
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
function MenuItem({ name, desc, price }) {
  return (
    <li className="group py-2">
      <div className="flex items-baseline justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className="text-[0.95rem] font-medium text-stone-700 transition-colors duration-200 group-hover:text-amber-700">
            {name}
          </span>
          <span className="mx-2 inline-block flex-1 translate-y-[-3px] border-b border-dotted border-stone-200 align-middle" style={{ minWidth: '20px' }} />
        </div>
        <span className="shrink-0 font-serif text-sm font-semibold text-amber-800">
          {price}
        </span>
      </div>
      {desc && (
        <p className="mt-0.5 text-xs leading-relaxed text-stone-400 italic">{desc}</p>
      )}
    </li>
  )
}

/* ═══════ Category Card ═══════ */
function CategoryCard({ name, items, delay }) {
  return (
    <div
      className="animate-fade-in-up rounded-xl border border-stone-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h4 className="mb-1 font-serif text-lg font-bold text-stone-800">{name}</h4>
      <div className="mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-200" />
      <ul className="divide-y divide-stone-50">
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
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
                />
              ))}
            </div>
          </div>
        ))}
      </section>

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

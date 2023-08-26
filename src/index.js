import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <header className='header'>
    <h1>Fast React Pizza Co.</h1>
  </header>
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length
  return <main className='menu'>
    <h2>Our Menu</h2>
    {numPizzas > 0 ? (
      <>
        <p>Here is our Menu</p>
        <ul className='pizzas'>
          {pizzas.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
        </ul>
      </>
    ) : (<p>We're Still working on oure menu please come back later</p>)
    }
  </main>;
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const OpenHour = 2;
  const closeHour = 22;

  const isOpen = hour >= OpenHour && hour <= closeHour

  return <footer className='footer'>
    {isOpen ? <Order OpenHour={OpenHour} closeHour={closeHour} /> : (<p>We're happy to welcome you betewn {closeHour}:00 and {OpenHour}:00</p>)}
  </footer >
}

function Order({ closeHour, OpenHour }) {
  return (
    <div className='order'>
      <p>We're Open Until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order Now</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
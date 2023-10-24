import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import Header from './Header';
import './app.scss';

const arr = [
  {
    id: 1,
    title: 'Наушники студийные Beyerdynamic DT 770',
    price: 21999,
    imageUrl: '/react-headphones/img/headphones/1.jpg'
  },
  {
    id: 2,
    title: 'Наушники студийные AKG K92',
    price: 8699,
    imageUrl: '/react-headphones/img/headphones/2.jpg'
  },
  {
    id: 3,
    title: 'Наушники студийные AKG K271 MKII',
    price: 28499,
    imageUrl: '/react-headphones/img/headphones/3.jpg'
  },
  {
    id: 4,
    title: 'Наушники студийные Sennheiser HD 280 PRO',
    price: 12799,
    imageUrl: '/react-headphones/img/headphones/4.jpg'
  }
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все наушники</h1>
          <div className="search-block d-flex">
            <img src="/react-headphones/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={() => console.log('Добавили в закладки')}
              onFavorite={() => console.log('Нажали плюс')}
            />
          ))}

          {/* <div className="card">
            <img
              width={133}
              height={120}
              src="/img/headphones/2.jpg"
              alt="Headphones"
            ></img>
            <h5>Наушники студийные AKG K92</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>8 661 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={120}
              src="/img/headphones/3.jpg"
              alt="Headphones"
            ></img>
            <h5>Наушники студийные AKG K271 MKII</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>28 395 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={120}
              src="/img/headphones/4.jpg"
              alt="Headphones"
            ></img>
            <h5>Наушники студийные Sennheiser HD 280 PRO</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 681 руб.</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;

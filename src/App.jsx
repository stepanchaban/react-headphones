import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './app.scss';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все наушники</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <div className="card">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

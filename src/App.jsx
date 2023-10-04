import './app.scss';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30 ">
            Корзина
            <img className="cu-p" src="img/btn-remove.svg" alt="Remove" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(/img/headphones/1.jpg)' }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Наушники студийные Beyerdynamic DT 770</p>
                <b>21 990 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: 'url(/img/headphones/1.jpg)' }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Наушники студийные Beyerdynamic DT 770</p>
                <b>21 990 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 990 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1100 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" />
          <div>
            <h3 className="text-uppercase">React Headphones</h3>
            <p className="opacity-5">Гарантия звука</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>0 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все наушники</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unlike" />
            </div>
            <img
              width={133}
              height={120}
              src="/img/headphones/1.jpg"
              alt="Headphones"
            ></img>
            <h5>Наушники студийные Beyerdynamic DT 770</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>21 990 руб.</b>
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

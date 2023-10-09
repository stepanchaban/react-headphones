const Card = () => {
  return (
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
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
  );
};

export default Card;

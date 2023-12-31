import styles from './Card.module.scss';

const Card = ({ title, price, imageUrl, onPlus, onFavorite }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/react-headphones/img/heart-unliked.svg" alt="Unlike" />
      </div>
      <img width={133} height={120} src={imageUrl} alt="Headphones"></img>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={onPlus}>
          <img width={11} height={11} src="/react-headphones/img/plus.svg" alt="Plus"></img>
        </button>
      </div>
    </div>
  );
};

export default Card;

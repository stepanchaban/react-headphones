const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="react-headphones/img/logo.svg" />
        <div>
          <h3 className="text-uppercase">React Headphones</h3>
          <p className="opacity-5">Гарантия звука</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="react-headphones/img/cart.svg" />
          <span>0 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="react-headphones/img/user.svg" />
        </li>
      </ul>
    </header>
  );
};

export default Header;

import logo from './logo.svg';
import './App.css';

function App() {

  let menuArr = [
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
    {name: "JUICY", price: "5000", image: "fruit.png"},
  ]

  return (
    <>
      <nav> 
        <div className="container">
          <div className="nav-title">
            <a href="#">JUICY</a> 
          </div> 
        
          <div className="nav-menu">
            <div className="nav-btn">
              <a href="#">HOME</a>
              <a href="#">MENU</a>
              <a href="#">INSTA</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="hd">
        <div className="hd-container">
          <h2 className="hd-title">Do Wanna Sweet?</h2>
          <p className="hd-content">The answer is JUICY</p>
        </div> 
      </header>

      <section className="menu">
        {
          menuArr.map((menu) => (
            <Menu
              name={menu.name}
              price={menu.price}
              image={menu.image}
            />
          ))
        }
      </section>

      <footer>
        <div className="container">
          <p>&copy; JUICY IS AlWAYS SWEEEEET !</p>
        </div>
      </footer>
    </>
  );
}

function Menu(props){
  const { name, price, image } = props;
  return(
    <div className="menu-container">
      <div className="menu-img">
        <a href="http://www.no1juicy.com/main/home"> 
          <img src={image} alt={name}/></a>
        <div className="menu-title">
          {name} <br/> {price}won</div>
      </div>
    </div>
  );
}

export default App;

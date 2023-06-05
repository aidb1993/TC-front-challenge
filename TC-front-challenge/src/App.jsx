import { useState, useEffect } from "react";
import classes from "./app.module.css";
import { ProductContainer } from "./components/product-container/ProductContainer";

function App() {
  const [products, setProducts] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.turismocity.com/cuarentena/products"
        );
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <img src="Slogan.svg" alt="logo" />
          </div>
          <ul className={classes.items}>
            <li>
              <img src="Vuelos.png" alt="icon" />
              <p>Vuelos</p>
            </li>
            <li>
              <img src="Union.png" alt="icon" style={{ marginBottom: "2px" }} />
              <p>Hoteles</p>
            </li>
            <li>
              <img src="Alquiler.png" alt="icon" />
              <p>Alquileres</p>
            </li>
            <li>
              <img src="Paquetes.png" alt="icon" />
              <p>Paquetes</p>
            </li>
            <li>
              <img src="Seguro.png" alt="icon" />
              <p>Seguro de viajes</p>
            </li>
            <li>
              <img src="Micros.png" alt="icon" />
              <p>Micros</p>
            </li>
            <li>
              <img src="Autos.png" alt="icon" />
              <p>Autos</p>
            </li>
            <li>
              <img src="Blog.png" alt="icon" />
              <p>Blog</p>
            </li>
          </ul>
          <div className={classes.buttons}>
            <div className={classes.lang}>
              <img src="Argentina.png" alt="icon" />
              <p>AR (ARS)</p>
            </div>
            <div className={classes.login}>
              <img src="cuenta.png" alt="icon" />
              <p>Ingresar</p>
            </div>
          </div>
        </nav>
        <nav className={classes["navbar-mobile"]}>
          <div className={classes.container}>
            <div className={classes.hamburguer}>
              <img
                src="Vector.png"
                alt="icon"
                onClick={() => {
                  setShowMobileMenu(!showMobileMenu);
                }}
              />
            </div>
            <div className={classes.logo}>
              <img src="Slogan.svg" alt="logo" />
            </div>
          </div>
          <div
            style={showMobileMenu ? { display: "block" } : { display: "none" }}
          >
            <ul className={classes.items}>
              <li>
                <img src="Vuelos.png" alt="icon" />
                <p>Vuelos</p>
              </li>
              <li>
                <img
                  src="Union.png"
                  alt="icon"
                  style={{ marginBottom: "2px" }}
                />
                <p>Hoteles</p>
              </li>
              <li>
                <img src="Alquiler.png" alt="icon" />
                <p>Alquileres</p>
              </li>
              <li>
                <img src="Paquetes.png" alt="icon" />
                <p>Paquetes</p>
              </li>
              <li>
                <img src="Seguro.png" alt="icon" />
                <p>Seguro de viajes</p>
              </li>
              <li>
                <img src="Micros.png" alt="icon" />
                <p>Micros</p>
              </li>
              <li>
                <img src="Autos.png" alt="icon" />
                <p>Autos</p>
              </li>
              <li>
                <img src="Blog.png" alt="icon" />
                <p>Blog</p>
              </li>
            </ul>
            <div className={classes.buttons}>
              <div className="lang">
                <img src="Argentina.png" alt="icon" />
                <p>AR (ARS)</p>
              </div>
              <div className="login">
                <img src="cuenta.png" alt="icon" />
                <p>Ingresar</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className={classes.hero}>
          <div className={classes["hero-text"]}>
            Ofertas para aprovechar desde tu casa
          </div>
        </div>
        {products &&
          products.map((product) => (
            <ProductContainer
              key={product.name}
              home={product.home}
              image={product.image}
              links={product.links}
              name={product.name}
              title={product.title}
              subtitle={product.subtitle}
            />
          ))}
      </main>
      <div className={classes.footer}>
        <div className={classes["footer-links"]}>
          <ul>
            <li>Sobre Turismocity.com</li>
            <li>
              <a href="#">Quienes somos</a>
            </li>
            <li>
              <a href="#">Feriados Nacionales</a>
            </li>
            <li>
              <a href="#">Afiliados</a>
            </li>
            <li>
              <a href="#">Promocionar Hotel</a>
            </li>
          </ul>
          <ul>
            <li>Soporte</li>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
          </ul>
        </div>
        <div className={classes.legal}>
          <p>
            Copyright 2021 Turismocity. <br />
            Todos los derechos reservados.
          </p>
          <img src="data.png" alt="" />
        </div>
      </div>
      <div className={classes["footer-mobile"]}>
        <img className={classes["footer-logo"]} src="TURISMOCITY.png" alt="" />
        <div className={classes.social}>
          <a href="">
            <img src="Instagram.png" alt="" />
          </a>
          <a href="">
            <img src="Facebook.png" alt="" />
          </a>
          <a href="">
            <img src="Twitter.png" alt="" />
          </a>
          <a href="">
            <img src="Youtube.png" alt="" />
          </a>
          <a href="">
            <img src="Linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="Tiktok.png" alt="" />
          </a>
        </div>
        <div className={classes["footer-links"]}>
          <ul>
            <li>
              <a href="#">Quienes somos</a>
            </li>
            <li>
              <a href="#">Feriados Nacionales</a>
            </li>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

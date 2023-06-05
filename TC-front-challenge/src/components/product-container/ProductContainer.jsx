/* eslint-disable react/prop-types */
import classes from "./productContainer.module.css";
import { Product } from "../product/Product";

export const ProductContainer = ({
  title,
  subtitle,
  name,
  home,
  image,
  links,
}) => {
  return (
    <div className={classes["product-container"]}>
      <div className={classes.description}>
        <div className={classes["description-text"]}>
          <div className={classes.title}>{title}</div>
          <div className={classes.subtitle}>{subtitle}</div>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className={classes.products}>
        {links &&
          links.map((link) => (
            <Product
              key={link.image}
              title={link.title}
              subtitle={link.subtitle}
              price={link.price}
              image={link.image}
              link={link.link}
            />
          ))}
      </div>
      <div className={classes.seemore}>
        <a href={home} target="_blank" rel="noopener noreferrer">
          Ver más opciones en {name}
        </a>
      </div>
      <div className={classes.separator}></div>
    </div>
  );
};

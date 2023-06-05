import classes from "./Product.module.css";
export const Product = ({ title, subtitle, price, image, link }) => {
  return (
    <>
      <a
        href={link}
        className={classes.card}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={classes["card-text"]}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h1>$ {price}</h1>
        </div>
      </a>
    </>
  );
};

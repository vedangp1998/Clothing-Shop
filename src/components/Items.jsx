const Items = ({ image, title, description, price }) => {
  return (
    <>
      <section>
        <img src={image} alt="Product" />
        <p>{title}</p>
        <p>{price} $</p>
        <p>{description}</p>
      </section>
    </>
  );
};

export default Items;

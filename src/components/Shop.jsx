const Shop = ({ children }) => {
  return (
    <>
      <section className="">
        <p className="font-serif ... text-custom-500">
          ELEGENT CLOTHING FOR EVERYONE
        </p>
        <ul className="flex flex-wrap gap-8 justify-center items-center">
          {children}
        </ul>
      </section>
    </>
  );
};

export default Shop;

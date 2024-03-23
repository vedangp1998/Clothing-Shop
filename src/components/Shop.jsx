import Items from "./Items";

const Shop = ({ data }) => {
  return (
    <>
      <section>
        <div>
          <p className="font-serif ... text-custom-500">
            ELEGENT CLOTHING FOR EVERYONE
          </p>
        </div>

        {data.map((dummyData) => {
          return (
            <li>
              <Items
                key={dummyData.id}
                image={dummyData.image}
                title={dummyData.title}
                description={dummyData.description}
                price={dummyData.price}
              />
            </li>
          );
        })}
      </section>
    </>
  );
};

export default Shop;

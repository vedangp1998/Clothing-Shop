import Header from "./components/Header";
import Shop from "./components/Shop";
import DUMMYDATA from "../dummy-products";

const App = () => {
  return (
    <>
      <div>
        <section>
          <Header />
        </section>
        <section>
          <Shop data={DUMMYDATA} />
        </section>
      </div>
    </>
  );
};

export default App;

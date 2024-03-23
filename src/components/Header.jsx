import Logo from "/logo.png";

const Header = () => {
  return (
    <section className="flex justify-around m-4 items-center">
      <div className="flex items-center gap-4">
        <img className="h-20 w-20" src={Logo} alt="Logo" />
        <span className="font-serif ... text-4xl font-medium text-amber-900 text-custom-100">
          ELEGANT CONTEXT
        </span>
      </div>
      <button className=" px-6 py-2 rounded-md  text-custom-400 bg-custom-100">
        Cart ${`0`}
      </button>
    </section>
  );
};

export default Header;

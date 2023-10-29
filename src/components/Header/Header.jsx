import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 lg:p-7 flex items-center justify-between z-10 ">
      <section>
        <Link to={"/"}>Anine</Link>
      </section>
      <section>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Categories</Link>
        </nav>
      </section>
      <section></section>
    </header>
  );
};

export default Header;

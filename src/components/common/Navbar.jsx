const Navbar = ({ page, setPage }) => {
  const navs = ["About", "Resume", "Skills", "Portfolio", "Contact"];
  return (
    <ul className=" flex flex-wrap justify-center items-center gap-4 md:gap-8">
      {navs?.map((item) => (
        <li
          key={item}
          className={` font-semibold text-[15px] hover:text-primary  duration-300 ${
            page === item ? " text-primary duration-300" : ""
          }`}
        >
          <button onClick={() => setPage(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

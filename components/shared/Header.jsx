import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-5 container">
        <h3 className="text-3xl font-bold">
          <Link href="/">WildLife Ledger</Link>
        </h3>

        <ul className="text-xl font-medium">
          <li>
            <Link href="/" className="hover:text-sky-400 duration-300">
              Hello, HR
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

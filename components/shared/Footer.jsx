import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center py-10">
      &copy; {new Date().getFullYear()} All Right Reserved —{" "}
      <Link href="/" className="hover:text-sky-400 duration-300">
        WildLife Ledger
      </Link>
      .
    </footer>
  );
};

export default Footer;

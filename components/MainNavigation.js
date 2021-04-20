import Link from "next/link";

const MainNavigation = () => {
  return (
    <ul className="items-center hidden space-x-2 text-sm font-bold tracking-wide text-gray-700 md:space-x-4 md:text-xl md:flex">
      <li className="">
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Información</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Acerca</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Contacto</a>
        </Link>
      </li>
    </ul>
  );
};

export default MainNavigation;

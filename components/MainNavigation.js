import { useState } from "react";
import NavItem from "./NavItem";

const MainNavigation = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ul className="items-center hidden space-x-2 text-sm font-bold tracking-wide text-gray-700 md:space-x-4 md:text-xl md:flex">
      <NavItem href="http://www.etecsa.cu" isActive={isActive}>
        Inicio
      </NavItem>
      <NavItem href="http://www.etecsa.cu/inicio/" isActive={isActive}>
        Información
      </NavItem>
      <NavItem href="http://www.etecsa.cu/inicio/" isActive={isActive}>
        Acerca
      </NavItem>
      <NavItem href="http://www.etecsa.cu/inicio/" isActive={isActive}>
        Contacto
      </NavItem>
    </ul>
  );
};

export default MainNavigation;

export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <a
        href={href}
        className={`block px-2 py-1 rounded-md hover:bg-brand-500 hover:text-white ${
          isActive ? " bg-brand-500 text-white" : " "
        }`}
      >
        {children}
      </a>
    </li>
  );
}

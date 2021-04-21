import Socials from "@/components/socials/Socials";
import Logo from "@/components/logo/Logo";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-3 mx-6 opacity-90 md:mx-20 lg:mx-40">
      <div className="text-[#374151] flex">
        <Logo logoH={25} logoW={25} fillCurrent="fill-current" />
        <span className="inline mx-3">© {new Date().getFullYear()} </span>
      </div>
      <Socials iconsH={25} iconsW={25} color="#374151" />
    </footer>
  );
};

export default Footer;

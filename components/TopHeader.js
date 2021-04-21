// Components
import Logo from "@/components/logo/Logo";
import MainNavigation from "./MainNavigation";
import Socials from "./socials/Socials";
const TopHeader = () => {
  return (
    <header className="flex items-center justify-between py-3 mx-6 opacity-90 md:mx-20 lg:mx-40">
      <div className="text-blue-800">
        <Logo logoH="45" logoW="45" fillCurrent="fill-current" />
      </div>
      <MainNavigation />
      <Socials iconsH={35} iconsW={35} color="#3553B7" />
    </header>
  );
};

export default TopHeader;

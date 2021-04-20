// Components
import Logo from "@/components/logo/Logo";
import MainNavigation from "./MainNavigation";
import Socials from "./socials/Socials";
const TopHeader = () => {
  return (
    <header className="flex items-center justify-between py-3  opacity-90 md:mx-20 lg:mx-40">
      <div className="text-blue-800">
        <Logo fillCurrent="fill-current" />
      </div>
      <MainNavigation />
      <Socials />
    </header>
  );
};

export default TopHeader;

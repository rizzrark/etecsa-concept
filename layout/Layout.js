import Search from "@/components/Search";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mx-6 mt-20 md:mx-20 lg:mx-40">{children}</main>
    </>
  );
};

export default Layout;

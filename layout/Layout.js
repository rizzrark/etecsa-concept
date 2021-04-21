import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
const Layout = ({ children }) => {
  return (
    <>
      <main className="min-h-screen m-1 bg-white sm:m-5 rounded-3xl ">
        <div className="border-b-2 boder-[#EFF1F7]">
          <TopHeader />
        </div>
        <div className="mx-6 my-4 md:mx-20 lg:mx-24 xl:mx-40">{children}</div>

        <div className="border-t-2 boder-[#EFF1F7]">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;

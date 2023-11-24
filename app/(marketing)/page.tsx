import Footer from "./_components/footer.component";
import Heading from "./_components/heading.component";
import Heroes from "./_components/heroes.component";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      <div
        className="flex flex-col items-center justify-center
        md:justify-start text-center gap-y-8 flex-1 px-6 pb-10"
      >
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;

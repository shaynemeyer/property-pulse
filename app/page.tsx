import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import { fetchProperties } from "@/utils/requests";

const HomePage = async () => {
  const properties = await fetchProperties();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};
export default HomePage;

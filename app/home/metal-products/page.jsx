import BroadRange from "./broadRange/broadRange";
import IronProduct from "./ironProduct/ironProduct";
import MetalInformation from "./metalInformation/MetalInformation";
import MetalsHomePage from "./MetalsHome/MetalsHome";
import CardsMetalsPage from "./productMetals/productMetals";
import SellingProducts from "./sellingProducts/sellingProducts";

function MetalProductpage() {
  return (
    <>
    <MetalsHomePage/>
    <CardsMetalsPage/>
    <IronProduct/>
    <BroadRange/>
    <SellingProducts/>
    <MetalInformation/>
    </>
  );
}
export default MetalProductpage;

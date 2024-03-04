import { lazy } from "react";

const WarehouseBlock = lazy(() => import("../../components/WarehouseBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Warehouse = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <WarehouseBlock id={"warehouse"}/>
    </Container>
  );
};

export default Warehouse;

import { lazy } from "react";

const DatenschutzBlock = lazy(() => import("../../components/DatenschutzBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Datenschutz = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <DatenschutzBlock id={"datenschutz"}/>
    </Container>
  );
};

export default Datenschutz;

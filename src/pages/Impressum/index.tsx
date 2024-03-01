import { lazy } from "react";

const ImpressumBlock = lazy(() => import("../../components/ImpressumBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Impressum = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <ImpressumBlock id={"impressum"}/>
    </Container>
  );
};

export default Impressum;

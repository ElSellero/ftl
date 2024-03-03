import { lazy } from "react";

const ImpressumBlock = lazy(() => import("../../components/ImpressumBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Customs = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <ImpressumBlock id={"customs"}/>
    </Container>
  );
};

export default Customs;

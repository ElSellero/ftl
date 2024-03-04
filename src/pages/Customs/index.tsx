import { lazy } from "react";

const CustomsBlock = lazy(() => import("../../components/CustomsBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Customs = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <CustomsBlock id={"customs"}/>
    </Container>
  );
};

export default Customs;

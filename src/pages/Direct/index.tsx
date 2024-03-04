import { lazy } from "react";

const DirectBlock = lazy(() => import("../../components/DirectBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Direct = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <DirectBlock id={"direct"}/>
    </Container>
  );
};

export default Direct;

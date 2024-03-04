import { lazy } from "react";

const ContactBlock = lazy(() => import("../../components/ContactBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Contact = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <ContactBlock id={"contact"}/>
    </Container>
  );
};

export default Contact;

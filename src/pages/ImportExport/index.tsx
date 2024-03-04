import { lazy } from "react";

const ImportExportBlock = lazy(() => import("../../components/ImportExportBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const ImportExport = () => {
  
  return (
    <Container>
      <ScrollToTop />
      <ImportExportBlock id={"importExport"}/>
    </Container>
  );
};

export default ImportExport;

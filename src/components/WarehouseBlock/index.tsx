import { lazy } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import ImportExportContentDe from '../../content/ImportExportContentDe.json';


interface WarehouseBlockProps {
  id?: string;
  t: any;
}

const WarehouseBlock = ({ id }: WarehouseBlockProps) => {
  const { t } = useTranslation();
  const ContentBlock = lazy(() => import('../../components/ContentBlock'));

  return (
    // <ContentBlock
    // type='left'
    // title={t('Zollmanagement')}
    // content={t('AboutContent')}
    // section={ImportExportContentDe.section}
    // icon='../png/stock3.png'
    // iconType='png'
    // id='about'
    // size='100%'
    // />
    <></>
  );
};

export default withTranslation()(WarehouseBlock);

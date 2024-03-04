import { lazy } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import AboutContentDe from '../../content/AboutContentDe.json';


interface ImportExportBlockProps {
  id?: string;
  t: any;
}

const ImportExportBlock = ({ id }: ImportExportBlockProps) => {
  const { t } = useTranslation();
  const ContentBlock = lazy(() => import('../../components/ContentBlock'));

  return (
    // <ContentBlock
    // type='left'
    // title={t('Zollmanagement')}
    // content={t('AboutContent')}
    // section={AboutContentDe.section}
    // icon='../png/stock3.png'
    // iconType='png'
    // id='about'
    // size='100%'
    // />
    <></>
  );
};

export default withTranslation()(ImportExportBlock);

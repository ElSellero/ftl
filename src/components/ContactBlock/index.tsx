import { lazy } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import ImportExportContentDe from '../../content/ImportExportContentDe.json';


interface ContactBlockProps {
  id?: string;
  t: any;
}

const ContactBlock = ({ id }: ContactBlockProps) => {
  const { t } = useTranslation();
  const ContentBlock = lazy(() => import('../../components/ContentBlock'));

  return (
    // <ContentBlock
    // type='left'
    // title={t('Zollmanagement')}
    // content={t('ImportExportContent')}
    // section={ImportExportContentDe.section}
    // icon='../png/stock3.png'
    // iconType='png'
    // id='about'
    // size='100%'
    // />
    <></>
  );
};

export default withTranslation()(ContactBlock);

import { lazy } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import ImportExportContentDe from '../../content/ImportExportContentDe.json';


interface ImportExportBlockProps {
  id?: string;
  t: any;
}

const ImportExportBlock = ({ id }: ImportExportBlockProps) => {
  const { t } = useTranslation();
  const ContentBlock = lazy(() => import('../../components/ContentBlock'));

  return (
    <ContentBlock
      type='right'
      title={t('Im- und Export')}
      content={t('ImportExportContent')}
      contentSpecialColor
      section={ImportExportContentDe.section}
      icon='../png/stock2.png'
      iconType='png'
      id='about'
      size='100%'
    />
  );
};

export default withTranslation()(ImportExportBlock);

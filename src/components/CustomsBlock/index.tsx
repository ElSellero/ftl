import { lazy } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import ImportExportContentDe from '../../content/ImportExportContentDe.json';
import { ListBlockObject, ListObject } from '../ContentBlock/types';


interface CustomsBlockProps {
  id?: string;
  t: any;
}

const CustomsBlock = ({ id }: CustomsBlockProps) => {
  const { t } = useTranslation();
  const ContentBlock = lazy(() => import('../../components/ContentBlock'));
  const customsListObject: ListBlockObject[] = [
    {
      id: '1',
      title: 'Ausfuhrzollabfertigungen, z. B.',
      content: ['Ausfuhrbegleitdokumente (auch nachträglich)','Warenverkehrsbescheinigungen (EUR.1, AT.R)','Warengestellung vor Ort (am Amtsplatz)','Versandverfahren (z. B. T1, T2, T-)'],
      type: 'ListBlockObject'
    },
    {
      id: '2',
      title: 'Einfuhrzollabfertigungen, z. B.',
      content: ['Normalverfahren Einzelzollanmeldung', 'Veredelungsverkehr', 'Rückwarenabfertigung'],
      type: 'ListBlockObject'
    },
    {
      id: '3',
      title: 'Antragsverfahren, z. B.',
      content: ['Unterstützung bei Bewilligungsanträgen'],
      type: 'ListBlockObject'
    },
    {
      id: '4',
      title: 'Schulungen, z. B.',
      content: ['Incoterms, Frankaturen', 'Warenursprung- und Präferenzen'],
      type: 'ListBlockObject'
    }
  ] 
  return (
    <ContentBlock
      type='left'
      title={t('Zollmanagement')}
      content={t('')}
      icon='../png/stock1.png'
      iconType='png'
      id='about'
      size='100%'
      isList={customsListObject}
    />
  );
};

export default withTranslation()(CustomsBlock);

import { lazy } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { ListObject } from '../ContentBlock/types';


interface WarehouseBlockProps {
  id?: string;
  t: any;
}

const WarehouseBlock = ({ id }: WarehouseBlockProps) => {
  const { t } = useTranslation();
  const ContentBlock = lazy(() => import('../../components/ContentBlock'));
  const warehouseListObject: ListObject[] = [
    {
      id: '1',
      title: 'kurz- und langfristige Einlagerungen',
      type: 'ListObject'
    },
    {
      id: '2',
      title: 'Umladungen und Zwischenlagerungen',
      type: 'ListObject'
    },
    {
      id: '3',
      title: 'Zollguteinlagerungen',
      type: 'ListObject'
    }
  ] 

  return (
    <ContentBlock
      type='right'
      title={t('Lagerlogistik')}
      content={t('WarehouseContent')}
      icon='../png/stock5.png'
      iconType='png'
      id='about'
      size='100%'
      isList={warehouseListObject}
    />
  );
};

export default withTranslation()(WarehouseBlock);

import { lazy } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { ListObject } from '../ContentBlock/types';


interface DirectBlockProps {
  id?: string;
  t: any;
}

const DirectBlock = ({ id }: DirectBlockProps) => {
  const { t } = useTranslation();
  const ContentBlock = lazy(() => import('../../components/ContentBlock'));

  const directListObject: ListObject[] = [
    {
      id: '1',
      title: 'regional',
      type: 'ListObject'
    },
    {
      id: '2',
      title: 'national',
      type: 'ListObject'
    },
    {
      id: '3',
      title: 'europaweit',
      type: 'ListObject'
    },
    {
      id: '4',
      title: 'international (On-Board-Service)',
      type: 'ListObject'
    }
  ] 

  return (
    <ContentBlock
      type='left'
      title={t('Direktfahrten')}
      content={t('DirectContent')}
      icon='../png/stock5.png'
      iconType='png'
      id='about'
      isList={directListObject}
      size='100%'
    />
  );
};

export default withTranslation()(DirectBlock);

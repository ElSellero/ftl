import { Col, Row } from 'antd';
import { withTranslation } from 'react-i18next';
import Block from '../Block';
import { ContentWrapper, Empty, TextBlock, TextBlockBold } from './styles';

interface ImpressumBlockProps {
  id?: string;
  t: any;
}

const ImpressumBlock = ({ id }: ImpressumBlockProps) => {
  return (
    <ContentWrapper>
      <Row justify='space-between' align='middle' id={id}>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Block title='Impressum' />
        </Col>
      </Row>
      <Row justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <TextBlockBold>Verantwortlich für den Inhalt</TextBlockBold>
          <TextBlock>FTL - Freiburger Transport Logistik GbR</TextBlock>
          <TextBlock>Carl-Zeiss-Straße 7</TextBlock>
          <TextBlock>DE-79331 Teningen</TextBlock>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <TextBlock>Sitz der Gesellschaft: Teningen</TextBlock>
          <TextBlockBold>Geschäftsführung:</TextBlockBold>
          <TextBlock>Antje Männecke (Gesellschafterin)</TextBlock>
          <TextBlock>Peter Stump (Gesellschafter)</TextBlock>
          <TextBlock>USt-IdNr.: DE273195753</TextBlock>
        </Col>
      </Row>
      <Row justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <TextBlockBold>Haftungsbeschränkung</TextBlockBold>
          <TextBlock>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
            erstellt. Der Autor übernimmt jedoch keine Gewähr für die
            Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
            Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene
            Gefahr des Nutzers. Haftungsansprüche gegen den Autor, welche sich
            auf Schäden materieller oder ideeller Art beziehen, die durch die
            Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch
            die Nutzung fehlerhafter und unvollständiger Informationen
            verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens
            des Autors kein nachweislich vorsätzliches oder grob fahrlässiges
            Verschulden vorliegt. Alle Angebote sind freibleibend und
            unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
            Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu
            verändern, zu ergänzen, zu löschen oder die Veröffentlichung
            zeitweise oder endgültig einzustellen. Namentlich gekennzeichnete
            Beiträge geben die Meinung des jeweiligen Autors und nicht immer die
            Meinung des Autors wieder. Mit der reinen Nutzung der Website des
            Autors kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und
            dem Autor zustande.
          </TextBlock>
          <Empty />
          <TextBlockBold>Externe Links</TextBlockBold>
          <TextBlock>
            Diese Website enthält Verknüpfungen zu Websites Dritter ("externe
            Links"). Diese Websites unterliegen der Haftung der jeweiligen
            Betreiber. Der Autor hat bei der erstmaligen Verknüpfung der
            externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
            Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
            ersichtlich. Der Autor hat keinerlei Einfluss auf die aktuelle und
            zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten.
            Das Setzen von externen Links bedeutet nicht, dass sich der Autor
            die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht.
            Eine ständige Kontrolle der externen Links ist für den Autor ohne
            konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis
            von Rechtsverstößen werden jedoch derartige externe Links
            unverzüglich gelöscht.
          </TextBlock>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Empty />
          <TextBlockBold>Urheber- und Leistungsschutzrechte</TextBlockBold>
          <TextBlock>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            deutschen Urheber- und Leistungs- schutzrecht. Jede vom deutschen
            Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
            bedarf der vorherigen schriftlichen Zustimmung des Autors oder
            jeweiligen Rechteinhabers. Dies gilt ins-besondere für
            Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
            Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
            anderen elektronischen Medien und Systemen. Inhalte und Rechte
            Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
            Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
            Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
            von Kopien und Downloads für den persönlichen, privaten und nicht
            kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website
            in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
          </TextBlock>
          <Empty />
          <TextBlockBold>Datenschutz</TextBlockBold>
          <TextBlock>
            Durch den Besuch der Website des Autors können Informationen über
            den Zugriff (Datum, Uhrzeit, betrachtete Seite) gespeichert werden.
            Diese Daten gehören nicht zu den personenbezogenen Daten, sondern
            sind anonymisiert. Sie werden ausschließlich zu statistischen
            Zwecken ausgewertet. Eine Weitergabe an Dritte, zu kommerziellen
            oder nicht-kommerziellen Zwecken, findet nicht statt. Der Autor
            weist ausdrücklich darauf hin, dass die Datenübertragung im Internet
            (z. B. bei der Kommunikation per e-Mail) Sicherheitslücken aufweisen
            und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden
            kann. Die Verwendung der Kontaktdaten des Impressums zur
            gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn
            der Autor hatte zuvor seine schriftliche Einwilligung erteilt oder
            es besteht bereits eine Geschäftsbeziehung. Der Autor und alle auf
            dieser Website genannten Personen widersprechen hiermit jeder
            kommerziellen Verwendung und Weitergabe ihrer Daten.
          </TextBlock>
          <Empty />
          <TextBlockBold>Besondere Nutzungsbedingungen</TextBlockBold>
          <TextBlock>
            Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
            von den vorgenannten Punkten abweichen, wird an entsprechender
            Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im
            jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
          </TextBlock>
        </Col>
      </Row>
      <Empty />
      <Empty />
      <Empty />
    </ContentWrapper>
  );
};

export default withTranslation()(ImpressumBlock);

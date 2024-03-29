import { withTranslation } from 'react-i18next';

interface DatenschutzBlockProps {
  id?: string;
  t: any;
}

const DatenschutzBlock = ({ id }: DatenschutzBlockProps) => {
  return (
    <></>
    // <div id={id}>
    //   <p>
    //     <strong>Datenschutzerklärung</strong>
    //   </p>
    //   <p>
    //     <p>
    //       In dieser Datenschutzerklärung informieren wir Sie über die
    //       Verarbeitung personenbezogener Daten bei der Nutzung dieser Website.
    //     </p>
    //     <p>
    //       <strong>Verantwortlicher</strong>
    //     </p>
    //     <p>
    //       Verantwortlich für die Datenverarbeitung ist
    //       <br />
    //       <em>
    //         Name, Adresse, Telefonnummer und E-Mail-Adresse des
    //         Websitebetreibers ergänzen
    //       </em>
    //     </p>
    //     <p>
    //       <strong>Datenschutzbeauftragter</strong>
    //     </p>
    //     <p>
    //       <em>
    //         Die Angabe ist nur erforderlich bei Pflicht zur Bestellung eines
    //         Datenschutzbeauftragten. Diese besteht in folgenden Fällen:
    //       </em>
    //     </p>
    //     <ul>
    //       <li>
    //         <em>
    //           Im Unternehmen verarbeiten mindestens 10 Mitarbeiter regelmäßig
    //           automatisiert Daten wie z. B. mit Computern.
    //         </em>
    //       </li>
    //       <li>
    //         <em>
    //           Im Unternehmen verarbeiten Sie unabhängig von der Mitarbeiterzahl
    //           mindestens eine Kategorie folgender personenbezogener Daten:
    //           ethnische Herkunft, Rasse, politische Meinung, religiöse
    //           Überzeugung, Gewerkschaftszugehörigkeit, Gesundheit oder
    //           Sexualleben
    //         </em>
    //       </li>
    //       <li>
    //         <em>
    //           Mittelpunkt der Geschäftstätigkeit ist die Übermittlung
    //           personenbezogener Daten wie sie z. B. eine Auskunftei, ein
    //           Adressverlag oder ein Markt- und Meinungsforschungsinstitut
    //           ausübt.
    //         </em>
    //       </li>
    //     </ul>
    //     <p>
    //       Der Datenschutzbeauftragte ist unter der Adresse des Verantwortlichen
    //       zu erreichen. Bitte ergänzen Sie die Adresse bei der Kontaktaufnahme
    //       per Post mit dem Hinweis "Datenschutzbeauftragter". Per E-Mail
    //       erreichen Sie unseren Datenschutzbeauftragten über die folgende
    //       E-Mail-Adresse:{' '}
    //       <em>E-Mail-Adresse des Datenschutzbeauftragten einfügen</em>
    //     </p>
    //     <p>
    //       <strong>Personenbezogene Daten</strong>
    //     </p>
    //     <p>
    //       Personenbezogene Daten sind alle Informationen, die sich auf eine
    //       identifizierte oder identifizierbare natürliche Person (im Folgenden
    //       "betroffene Person") beziehen. Als identifizierbar wird eine
    //       natürliche Person angesehen, die direkt oder indirekt, insbesondere
    //       mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
    //       Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem
    //       oder mehreren besonderen Merkmalen identifiziert werden kann, die
    //       Ausdruck der physischen, physiologischen, genetischen, psychischen,
    //       wirtschaftlichen, kulturellen oder sozialen Identität dieser
    //       natürlichen Person sind.
    //     </p>
    //     <p>
    //       <strong>Daten beim Websiteaufruf</strong>
    //     </p>
    //     <p>
    //       Wenn Sie diese Website nur nutzen, um sich zu informieren und keine
    //       Daten angeben, dann verarbeiten wir nur die Daten, die zur Anzeige der
    //       Website auf dem von Ihnen verwendeten internetfähigen Gerät
    //       erforderlich sind. Das sind insbesondere:
    //     </p>
    //     <ul>
    //       <li>IP-Adresse</li>
    //       <li>Datum und Uhrzeit der Anfrage</li>
    //       <li>jeweils übertragene Datenmenge</li>
    //       <li>die Website, von der die Anforderung kommt</li>
    //       <li>Browsertyp und Browserversion</li>
    //       <li>Betriebssystem</li>
    //     </ul>
    //     <p>
    //       Rechtsgrundlage für die Verarbeitung dieser Daten sind berechtigte
    //       Interessen gemäß Art. 6 Abs. 1 UAbs. 1 Buchstabe f) DSGVO, um die
    //       Darstellung der Website grundsätzlich zu ermöglichen.
    //     </p>
    //     <p>
    //       Darüber hinaus können Sie verschiedene Leistungen auf der Website
    //       nutzen, bei der weitere personenbezogene und nicht personenbezogene
    //       Daten verarbeitet werden.
    //     </p>
    //     <p>
    //       <strong>Ihre Rechte</strong>
    //     </p>
    //     <p>Als betroffene Person haben Sie folgende Rechte:</p>
    //     <ul>
    //       <li>
    //         Sie haben ein Auskunftsrecht bezüglich der Sie betreffenden
    //         personenbezogenen Daten, die der Verantwortliche verarbeitet (Art.
    //         15 DSGVO),
    //       </li>
    //       <li>
    //         Sie haben das Recht auf Berichtigung der Sie betreffenden Daten,
    //         wenn diese unrichtig oder unvollständig gespeichert werden (Art. 16
    //         DSGVO),
    //       </li>
    //       <li>Sie haben das Recht auf Löschung (Art. 17 DSGVO),</li>
    //       <li>
    //         Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
    //         personenbezogenen Daten zu verlangen (Art. 18 DSGVO),
    //       </li>
    //       <li>Sie haben das Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</li>
    //       <li>
    //         Sie haben ein Widerspruchsrecht gegen die Verarbeitung Sie
    //         betreffender personenbezogener Daten (Art. 21 DSGVO),
    //       </li>
    //       <li>
    //         Sie haben das Recht nicht einer ausschließlich auf einer
    //         automatisierten Verarbeitung – einschließlich Profiling – beruhenden
    //         Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche
    //         Wirkung entfaltet oder sie in ähnlicher Weise erheblich
    //         beeinträchtigt (Art. 22 DSGVO),
    //       </li>
    //       <li>
    //         Sie haben das Recht, sich bei einem vermuteten Verstoß gegen das
    //         Datenschutzrecht bei der zuständigen Aufsichtsbehörde zu beschweren
    //         (Art. 77 DSGVO). Zuständig ist die Aufsichtsbehörde an Ihrem
    //         üblichen Aufenthaltsort, Arbeitsplatz oder am Ort des vermuteten
    //         Verstoßes.
    //       </li>
    //     </ul>
    //     <p>
    //       <br />
    //     </p>
    //   </p>
    //   <p>
    //     Quelle:{' '}
    //     <a
    //       href='https://www.anwalt.de/vorlage/muster-datenschutzerklaerung.php'
    //       rel='nofollow'
    //     >
    //       Muster-Datenschutzerklärung von anwalt.de
    //     </a>
    //   </p>
    // </div>
  );
};

export default withTranslation()(DatenschutzBlock);

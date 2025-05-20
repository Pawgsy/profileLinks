# Linkprofil

a small Prototype of the Profile Link Page in Plain HTML, JS &amp; CSS
as Project for the DAA HTML Course

## Draft German Umriss

eine kleine Profilartige Seite die Links zu einer bestimmten Person o.Ä enthält

als Entwurf für eine Seite die ich schon immer erstellen wollte
dann in ein Framework auseinanderpflücken kann um sie dynamisch zu befüllen

Also, das ganze soll eine Seite werden, die Alle oder die meisten meiner Social Links enthält und orientiert sich an solchen SaaS Lösungen wie Linktree oder bitly-Pages (zumindest um den aktuellen Zeitpunkt herum 19.05.2025)

als Blob im Javascript hardcoded (später als externe Datei) sodass es irgendwann als JSON eingespeißt werden kann

Reihenfolge wie sie mir einfällt, später sortiert mit Bubblesort an nachträglich zugewiesenem index

Code eventuell später noch als externe JS und externe CSS

nicht weniger und nicht mehr

grober Umriss der zu schreibenden Dokumentation:

- Einleitung
- Planung / Durchführung
- Schwierigkeiten / Herausforderungen
- Ausblick
- Fazit

## Projektdokumentation

### Einleitung

Die keine Ahnung GmbH möchte ihren Mitarbeitern die Möglichkeit geben sich auch außerhalb der Arbeit sozialisieren zu können. Hierzu wurde der Ansatz einer Möglichkeit externe Wege die im Privatnutzungssektor schon vorhanden sind mit etwaigen Verbindungen zu füllen.
Kurz gesagt ging die Lösung auf ein Textdokumentartiges Verfahren hinaus, in dem die Mitarbeiter die Verlinkungen zu ihren externen Kanälen im Intranet des Unternehmens selbst freigeben und kontrollieren können.
Guter Teamgeist wächst nicht nur innerhalb der Arbeit.
Nun wurde unsere Expertise beauftragt diese simple aber wirkungsvolle Umsetzung des genannten Konzepts vorzunehmen.

### Planung

Geplant ist ein HTML Dokument als Vorlage zu erstellen in das alle Mitarbeiter sehr einfach ihre eigenen Dinge hinzufügen können.
Ein Word Dokument kam aufgrund des Overheads und die propitäre Weise der Speicherung für die Zukunftsfähigkeit nicht in frage.
Jeder Mitarbeiter erhält Zugriff auf das in seinem Nutzerordner befindliche Verzeichnis "Mitarbeiterseite" in dem eine HTML und eine JSON oder Text Datei vorgesehen sind.
Hier werden Zeilen / Inhaltsabhängig die Werte welche später auf der eigentlichen Erreichbarkeit im Browser abrufbar seien sollen abgespeichert.
Die Vorlage wird übergeordnet auf einem dafür eingerichteten Webserver gelagert und greift dynamisch auf die jeweilige Mitarbeiterdatei zu und ließt die Daten zum weiterleiten auf die externen Seiten ein.
Der Webserver bekommt die benötigten Dateien in einem Verzeichnis freigestellt von Unzulässigkeiten und deanonym zu den Mitarbeitern bereitgestellt.
Mitarbeitern die mit der Textverarbeitung Probleme haben wird eine Hilfestellung angeboten.

### Herausforderungen

Geplant war es eine self-contained HTML Seite zu machen, die keinerlei Einbindungen externer Seiten/Dokumente enthält und diese als Basis zu verwenden um dann weitere Dinge hinzuzufügen die im Unterrricht besprochen wurden.

*Stattdessen:*
Geschah das Unverhoffte... beim Beginn des Schreibens der ersten Zeilen Code war nach der Emmet Abbr für HTML mit ! ein Codevorschlag zu sehen, der mein Interesse weckte...
Ich hatte bei meinem letzten Start/Reset/Settings-Sync/Clear von VS-Code aus irgendeinem Grund das Häkchen für die Copilot Autocompletion vergessen.

Somit wurden mir direkt Codebeispiele im Editor angezeigt die in die grobe Richtung gingen die ich sowieso einschlagen wollte.

Ein paar Zeilen Code meinerseits kam der nächste äußerst brauchbare Codevorschlag zurück.

Ab dem Punkt war's vorbei - ich hab's zum ersten Mal benutzt und es war für das Projekt, von dem ich schon den Code kannte bzw. die nächsten Zeilen gedacht aber noch nicht geschrieben hatte... unbeschreiblich.

Selbst Korrekturen in die Richtung in die ich mich bewegen wollte waren nur minimal von nöten... zu welcher Zeile Code ich mich hinbewegte um die nächsten Zeilen zu schreiben, mein Copilot war bei mir und gab mir entweder den Vorschlag den ich haben wollte oder eine sinnvolle Ergänzung, die mir auch noch nicht klar war oder ich nie in diesem Rahmen bemerkt hatte.

Ich erwischte mich allzu oft dabei, den Code des Copilot eher zu analysieren, als wie passend ich ihn empfand, was ich aus diesem lernen kann und ob er den gewünschten Effekt besser erzielt als der Lösungsansatz den ich selbst erdacht hatte.

### Ausblick

Ich werde das Ganze wieder verwenden, definitiv - weiter ausprobieren - vielleicht erwäge ich in Zukunft auch, dass hier eher Schaden als Nutzen angerichtet wird, oder der Sprung zu komplexen Zusammenhängen doch noch zu groß für etwaige Modelle ist und der aktuelle Stand als Sweet-Spot angesehen werden kann.

### Fazit

Es ist äußerst angenehm zu wissen was man tuen will und dies dann nicht selbst in die Tasten hauen zu müssen, ich kann dieses Gefühl nicht beschreiben, es ist etwas Anderes als die Einbindung und Nutzung einer Bibliothek, als das Hebeln durch ein Framework und auch was Anderes als sich an jegliche Dateinamen, Einbindungen und Ressourcenbezeichnungen erinnern zu müssen die man selbst gewählt hat.
Der Copilot weiß schon welche Daten ich wo abfragen, hinschieben und verarbeiten will, der Weg ist schon vorhanden, er muss nur erst gedacht werden.

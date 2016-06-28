Hero Manager
ES6 Project

Samenvatting:

Heromanager is een online spel dat speelt als een langdurige turn-based RPG.
De speler maakt een held aan, die een aantal vaardigheden en voorwerpen heeft. De held doet dingen per beurt, maar elke beurt duurt één hele dag. Jij bepaalt dus waar jouw held zich vandaag mee bezig houdt, en hij schrijft alles op in zijn logboek die je morgen kan lezen.

Je kunt bijvoorbeeld je held de hele dag laten vissen, of voorwerpen verzamelen in een gebied (besjes, stenen, etc.). Of je kun hem laten jagen, hout hakken, of zelfs een gevaarlijke grot insturen.

Je held word langzaam beter in de dingen die hij doet. Laat je hem veel hout hakken, dan zal zijn “woodcutting” skill omhoog gaan. Ook zal hij uiteraard sterker worden. Laat je hem jagen, dan word hij beter in het vinden van wilde dieren, en zal hij beter worden in vechten. Laat je hem zakenrollen in de stad, dan word hij beter in stilletjes lopen, en in stelen. En hij loopt het risico naar de gevangenis gestuurd te worden, waar hij een aantal dagen zal moeten blijven.

Je kunt in steden je spullen verkopen en nieuwe spullen kopen. Je verplaatst je door de wereld door je beurt te gebruiken om naar het noorden, oosten, westen of zuiden te lopen. Ook dit kost dus een dag.

Uiteraard is de wereld niet zonder gevaar; Wanneer je je held laat vechten, bestaat het risico dat hij doodgaat. Wanneer een held sterft, komt hij niet terug. Gelukkig mag je altijd een nieuwe held maken.

Wat is er al?
Het spel is verdeeld in twee delen;
Gameplay en mechanics simuleren
Interface voor de gebruiker

De eerste is er al. De wereld bestaat al, de helden kunnen al op avontuur, en er zijn al een aantal gebieden aangemaakt met vijanden, voorwerpen en allerlei dingen om te doen. In principe kan het spel al gespeeld worden.

Dit systeem is gemaakt met PHP en een SQL database. Je kunt altijd je helden ophalen en zien wat ze gedaan hebben, en dit word in JSON of XML op de pagina weergegeven.

Dit huidige systeem is te vinden op:
http://timfalken.com/heromanager/heroes

http://timfalken.com/heromanager/locations

http://timfalken.com/heromanager/users


Wat ga ik maken?
Een JSON/XML overzicht, wat je alleen kan sturen via een webrequest, is niet bepaald gebruiksvriendelijk. Wat ik wil maken is een gebruikersinterface die in een web-browser draait. Dit zal ik uiteraard maken met ES6, wat Babel voor me omzet in iets wat de browser ook nog kan begrijpen.

De taken die ik op dit moment voor me zie:

Duidelijke tekstuele weergave van je held, en alles wat hij kan en bij zich heeft.
Weergave van de wereld om je heen. Waar ben je? Waar kan je naartoe? Wat kun je hier doen?
Doorgeven van acties: Wat gaat mijn held vandaag doen? Dit moet doorgegeven worden aan de backend.
Kopen en verkopen van items staat los van een speler-actie, en moet apart doorgegeven worden.
Aanmaken van Hero, inclusief naam, class en uitrusting.
Duidelijke en overzichtelijke lijst van mogelijke dieren en vijanden in een gebied, die laten zien hoe moeilijk ze zijn om te verslaan.
Logboek van een held weergeven op een manier die duidelijk is voor de speler
IRL tijd tot de volgende beurt begint (optioneel?)

TL;DR:
Wat ik wil maken is een gebruikersinterface voor een spel waar ik aan bezig ben. De backend bestaat wel al, maar alles word aangeleverd in JSON of XML, wat een speler niet zal begrijpen. Ik wil dan die interface bouwen met ES6 voor een webpagina. 
Er bestaan nog geen grafische elementen, en de UI is een project op zich. De code zal in zijn geheel los van de back-end staan die het spel regelt.
Het zal ook mogelijk zijn om de UI alleen ergens anders e hosten, zolang hij een verbinding met de back-end (op timfalken.com) heeft om de helden op te halen en commandos te sturen.

Ontwikkeling aan de UI en aan de back-end zal los van elkaar verlopen. De back-end (PHP & SQL) is daarom ook geen deel van dit project voor de les, en alleen de UI (ES6 & HTML) zal hiervoor bedoeld zijn.
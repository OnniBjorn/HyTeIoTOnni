# IoT


## **Mikä on IoT?**
**I**nternet  **O**f **T**hings eli **IoT** tarkoitetaan laitteita, jotka pystyvät keräämään dataa ympäristöstään ja viestimään älykkäästi. 

IoT tarkoituksena on laajentaa internet yhteyttä puhelimista ja tietokoneista myös esimerkiksi kodinkoneille.

IoT prosessin toimivuuden tärkeimmät osat ovat:
1. **Sensorit/ laitteet**, joiden avulla kerätään dataa.
2. **Liitettävyys**, Laitteet lähettävät datan pilvipalveluun internetin välityksellä.
3. **Datan prosessointi**
4. **Käyttöliittymä**, jonka avulla käyttäjä voi nähdä tuloksia.


Esimerkki: IoT tarjoaa mahdollisuuden kiinteistön seurantaan. 
Lämpötilan tarkkailussa rakennukseen asennetut anturit ja keskusyksikkö yhdistetään IoT:llä kokonaisuudeksi. Yhdistämällä usean kiinteistön lämpötilan seurannan vähennetään kuluja ja päästöt vähenevät.
Muita seurattavia muutoksia voivat olla sähkön kulutus ja kosteus.
Kotien toimintaa voidaan seurata etänä älypuhelimella.
IoT siis tarjoaa mahdollisuuden seurata kodissa tapahtuvia muutoksia.

## **Sääasemajärjestelmän toimintakaavio**

### IoT-järjestelmän rakenne

IoT järjestelmän rakenne alkaa **antureista**, jotka keräävät dataa. Kerätyn tiedon avulla ohjelmoidaan laitteet toimimaan halutulla tavalla. Seuraavaksi on **tietoliikenne**, jonka avulla antureiden tieto viedään pilvipalveluun. Sitten tulee **tietovarastot** ja  **pilvialustat** jonne dataa tallennetaan pilvessä. Viimeisenä tulee **analytiikka**, jossa dataa päästään hyödyntämään.


![sääasema](saasema.png)
1. Photoni ja DHT11 sensori kytketään.
2. Photoni ohjelmoidaan keräämään lämpötila ja ilmankosteus dataa Particle consolessa.
3. Webhookin avulla sääaseman data viedään Azurelle.
4. Rakentamalla Function appin saamme vietyä datan talteen Storage accountille.
5. Function appiin pitää kuitenkin ensin koodata trigger, joka tallentaa datan 
### Laitteisto


### Komponentit
### **Anturit**
Antureita on monenlaisia:

**Kuulevat anturit** nimensä mukaisesti kuulevat ja tunnistavat erillaisia ääniä ja niiden voimakkuutta, sekä taajutta.

- Kuulevilla antureilla voidaan toteutaa esimerkiksi ohjelma, joka tunnistaa aseen laukauksen ja lasin rikkoutumisen. Tällä tiedolla paikalle voidaan lähettää apua.   _(Sallamaari Muhonen, Aistien internet 1.jakso)_
- Hoivakodeissakin voidaan hyödyntää kuulevia antureita yöhoitajien kierroksien sijasta. Hoitajien ei tarvitse käydä jokaisen ovella häiritsemässä unta ja anturit kuulevat kun vanhuksella on joku hätänä.   _(Sallamaari Muhonen, Aistien internet 1.jakso)_
- Kuulevia antureita voi myös asennuttaa tienvarsiin havaitsemaan ohimenevien autojen määrää ja ajoneuvon tyyppiä. _(Aapo Rista, Aistien internet 1.jakso)_
- Huono kuuloisille voisi kehittää sovelluksen, joka tunnistaa kun asunnossa kuuluu ääntä ja havannollistaa sen visuaalisesti tai viestillä. _(Aapo Rista, Aistien internet 1.jakso)_
- Toimistoiden melua voidaan mitata ja datan avulla voidaan määritellä meluisimmat paikat ja päivät. _( Rick Aller, Aistien internet 1.jakso)_

Kuuleva anturi voi tunnistaa käytännössä minkä tahansa äänen. Esimerkiksi linnunlaulun, miehen ja naisen äänen eron ja sanallisen aggresion, kun ihmisen puheentahti kiihtyy ja äänen voimakkuus nousee.

**Tuntevat anturit** havaitsevat esimerkiksi liikettä, painoa, lämpöä ja kosteutta. Kerätyn tiedon avulla voidaan vaikuttaa esimerkiksi lämpötilaan.

- Tuntevia antureita on käytetty esimerkiksi digitaalisessa pillerissä, joka kosteutta mittaavan sensorin avulla kertoo onko potilas ottanut pillerin. _(Sallamaari Muhonen, Aistien internet 2.jakso)_
- Elämien hyvinvointiakin voi seurata tunto sensoreilla, esimerkiksi lehmään kytkettävä sensori seuraa kävelyn määrää ja hännän liikkeitä selvittääkseen lehmän voinnin. _(Sallamaari Muhonen, Aistien internet 2.jakso)_
- Sensoreilla voi myös hyödyntää rahdin sijainnin, kosteudella ja lämpötilalle seurannassa. _(Jukka Kauppinen, Aistien internet 2.jakso)_
- Rakennusten terveyden valvonnassa sensoreita voi hyödyntää esimerkiksi asentamalla kosteuttamittaavia sensoreita puutaloihin seuraamaan rakenteiden terveyttä. _(Sallamaari Muhonen, Aistien internet 2.jakso)_

**Haistavat anturit** tunnistavat niille määrättyjä hajuja esimerkiksi hometta tai kaasun rikkipitoisuuksia. Toisinkuin muut anturit niin Haistavat anturit yhdistävät biologiaa ja elektroniikka. Anturit eivät vielä pysty tunnistaman kaikkia hajuja.

- Haistavilla antureilla tutkitaan merialusten polttoaineden rikkipitoisuutta.  _(Kimmo Salonen, Aistien internet 3.jakso)_
- Tutkitaan koulujen sisäilmaongelmia, jotka voidaan saadulla datalla sitten korjata. _(Tuukka Martikainen, Aistien internet 3.jakso)_
- Anturit voivat havaita homeen myös ennen ihmistä, joka auttaa leviämisen estämisessä. _(Sallamaari Muhonen, Aistien internet 3.jakso)_

**Näkevät anturit** voi nähdä kaiken mitä ihmissilmäkin näkee, eli pystyy erottelemaan värejä. Jotkin anturit voivat nähdä jopa ihmistä laajemmin.

- Näkeviä antureita voidaan hyödyntää esimerkiksi rakennuksien liiketunnistimissa valojen sytyttämiseen ja hälyttää jos tilassa on epäilyttävää liikettä. _(Sallamaari Muhonen, Aistien internet 4.jakso)_
- Niillä voidaan myös tutkia rahtikontin täyttö astettä ja vahtia että tavarat pysyvät kontissa. _(Sallamaari Muhonen, Aistien internet 4.jakso)_
- Kognitiivinen konenäkö oppii toistojen jälkeen tunnistamaan erillaisia virheitä. _(Sallamaari Muhonen, Aistien internet 4.jakso)_
- Robotti imurit hyödyntävät näkö antureita, jotka mallintava imuroitavan huoneen. Ne käyttävät myös infrapunaa apuna huoneen mallintamisessa. _(Sallamaari Muhonen, Aistien internet 4.jakso)_
- Näkevää anturia on hyödynnetty myös robottikoirassa, joka tarkkailee biomassan laatua. _(Sallamaari Muhonen, Aistien internet 4.jakso)_

**DHT11 Sensori**
![DHT11](dht.png)
on edullinen **lämpötilaa** ja **ilmankosteutta** mittaava sensori. Se lähettää kerätyn datan datapinnin kautta esimerkiksi **Photonille** jota käytimme sääasemassa.

### Palvelut
Sääasema hyödyntää Microsoft Azuren pilvipalveluja.

Pilvipalvelujen hyviä puolija ovat joustava resurssien käyttö, tietojen säilyvyys ja helppo käyttöisyys.

Huonoja puolija taas ovatkin tietoturva riskit ja yksityisyyden menettäminen.

## **Käytetyt kehitysympäristöt**



## **Termihakemisto**
DHT11 = Lämpöä ja ilmankosteutta mittaava sensori
Particle Photon = IoT kehityskortti
Webhook = Heti tapahtuva tiedon siirto aplikaatiosta toiselle
Microsoft Azure = Pilvipalvelu
Storage account = Tiedot tallentuvat tänne
JSON = Tiedostomuoto, joka on tarkoitettu tiedonvälitykseen

## **Viitteet**
https://www.guru99.com/iot-tutorial.html
https://fi.wikipedia.org/wiki/Esineiden_internet
https://www.youtube.com/watch?v=nzg_x1-EFpc&list=PLtbOrywM-BA8qzTn5fkzhlcaR3d92HYO7
https://www.youtube.com/watch?v=2p7V_6WzVOw&list=PLtbOrywM-BA8qzTn5fkzhlcaR3d92HYO7
https://www.youtube.com/watch?v=m6eExiGqtS0
https://www.dna.fi/yrityksille/aistien-internet-podcast
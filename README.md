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
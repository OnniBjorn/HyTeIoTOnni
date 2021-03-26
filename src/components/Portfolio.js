import React from 'react';


function Portfolio() {
  return (
    <div>
    <h1>Onni Björn - Portfolio</h1>
        <h2>Tietoa</h2> 
    <div class ="tieto">
      Olen 19-vuotias rauhallinen opiskelija. Harrastuksiini kuuluu päivittäinen videopelaaminen. 
    </div>
        <h2>Koulutus</h2>
    <div class="koulu">
      Peruskoulu (Kärpäsen koulu) 2007-2016<br />
      Kymppiluokka (Lahden kansanopisto) 2016-2017 
    </div>

     <div class="tyokokemus">
        <h2>Työkokemus</h2>       
          Peruskoulun Tet-jakso - Siwa 3-vko<br />
          Kymppiluokan Tet-jakso - Arjen Aarteet kirpputori 1-vko
      </div>
    <h2>Kielitaito</h2>
    <div class ="taito"> 
      Suomi - Äidinkieli<br />
      Englanti - Hyvä<br />
      Ruotsi - Perusteet
    </div>
    </div>
  )
}

export default Portfolio;
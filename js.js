$(function () {
  const szuloElem = $("article");
  const sablon = $(".kartya");
  const meret = 3;
  const kivalasztottKartyaTomb=[];
  for (let index = 0; index < meret; index++) {
    for (let k = 0; k < 2; k++) {
      const ujElem = sablon.clone().appendTo(szuloElem);
      const kartya = new Kartya("kepek/kep" + (index + 1) + ".jpg", ujElem);
    }
  }
  sablon.remove();

  //itt tudjuk számolni hány kártya van felfordítva

  $(window).on("KartyaKattintas",(event)=>{
    kivalasztottKartyaTomb.push(event.detail);
    if (kivalasztottKartyaTomb.length==2) {
        if (kivalasztottKartyaTomb[0].faljNev==kivalasztottKartyaTomb[1].faljNev) {
            //ha egyforma tűnjenek el a kártyák
            console.log("Talált");
            kivalasztottKartyaTomb[0].eltuntet();
            kivalasztottKartyaTomb[1].eltuntet();
            kivalasztottKartyaTomb.splice(0,2);
        }else{
            console.log("Nem talált");
            setTimeout(function(){
                kivalasztottKartyaTomb[0].atvalt();
                kivalasztottKartyaTomb[1].atvalt();
                kivalasztottKartyaTomb.splice(0,2);}, 1000);
                
        }
        
    }
  });
});

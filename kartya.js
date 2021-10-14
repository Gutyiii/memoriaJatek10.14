class Kartya {
  constructor(faljNev, elem) {
    this.faljNev = faljNev;
    this.elem = elem; //az aktuális div elemünk
    this.kepElem = elem.children("img"); //az aktuális div elemünk képeleme lesz ez
    this.hatter = "kepek/eltakar.jpg";
    this.allapot = false;
    this.setLapbelallitas();
    this.elem.on("click", () => {
      this.atvalt();
      this.KattintasTrigger(); //ezzel váltom ki az eseményt
    });
  }

  setLapbelallitas() {
    if (this.allapot) {
      this.kepElem.attr("src", this.faljNev);
    } else {
      this.kepElem.attr("src", this.hatter);
    }
  }

  eltuntet() {
    this.elem.css("visibility", "hidden");
  }

  atvalt() {
    this.allapot = !this.allapot;
    this.setLapbelallitas();
  }

  KattintasTrigger() {
    //let esemeny= new Event("KartyaKattintas");
    //egy fajtaq

    let esemeny = new CustomEvent("KartyaKattintas", { detail: this });
    //úgy hozzuk létre az eseményt hogy megmondjuk melyik objektum váltotta ki
    window.dispatchEvent(esemeny);
  }
}

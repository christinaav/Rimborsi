import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatCheckbox } from "@angular/material";

export interface Type {
  viewValue: string;
}

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  utente: string;
  ordine: string;
  reclamo: string;
  subscribe: boolean = false;
  data: Date;
  risposta: string;

  rispedire: boolean = false;
  smarrimento: boolean = false;
  danneggiamento: boolean = false;
  conformita: boolean = false;
  altro: boolean = false;

  checked: boolean = false;
  notChecked: boolean = false;

  types: Type[] = [
    { viewValue: "Smarrimento" },
    { viewValue: "Danneggiamento" },
    { viewValue: "Non conformità" },
    { viewValue: "Altro" }
  ];

  loadComponent = false;

  constructor(private router: Router) {}

  ngOnInit;

  onSubmit(form: NgForm) {
    this.subscribe = true;
    this.utente = form.value.name;
    console.log(this.utente);
    this.ordine = form.value.ordine;
    console.log(this.ordine);
    this.reclamo = form.value.type;
    console.log(form.value.type);

    if (this.reclamo == "Smarrimento") {
      this.smarrimento = true;
      this.data = form.value.dataOrdine;
      this.workSmarrimento();
    }

    if (this.reclamo == "Danneggiamento") {
      this.danneggiamento = true;
      console.log("ups, si è danneggiato");
      this.checkBox;
      this.notcheckBox;
    }

    if (this.reclamo == "Non conformità") {
      this.conformita = true;
      console.log("ma non mi dire, non ti piace?");
      this.risposta =
        "Provvederemo a rispedire il prodotto. Puoi gettare quello in tuo possesso nel bidone giusto.";
    }

    if (this.reclamo == "Altro") {
      this.altro = true;
      this.risposta = "Ti risponderemo a breve. Grazie.";
    }
  }

  workSmarrimento() {
    let dataOggi = new Date();
    if (dataOggi.getDate() - this.data.getDate() < 0)
      this.risposta = "E' meglio inserire una data più reale.";
    if (dataOggi.getDate() - this.data.getDate() > 7)
      this.risposta =
        "Ci dispiace per averti fatto aspettare. Contatteremo a presto il corriere.";
    if (dataOggi.getDate() - this.data.getDate() < 7)
      this.risposta =
        "Ti preghiamo di attendere fino ad un massimo di 7 giorni. Altrimenti, ci ricontatti.";
  }

  checkBox(value) {
    this.checked = !value;
    console.log(this.checked);
    this.rispedire = true;
    this.risposta =
      "Provvederemo a rispedire il prodotto. Puoi gettare quello in tuo possesso nel bidone giusto.";
  }

  notcheckBox(value) {
    this.notChecked = !value;
    console.log(this.notChecked);
    this.risposta =
      "Ti preghiamo di rifare la procedura selezionando la voce 'Non conformità'. Grazie.";
  }

  send() {
    console.log("sono dentro e cambierò pagina");
    this.router.navigate(["ready"]);
  }
}

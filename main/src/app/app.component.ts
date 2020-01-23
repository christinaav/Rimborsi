import { Component, OnInit } from "@angular/core";
import { ngModuleJitUrl } from "@angular/compiler";
import { NgForm } from "@angular/forms";

export interface Type {
  viewValue: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  utente: string;
  ordine: string;
  reclamo: string;

  types: Type[] = [
    { viewValue: "Smarrimento" },
    { viewValue: "Danneggiamento" },
    { viewValue: "Non conformità" },
    { viewValue: "Altro" }
  ];

  loadComponent = false;

  constructor() {}

  ngOnInit;

  onSubmit(form: NgForm) {
    this.utente = form.value.name;
    console.log(this.utente);
    this.ordine = form.value.ordine;
    console.log(this.ordine);
    console.log(this.reclamo);
  }

  changeChildComponent() {
    this.loadComponent = true;
  }
}

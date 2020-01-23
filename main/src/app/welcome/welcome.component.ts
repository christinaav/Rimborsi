import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

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
    this.utente = form.value.name;
    console.log(this.utente);
    this.ordine = form.value.ordine;
    console.log(this.ordine);
    console.log(this.reclamo);
  }

  changeChildComponent() {
    console.log("Sono dentro");
    this.router.navigate(["smarrimento"]);
  }
}

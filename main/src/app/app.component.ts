import { Component, OnInit } from "@angular/core";
import { ngModuleJitUrl } from "@angular/compiler";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  Roles: any = ["Smarrimento", "Danneggiamento", "Non conformità", "Altro"];
  utente: string = "";
  ordine: string = "";
  reclamo: string = "";

  constructor() {}

  ngOnInit;

  onSubmit(form: NgForm) {
    this.utente = form.value.name;
    console.log(this.utente);
    this.ordine = form.value.ordine;
    console.log(this.ordine);
  }

  selected(event) {
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
  }
}

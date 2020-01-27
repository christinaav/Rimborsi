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
  loadComponent = false;

  constructor() {}

  ngOnInit;
}

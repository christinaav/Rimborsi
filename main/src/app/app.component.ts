import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  Roles: any = ["Smarrimento", "Danneggiamento", "Non conformità", "Altro"];

  constructor() {}

  ngOnInit() {}
}

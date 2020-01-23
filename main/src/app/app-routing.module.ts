import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SmarrimentoComponent } from "./smarrimento/smarrimento.component";

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "smarrimento", component: SmarrimentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactUsComponent } from "./pages/contact-us/signin/contact-us.component";

import { IndexComponent } from "./pages/index/index.component";
import { SigninComponent } from "./pages/signin/signin/signin.component";
const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "sign", component: SigninComponent },
  { path: "contactus", component: ContactUsComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

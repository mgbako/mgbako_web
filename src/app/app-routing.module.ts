import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { TransactionSummaryComponent } from "./pages/transaction-summary/transaction-summary/transaction-summary.component";
import { TransactionStatusComponent } from "./pages/transaction-status/transaction-status.component";
import { VerificationComponent } from "./pages/verification/verification/verification.component";
import { AboutusComponent } from "./pages/aboutus/aboutus/aboutus.component";
import { PrivacyComponent } from "./pages/privacy/privacy/privacy.component";
import { TermsComponent } from "./pages/terms/terms/terms.component";
import { FaqCategoryComponent } from "./pages/faq-category/faq-category/faq-category.component";
import { FaqsComponent } from "./pages/faqs/faqs.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "terms", component: TermsComponent },
  { path: "faqs", component: FaqsComponent },
  { path: "faqs/:id", component: FaqsComponent },
  {
    path: "summary",
    component: TransactionSummaryComponent,
    data: { title: "Summary" },
  },
  {
    path: "transactiondetails/:transactionReference",
    component: TransactionStatusComponent,
  },
  { path: "verify/:userId/:code", component: VerificationComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

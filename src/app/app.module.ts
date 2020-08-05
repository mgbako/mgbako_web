import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeOneComponent } from "./components/welcome/welcome-one/welcome-one.component";
import { CounterComponent } from "./components/counter/counter.component";
import { FeatureOneComponent } from "./components/features/feature-one/feature-one.component";
import { ServiceOneComponent } from "./components/services/service-one/service-one.component";
import { DiscoverOneComponent } from "./components/discover/discover-one/discover-one.component";
import { WorkComponent } from "./components/work/work.component";
import { ScreenshotOneComponent } from "./components/screenshots/screenshot-one/screenshot-one.component";
import { PricingOneComponent } from "./components/pricing/pricing-one/pricing-one.component";
import { PricingCustomComponent } from "./components/pricing/pricing-custom/pricing-custom.component";
import { FaqOneComponent } from "./components/faq/faq-one/faq-one.component";
import { TeamComponent } from "./components/team/team.component";
import { DownloadComponent } from "./components/download/download.component";
import { SubscribeComponent } from "./components/subscribe/subscribe.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterOneComponent } from "./components/footer/footer-one/footer-one.component";
import { FooterTwoComponent } from "./components/footer/footer-two/footer-two.component";
import { ScrollupComponent } from "./components/scrollup/scrollup.component";
import { ThemeOneComponent } from "./themes/theme-one/theme-one.component";
import { ThemeTwoComponent } from "./themes/theme-two/theme-two.component";
import { WelcomeTwoComponent } from "./components/welcome/welcome-two/welcome-two.component";
import { FeatureTwoComponent } from "./components/features/feature-two/feature-two.component";
import { DiscoverTwoComponent } from "./components/discover/discover-two/discover-two.component";
import { ServiceTwoComponent } from "./components/services/service-two/service-two.component";
import { ScreenshotTwoComponent } from "./components/screenshots/screenshot-two/screenshot-two.component";
import { ReviewOneComponent } from "./components/reviews/review-one/review-one.component";
import { ReviewTwoComponent } from "./components/reviews/review-two/review-two.component";
import { FaqTwoComponent } from "./components/faq/faq-two/faq-two.component";
import { ThemeThreeComponent } from "./themes/theme-three/theme-three.component";
import { ThemeFourComponent } from "./themes/theme-four/theme-four.component";
import { ThemeFiveComponent } from "./themes/theme-five/theme-five.component";
import { ThemeSixComponent } from "./themes/theme-six/theme-six.component";
import { WelcomeThreeComponent } from "./components/welcome/welcome-three/welcome-three.component";
import { WelcomeFourComponent } from "./components/welcome/welcome-four/welcome-four.component";
import { WelcomeFiveComponent } from "./components/welcome/welcome-five/welcome-five.component";
import { WelcomeSixComponent } from "./components/welcome/welcome-six/welcome-six.component";
import { FeatureThreeComponent } from "./components/features/feature-three/feature-three.component";
import { DiscoverThreeComponent } from "./components/discover/discover-three/discover-three.component";
import { ServiceThreeComponent } from "./components/services/service-three/service-three.component";
import { ReviewThreeComponent } from "./components/reviews/review-three/review-three.component";
import { PricingTwoComponent } from "./components/pricing/pricing-two/pricing-two.component";
import { ServiceFourComponent } from "./components/services/service-four/service-four.component";
import { DiscoverFourComponent } from "./components/discover/discover-four/discover-four.component";
import { FeatureFourComponent } from "./components/features/feature-four/feature-four.component";
import { FeatureFiveComponent } from "./components/features/feature-five/feature-five.component";
import { ServiceFiveComponent } from "./components/services/service-five/service-five.component";
import { DiscoverFiveComponent } from "./components/discover/discover-five/discover-five.component";
import { PricingThreeComponent } from "./components/pricing/pricing-three/pricing-three.component";
import { ServiceSixComponent } from "./components/services/service-six/service-six.component";
import { DiscoverSixComponent } from "./components/discover/discover-six/discover-six.component";
import { BrandComponent } from "./components/brand/brand.component";
import { FeatureSixComponent } from "./components/features/feature-six/feature-six.component";
import { PricingFourComponent } from "./components/pricing/pricing-four/pricing-four.component";
import { BlogTwoColumnComponent } from "./components/blogs/blog-two-column/blog-two-column.component";
import { BlogThreeColumnComponent } from "./components/blogs/blog-three-column/blog-three-column.component";
import { BlogLeftSidebarComponent } from "./components/blogs/blog-left-sidebar/blog-left-sidebar.component";
import { BlogRightSidebarComponent } from "./components/blogs/blog-right-sidebar/blog-right-sidebar.component";
import { BlogDetailsLeftSidebarComponent } from "./components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component";
import { BlogDetailsRightSidebarComponent } from "./components/blogs/blog-details-right-sidebar/blog-details-right-sidebar.component";
import { PricingComponent } from "./components/inner-pages/pricing/pricing.component";
import { ThankYouComponent } from "./components/inner-pages/thank-you/thank-you.component";
import { ComingSoonComponent } from "./components/inner-pages/coming-soon/coming-soon.component";
import { ErrorComponent } from "./components/inner-pages/error/error.component";
import { LoginComponent } from "./components/accounts/login/login.component";
import { SignupComponent } from "./components/accounts/signup/signup.component";
import { ResetComponent } from "./components/accounts/reset/reset.component";
import { BreadcrumbPricingComponent } from "./components/breadcrumb/breadcrumb-pricing/breadcrumb-pricing.component";
import { BreadcrumbBlogTwoColumnComponent } from "./components/breadcrumb/breadcrumb-blog-two-column/breadcrumb-blog-two-column.component";
import { BreadcrumbBlogThreeColumnComponent } from "./components/breadcrumb/breadcrumb-blog-three-column/breadcrumb-blog-three-column.component";
import { BreadcrumbBlogLeftSidebarComponent } from "./components/breadcrumb/breadcrumb-blog-left-sidebar/breadcrumb-blog-left-sidebar.component";
import { BreadcrumbBlogRightSidebarComponent } from "./components/breadcrumb/breadcrumb-blog-right-sidebar/breadcrumb-blog-right-sidebar.component";
import { BreadcrumbBlogDetailsLeftSidebarComponent } from "./components/breadcrumb/breadcrumb-blog-details-left-sidebar/breadcrumb-blog-details-left-sidebar.component";
import { BreadcrumbBlogDetailsRightSidebarComponent } from "./components/breadcrumb/breadcrumb-blog-details-right-sidebar/breadcrumb-blog-details-right-sidebar.component";
import { BreadcrumbReviewsComponent } from "./components/breadcrumb/breadcrumb-reviews/breadcrumb-reviews.component";
import { FaqThreeComponent } from "./components/faq/faq-three/faq-three.component";
import { BreadcrumbFaqComponent } from "./components/breadcrumb/breadcrumb-faq/breadcrumb-faq.component";
import { BreadcrumbContactComponent } from "./components/breadcrumb/breadcrumb-contact/breadcrumb-contact.component";
import { ReviewPageComponent } from "./components/inner-pages/review-page/review-page.component";
import { DownloadPageComponent } from "./components/inner-pages/download-page/download-page.component";
import { SubscribePageComponent } from "./components/inner-pages/subscribe-page/subscribe-page.component";
import { FaqPageComponent } from "./components/inner-pages/faq-page/faq-page.component";
import { ContactPageComponent } from "./components/inner-pages/contact-page/contact-page.component";
import { HeaderOneComponent } from "./components/header/header-one/header-one.component";
import { HeaderTwoComponent } from "./components/header/header-two/header-two.component";
import { IndexComponent } from "./pages/index/index.component";
import { HeaderCustomComponent } from "./components/header/header-custom/header-custom.component";
import { WelcomeCustomComponent } from "./components/welcome/welcome-custom/welcome-custom.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaqComponent } from "./pages/faq/faq.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    WelcomeOneComponent,
    CounterComponent,
    FeatureOneComponent,
    ServiceOneComponent,
    DiscoverOneComponent,
    WorkComponent,
    ScreenshotOneComponent,
    PricingOneComponent,
    FaqOneComponent,
    TeamComponent,
    DownloadComponent,
    SubscribeComponent,
    ContactComponent,
    FooterOneComponent,
    FooterTwoComponent,
    ScrollupComponent,
    ThemeOneComponent,
    ThemeTwoComponent,
    WelcomeTwoComponent,
    FeatureTwoComponent,
    DiscoverTwoComponent,
    ServiceTwoComponent,
    ScreenshotTwoComponent,
    ReviewOneComponent,
    ReviewTwoComponent,
    FaqTwoComponent,
    ThemeThreeComponent,
    ThemeFourComponent,
    ThemeFiveComponent,
    ThemeSixComponent,
    WelcomeThreeComponent,
    WelcomeFourComponent,
    WelcomeFiveComponent,
    WelcomeSixComponent,
    FeatureThreeComponent,
    DiscoverThreeComponent,
    ServiceThreeComponent,
    ReviewThreeComponent,
    PricingTwoComponent,
    ServiceFourComponent,
    DiscoverFourComponent,
    FeatureFourComponent,
    FeatureFiveComponent,
    ServiceFiveComponent,
    DiscoverFiveComponent,
    PricingThreeComponent,
    ServiceSixComponent,
    DiscoverSixComponent,
    BrandComponent,
    FeatureSixComponent,
    PricingFourComponent,
    BlogTwoColumnComponent,
    BlogThreeColumnComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    PricingComponent,
    ThankYouComponent,
    ComingSoonComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
    BreadcrumbPricingComponent,
    BreadcrumbBlogTwoColumnComponent,
    BreadcrumbBlogThreeColumnComponent,
    BreadcrumbBlogLeftSidebarComponent,
    BreadcrumbBlogRightSidebarComponent,
    BreadcrumbBlogDetailsLeftSidebarComponent,
    BreadcrumbBlogDetailsRightSidebarComponent,
    BreadcrumbReviewsComponent,
    FaqThreeComponent,
    BreadcrumbFaqComponent,
    BreadcrumbContactComponent,
    ReviewPageComponent,
    DownloadPageComponent,
    SubscribePageComponent,
    FaqPageComponent,
    ContactPageComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    IndexComponent,
    HeaderCustomComponent,
    WelcomeCustomComponent,
    FaqComponent,
    PricingCustomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

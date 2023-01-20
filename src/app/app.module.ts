import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { ClientPartnersComponent } from './client-partners/client-partners.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { IpServicesComponent } from './ip-services/ip-services.component';
import { ItBlogComponent } from './it-blog/it-blog.component';
import { ItServicesComponent } from './it-services/it-services.component';
import { JobsComponent } from './jobs/jobs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ResearchComponent } from './research/research.component';
import { ResourcesComponent } from './resources/resources.component';
import { ButtonsModule } from './shared/modules/buttons/buttons.module';
import { CtaComponent } from './shared/modules/cta/cta.component';
import { FooterComponent } from './shared/modules/footer/footer.component';
import { HeaderComponent } from './shared/modules/header/header.component';
import { PageHeaderModule } from './shared/modules/page-header/page-header.module';
import { TermsServiceComponent } from './terms-service/terms-service.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ClientPartnersComponent,
    ContactUsComponent,
    IpServicesComponent,
    ResearchComponent,
    FaqComponent,
    BlogComponent,
    CtaComponent,
    ItServicesComponent,
    CaseStudyComponent,
    ResourcesComponent,
    ItBlogComponent,
    PrivacyPolicyComponent,
    TermsServiceComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PageHeaderModule,
    MatMenuModule,
    ButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

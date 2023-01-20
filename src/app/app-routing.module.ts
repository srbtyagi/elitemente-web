import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { TermsServiceComponent } from './terms-service/terms-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'client-partners', component: ClientPartnersComponent },
  { path: 'ip-services', component: IpServicesComponent },
  { path: 'it-services', component: ItServicesComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'it-blog', component: ItBlogComponent },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsServiceComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

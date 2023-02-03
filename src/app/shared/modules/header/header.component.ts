import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  navbarItems: any = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'About Us',
      link: '/about-us',
    },
    {
      label: 'Clients & Partners',
      link: '/client-partners',
    },
    {
      label: 'Industrial & Admin Services',
      link: '',
      children: [
        {
          label: 'Industrial & Administrative Services',
          link: '/ip-services',
        },
        {
          label: 'Research',
          link: '/research',
        },
        {
          label: 'FAQ',
          link: '/faq',
        },
        {
          label: 'Blog',
          link: '/blog',
        },
      ],
    },
    {
      label: 'IT Services',
      link: '',
      children: [
        {
          label: 'Our IT Services',
          link: '/it-services',
        },
        {
          label: 'Case Study',
          link: '/case-study',
        },
        // {
        //   label: 'Resources',
        //   link: '/resources',
        // },
        {
          label: 'Blog',
          link: '/it-blog',
        },
      ],
    },
    {
      label: 'Jobs',
      link: '/jobs',
    },
    {
      label: 'Contact Us',
      link: '/contact-us',
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  signIn() {
    window.location.href = 'http://app.elitemente.com/';
  }
}

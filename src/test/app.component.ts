import { Component, OnInit } from '@angular/core';
import { HeaderSettings, Menu } from '../app/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NT-Demo-lib';

  bottomTitle = 'Orient Software © 2019 All Rights Reserved. Made with love by Orient Team.';

  headerSettings: HeaderSettings;
  menuSettings: Menu;

  constructor() { }

  ngOnInit() {
    this.buildHeaderSetting();
    this.buildMenuSetting();
  }

  // Fake datas headerSettings
  private buildHeaderSetting(): void {

    this.headerSettings = {
      logoUrl: 'https://cdn.worldvectorlogo.com/logos/react.svg',
      orgName: 'OSD',
      menus: [{
        title: 'Menu 1',
        link: '#1'
      },
      {
        title: 'Menu 2',
        link: '#2'
      },
      {
        title: 'Menu 2',
        link: '#3'
      }
      ],
      user: {
        userName: 'Nhat Tran',
        profileImage: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png',
        tags: [
          {
            detail: 'Your Profile',
            link: '#'
          },
          {
            detail: 'Your Projects',
            link: '#'
          },
          {
            detail: 'Settings',
            link: '#'
          },
          {
            detail: 'Help',
            link: '#'
          },
          {
            detail: 'Sign Out',
            link: '#'
          }
        ]
      }
    };
  }

  // Fake datas menuSettings
  private buildMenuSetting(): void {
    this.menuSettings = {
      menuItems: [{
        title: 'Menu Menu 1',
        link: '#',
        icon: 'far fa-address-book fa-2x'
      },
      {
        title: 'Menu Menu Menu 2',
        link: '#',
        icon: 'fab fa-adn fa-2x'
      },
      {
        title: 'Menu Menu Menu 2',
        link: '#',
        icon: 'fas fa-ambulance fa-2x'
      },
      {
        title: 'Menu Menu Menu 2',
        link: '#',
        icon: 'far fa-address-book fa-2x'
      },
      {
        title: 'Menu Menu Menu 2',
        link: '#',
        icon: 'fab fa-adn fa-2x'
      },
      {
        title: 'Menu Menu Menu 2',
        link: '#',
        icon: ''
      },
      ]
    };
  }

  // Catch UserName from LoginComponent output
  public getUserName(event): void {
    console.log(event);
  }

  // Catch PassWord from LoginComponent output
  public getPassWord(event): void {
    console.log(event);
  }

  // Catch RememberMe from LoginComponent output
  public getRememberMe(event): void {
    console.log(event);
  }
}

# NTDemoLib

This project library demo for 4 components: Header, Slidebar, Bottom, Login

Demo page: [https://talentvn.github.io/NTDemo-Lib/](https://talentvn.github.io/NTDemo-Lib/)


### Infrastructure:

```shell
--- interfaces
------ interfaces.ts
--- modules
------ ntfooter
------------ ntfooter.component.html
------------ ntfooter.component.scss
------------ ntfooter.component.ts
------------ ntfooter.module.ts
------ ntheader
------------ ntheader.component.html
------------ ntfooter.component.ts
------------ ntfooter.module.ts
------ ntlogin
------------ components
------------------ modal
------------------------ ntmodal.component.ts
------------ ntlogin.component.html
------------ ntlogin.component.scss
------------ ntlogin.component.ts
------------ ntlogin.module.ts
------ ntslide-bar
------------ ntslide-bar.component.html
------------ ntslide-bar.component.scss
------------ ntslide-bar.component.ts
------------ ntslide-bar.module.ts
```


## Dependencies
| ng-bootstrap | Angular | Bootstrap CSS | fortawesome |
| ------------ | ------- | ------------- | ------------|
| 4.x.x        | 7.x.x   | 4.x.x         | 5.x.x

## Intall npm

```shell
npm install --save nt-demo-lib
```

## How to use NTDemo-Lib

### Before start to use NTDemoLib
Please help me to make sure your project installed some dependencies:
  - ng-bootstrap
```shell
npm install --save @ng-bootstrap/ng-bootstrap
```
  - boostrap
```shell
npm install --save bootstrap
```


### 1. Add Bootstrap CSS to styles.scss or styles.css
You also need to add Bootstrap 4 CSS to your application by using your preferred way (it really depends on the setup you're using). Ex. for Angular CLI you can [get Bootstrap from npm](https://www.npmjs.com/package/bootstrap) and update your `angular.json` with something like:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

Or update this on file style.css or style.scss

```scss
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
```
### 2. Add fontAwesome
You also add Font Awesome's CDN to your project, example via CDN to file index.html

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```
### 3. Install NTDemo-Lib

```shell
npm install --save nt-demo-lib
```

### 4. Import NTDemo-Lib modules to projects

```ts
// Header Module include Header component
import { NTheaderModule } from 'nt-demo-lib';
// SlideBarModule inclode SlideBar component
import { NTSlideBarModule } from 'nt-demo-lib';
// FooterModule inclode Footer component
import { NTFooterModule } from 'nt-demo-lib';
// LoginModule inclode Login component
import { NTLoginModule } from 'nt-demo-lib';
...
...
imports: [
    NTLoginModule,
    NTheaderModule,
    NTSlideBarModule,
    NTFooterModule,
  ],
```

### Demo page using 4 components: Header, SlideBar, Footer, Login

```ts
import { Component } from '@angular/core';
import { HeaderSettings, Menu } from 'nt-demo-lib/src/app/interfaces/interfaces';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <NTHeader title="{{title}}" [HeaderSettings]="headerSettings"></NTHeader>
      <div class="row">
        <div class="col-md-3">
          <NTSlide-Bar title="{{title}}" [MenuSettings]="menuSettings"></NTSlide-Bar>
        </div>
        <div class="col-md-9">
          <!--Render Login Component-->
          <NTLogin (userName)='getUserName($event)' (passWord)='getPassWord($event)' (rememberMe)='getRememberMe($event)'>
          </NTLogin>
        </div>
      </div>

      <NTFooter title="{{bottomTitle}}"></NTFooter>

      <!-- Content -->
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected title = 'NT-Demo-lib';

  protected bottomTitle = 'Orient Software © 2019 All Rights Reserved. Made with love by Orient Team.';

  protected headerSettings: HeaderSettings;
  protected menuSettings: Menu;

  constructor() { }

  ngOnInit() {
    this.buildHeaderSetting();
    this.buildMenuSetting();
  }

  // Fake datas headerSettings
  protected buildHeaderSetting(): void {

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
  protected buildMenuSetting(): void {
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
  protected getUserName(event): void {
    console.log(event);
  }

  // Catch PassWord from LoginComponent output
  protected getPassWord(event): void {
    console.log(event);
  }

  // Catch RememberMe from LoginComponent output
  protected getRememberMe(event): void {
    console.log(event);
  }
}
```

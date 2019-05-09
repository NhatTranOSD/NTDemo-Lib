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

NPM link: [https://www.npmjs.com/package/nt-demo-library](https://www.npmjs.com/package/nt-demo-library)

```shell
npm install --save nt-demo-library
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
import { NTheaderModule } from 'nt-demo-library';
// SlideBarModule inclode SlideBar component
import { NTSlideBarModule } from 'nt-demo-library';
// FooterModule inclode Footer component
import { NTFooterModule } from 'nt-demo-library';
// LoginModule inclode Login component
import { NTLoginModule } from 'nt-demo-library';
...
...
imports: [
    NTLoginModule,
    NTheaderModule,
    NTSlideBarModule,
    NTFooterModule,
  ],
```

### How to use NTheaderModule and NTHeaderComponent

  Import Module
```ts
// Header Module include Header component
import { NTheaderModule } from 'nt-demo-library';
...
imports: [
    NTheaderModule,
  ],
```
  Template
```html
<NTHeader title="{{title}}" (onSubmit)="searchSubmit($event)" [headerSettings]="headerSettings"></NTHeader>
```
 Setting header on component file such as app.component.ts
```ts
// Init title
  title = 'NT-Demo-lib';
  // Setting header to render
  headerSettings = {
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

  // Catch submit search string from NTHeader search imput output
  searchSubmit(event): void {
    console.log(event);
  }
```

### How to use NTFooterModule and NTFooterComponent

  Import Module
```ts
// Footer Module include Footer component
import { NTFooterModule } from 'nt-demo-library';
...
imports: [
    NTFooterModule,
  ],
```
  Template
```html
<NTFooter [title]="bottomTitle"></NTFooter>
```
 Setting footer on component file such as app.component.ts
```ts
// Init bottom title
bottomTitle = 'Orient Software © 2019 All Rights Reserved. Made with love by Orient Team.';
```

### How to use NTSlideBarModule and NTSlideBarComponent

  Import Module
```ts
// SlideBar Module include SlideBar component
import { NTSlideBarModule } from 'nt-demo-library';
...
imports: [
    NTSlideBarModule,
  ],
```
  Template
```html
<NTSlide-Bar [isOpen]="isOpen" title="{{title}}" [menuSettings]="menuSettings"></NTSlide-Bar>

<!-- Rounded switch -->
<label class="switch">
    <input (click)="toggle()" type="checkbox" checked>
    <span class="slider round"></span>
</label>
```
 Setting header on component file such as app.component.ts
```ts
// Init toggle
isOpen: boolean = true;
// Init slidebar settings to render
menuSettings = {
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

toggle(): void {
  this.isOpen = !this.isOpen;
}
```

### How to use NTLoginModule and NTLoginComponent

  Import Module
```ts
// Login Module include Login component
import { NTLoginModule } from 'nt-demo-library';
...
imports: [
    NTLoginModule,
  ],
```
  Template
```html
<NTLogin (userName)='getUserName($event)' (passWord)='getPassWord($event)'
                (rememberMe)='getRememberMe($event)'></NTLogin>
```

 Setting Login on component file such as app.component.ts
```ts
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

// Catch submit event from LoginComponent output
public getSubmited(event): void {
  console.log(event);
}
```

### Demo page using 4 components: Header, SlideBar, Footer, Login

All sample use modules and components in here: [https://github.com/TalentVN/NTDemo-Lib/tree/master/src/test](https://github.com/TalentVN/NTDemo-Lib/tree/master/src/test)

```ts
import { Component, OnInit } from '@angular/core';
import { HeaderSettings, Menu } from 'nt-demo-library/src/app/interfaces/interfaces';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <NTHeader title="{{title}}" (onSubmit)="searchSubmit($event)" [headerSettings]="headerSettings"></NTHeader>
        <div class="row">

            <NTSlide-Bar [isOpen]="isOpen" title="{{title}}" [menuSettings]="menuSettings"></NTSlide-Bar>

            <div [ngClass]="{'col-md-9': isOpen, 'col-md-12': !isOpen}">

                <!-- Rounded switch -->
                <label class="switch">
                    <input (click)="toggle()" type="checkbox" checked>
                    <span class="slider round"></span>
                </label>

                <!--The content below is only a placeholder and can be replaced.-->
                <NTLogin (userName)='getUserName($event)' (passWord)='getPassWord($event)'
                    (rememberMe)='getRememberMe($event)' (submited)='getSubmited($event)'></NTLogin>
            </div>
        </div>

        <NTFooter [title]="bottomTitle"></NTFooter>

        <!-- Content -->
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NT-Demo-lib';

  isOpen: boolean = true;

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

  toggle(): void {
    this.isOpen = !this.isOpen;
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

  // Catch RememberMe from LoginComponent output
  public getSubmited(event): void {
    console.log(event);
  }

  // Catch search string from NTHeader search input value when this submit
  public searchSubmit(event): void {
    console.log(event);
  }
}

```

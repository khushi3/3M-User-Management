export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'user-management',
        data: {
          menu: {
            title: 'User Groups',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Configuration Modules',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        }

      }
    
    ]
  }
];

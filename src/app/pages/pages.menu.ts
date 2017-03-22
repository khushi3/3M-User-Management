export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
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
        },
//        children: [
//          {
//            path: 'ckeditor',
//            data: {
//              menu: {
//                title: 'CKEditor',
//              }
//            }
//          }
//        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'Tree View',
              }
            }
          }
        ]
      }
//      {
//        path: 'tables',
//        data: {
//          menu: {
//            title: 'Tables',
//            icon: 'ion-grid',
//            selected: false,
//            expanded: false,
//            order: 500,
//          }
//        },
//        children: [
//          {
//            path: 'basictables',
//            data: {
//              menu: {
//                title: 'Basic Tables',
//              }
//            }
//          },
//          {
//            path: 'smarttables',
//            data: {
//              menu: {
//                title: 'Smart Tables',
//              }
//            }
//          }
//        ]
//      },
     
//      {
//        path: '',
//        data: {
//          menu: {
//            title: 'Pages',
//            icon: 'ion-document',
//            selected: false,
//            expanded: false,
//            order: 650,
//          }
//        },
//        children: [
//          {
//            path: ['/login'],
//            data: {
//              menu: {
//                title: 'Login'
//              }
//            }
//          }
//        ]
//      }
    ]
  }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          },
          {
            path: 'bookdetail/:bookID',
            loadChildren: '../bookdetail/bookdetail.module#BookdetailPageModule'
          },
          {
            path: 'showallbooks',
            children: [
              {
                path: '',
                loadChildren: '../showallbooks/showallbooks.module#ShowallbooksPageModule'
              },
              {
                path: 'bookdetail/:bookID',
                loadChildren: '../bookdetail/bookdetail.module#BookdetailPageModule'
              }
            ]
          },
          {
            path: 'showrecommendations',
            children: [
              {
                path: '',
                loadChildren: '../showrecommendations/showrecommendations.module#ShowrecommendationsPageModule'
              },
              {
                path: 'bookdetail/:bookID',
                loadChildren: '../bookdetail/bookdetail.module#BookdetailPageModule'
              }
            ]
          },
          {
            path: 'showbylanguage',
            children: [
              {
                path: '',
                loadChildren: '../showbylanguage/showbylanguage.module#ShowbylanguagePageModule'
              },
              {
                path: 'bookdetail/:bookID',
                loadChildren: '../bookdetail/bookdetail.module#BookdetailPageModule'
              }
            ]
          },
          {
            path: 'showbygenre',
            children: [
              {
                path: '',
                loadChildren: '../showbygenre/showbygenre.module#ShowbygenrePageModule'
              },
              {
                path: 'bookdetail/:bookID',
                loadChildren: '../bookdetail/bookdetail.module#BookdetailPageModule'
              }
            ]
          },
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tab4/tab4.module#Tab4PageModule'
          },
          {
            path: 'bookdetail/:bookID',
            loadChildren: '../bookdetail/bookdetail.module#BookdetailPageModule'
          }

        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: '../tab5/tab5.module#Tab5PageModule'
          }
        ]
      }

    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

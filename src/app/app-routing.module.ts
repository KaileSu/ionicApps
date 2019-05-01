import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'account/:username', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'addcontact', loadChildren: './addcontact/addcontact.module#AddcontactPageModule' },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  // { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  // { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

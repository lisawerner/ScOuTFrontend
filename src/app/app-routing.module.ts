import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tasklist', loadChildren: './pages/tasks/tasklist/tasklist.module#TasklistPageModule' },
  { path: 'createtask', loadChildren: './pages/tasks/createtask/createtask.module#CreatetaskPageModule' },
  { path: 'viewtask', loadChildren: './pages/tasks/viewtask/viewtask.module#ViewtaskPageModule' },
  { path: 'eventlist', loadChildren: './pages/events/eventlist/eventlist.module#EventlistPageModule' },
  { path: 'createevent', loadChildren: './pages/events/createevent/createevent.module#CreateeventPageModule' },
  { path: 'viewevent', loadChildren: './pages/events/viewevents/viewevents.module#VieweventsPageModule' },
  { path: 'register', loadChildren: './pages/account/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/account/login/login.module#LoginPageModule' },
  { path: 'teamlist', loadChildren: './pages/teams/teamlist/teamlist.module#TeamlistPageModule' },
  { path: 'createteam', loadChildren: './pages/teams/createteam/createteam.module#CreateteamPageModule' },
  { path: 'viewteam', loadChildren: './pages/teams/viewteam/viewteam.module#ViewteamPageModule' },
  { path: 'viewteammember', loadChildren: './pages/teams/viewteammember/viewteammember.module#ViewteammemberPageModule' },
  { path: 'starttutorial', loadChildren: './pages/help/starttutorial/starttutorial.module#StarttutorialPageModule' },
  { path: 'orgateam', loadChildren: './pages/events/orgateam/orgateam.module#OrgateamPageModule' },
  { path: 'createeventchooser', loadChildren: './pages/events/createeventchooser/createeventchooser.module#CreateeventchooserPageModule' },
  { path: 'sitemap', loadChildren: './pages/help/sitemap/sitemap.module#SitemapPageModule' },
  { path: 'lexikon', loadChildren: './pages/help/lexikon/lexikon.module#LexikonPageModule' },
  { path: 'eventtasks', loadChildren: './pages/events/eventtasks/eventtasks.module#EventtasksPageModule' },
  { path: 'accountsettings', loadChildren: './pages/account/accountsettings/accountsettings.module#AccountsettingsPageModule' },
  { path: 'tutorialmenu', loadChildren: './pages/tutorial/menu/menu.module#MenuPageModule' },
  { path: 'tutorialteam', loadChildren: './pages/tutorial/tutorialteam/tutorialteam.module#TutorialteamPageModule' },
  { path: 'tutorialevent', loadChildren: './pages/tutorial/tutorialevent/tutorialevent.module#TutorialeventPageModule' },
  { path: 'tutorialtask', loadChildren: './pages/tutorial/tutorialtask/tutorialtask.module#TutorialtaskPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

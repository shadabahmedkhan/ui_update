import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppComponent } from "./app.component";
//Layouts 
import { HeaderComponent } from "./layouts/header/header.component";
import { AppLayoutComponent } from "./layouts/app-layout.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
//end of layouts
import { LoginComponent } from "./pages/login/login.component";
import { PrivateComponent } from "./pages/private/private.component";
import { RegisterComponent } from "./pages/register/register.component";
import { MainComponent } from "./pages/main/main.component";
import { PasswordResetComponent } from "./pages/password-reset/password-reset.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { Error404Component } from "./pages/error404/error404.component";
import { PayorsComponent } from './pages/payors/payors.component'
import { UsersComponent } from './pages/users/users.component'
import { ClaimsComponent } from './pages/claim/claim.component'
import { AuthGuard } from "./services/services.barrel";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
import { ClaimEpisodeComponent } from './components/claim-episode/claim-episode.component';
import { ClaimPrescriptionsComponent } from './components/claim-prescriptions/claim-prescriptions.component';
import { ClaimImagesComponent } from './components/claim-images/claim-images.component';
import { ClaimNoteComponent } from './components/claim-note/claim-note.component';
import { ClaimPaymentComponent } from './components/claim-payment/claim-payment.component';
import { ClaimScriptNoteComponent } from './components/claim-script-note/claim-script-note.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/private',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
      , {
        path: 'recover-lost-password',
        component: PasswordResetComponent
      },{
        path: 'resetpassword',
        component: ChangePasswordComponent
      }
      , {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'main',
        canActivate:[AuthGuard],
        canActivateChild:[AuthGuard],
        children: [
        {
          path: 'private',
          component: PrivateComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        },
        {
          path: 'payors',
          component: PayorsComponent
        },
        {
          path: 'users',
          component: UsersComponent          
        },
        {
          path: 'claims',
          component: ClaimsComponent
        }
      ]
    }, 
   
    ]
  },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}

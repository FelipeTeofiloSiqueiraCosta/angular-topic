import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWrapperComponent } from './pages/logged-area/main-wrapper/main-wrapper.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { InitialComponent } from './pages/initial/initial.component';
import { TopicComponent } from './pages/logged-area/topic/topic.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'initial',
    pathMatch: 'prefix',
  },
  {
    path: 'initial',
    component: InitialComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
    canActivate: [],
  },
  {
    path: 'logged-area',
    component: MainWrapperComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sub-topic/:topicId',
        component: TopicComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { MovieParentComponent } from './movie-parent/movie-parent.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotiComponent } from './admin/noti/noti.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminJobComponent } from './admin-job/admin-job.component';
import { MovieAdminComponent } from './movie-admin/movie-admin.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { JobAdminComponent } from './job-admin/job-admin.component';
import { AdsAdminComponent } from './ads-admin/ads-admin.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieParentComponent },
  { path: 'jobs', component: JobComponent },

  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'notifications', component: NotiComponent
  },
  {
    path: 'posts', component: PostComponent
  },
  {
    path: 'moviesadmin', component: MovieAdminComponent
  },
  {
    path: 'movieupdate', component: UpdateMovieComponent
  },

  { path: 'register', component: RegisterComponent },
  { path: 'loginadminurl', component: LoginComponent }, {
    path: 'jobadmin', component: JobAdminComponent
  }, {
    path:
      'adsadmin', component: AdsAdminComponent
  }
  ,
  {
    path: 'moviedetail', component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

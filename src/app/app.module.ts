import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { MovieComponent } from './movie/movie.component';
import { MovieParentComponent } from './movie-parent/movie-parent.component';
import { localService } from '../assets/localservice';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AdminComponent } from './admin/admin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AdsComponent } from './ads/ads.component';
import { MainComponent } from './main/main.component';
import { AdsDownloadComponent } from './ads-download/ads-download.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotiComponent } from './admin/noti/noti.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminJobComponent } from './admin-job/admin-job.component';
import { ChartComponent } from './chart/chart.component';
// import { authSet } from 'src/assets/authset';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MovieAdminComponent } from './movie-admin/movie-admin.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { JobAdminComponent } from './job-admin/job-admin.component';
import { AdsAdminComponent } from './ads-admin/ads-admin.component'
@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    FooterComponent,
    HomeComponent,
    JobComponent,
    MovieComponent,
    MovieParentComponent,
    MovieDetailComponent,
    AdminComponent,
    NavbarComponent,
    AdsComponent,
    MainComponent,
    AdsDownloadComponent,
    AccountComponent,
    DashboardComponent,
    NotiComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    AdminJobComponent,
    ChartComponent,
    MovieAdminComponent,
    UpdateMovieComponent,
    JobAdminComponent,
    AdsAdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ImageCropperModule
  ],
  //   , {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: authSet,
  //   multi: true
  // }
  providers: [localService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule, CollapseModule, WavesModule, InputsModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'angular-bootstrap-md'
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FlipperComponent } from './components/flipper/flipper.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartsComponent } from './charts/charts.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'table', component: TableComponent },
  { path: 'map', component: MapComponent },
  { path: 'form', component: FormComponent },
  { 
    path: 'heroes',
    component: DashboardComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4OFGxIjT16Y1AkANOhxxyGybJFgLol5I'
    }),
    MDBBootstrapModule.forRoot(),
    CollapseModule,
    WavesModule,
    InputsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,

    BreadcrumbComponent, FlipperComponent, LearnMoreComponent, FooterComponent, ChartsComponent, MapComponent, TableComponent, FormComponent
  ],

  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})


export class AppModule { }

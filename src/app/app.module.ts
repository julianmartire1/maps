import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { NguiMapModule} from '@ngui/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule , Router, ActivatedRoute } from '@angular/router';
import { MapComponent } from './map/map.component';

const MiRuteo = [
  {path: '' , component: MapComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    RouterModule.forRoot(MiRuteo),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,/*
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBtKGWR5QjVkX2rWJAmdCjbfsaPZkmQqbk'}),
*/
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBUHx4bqg1yVT_KgjnLbeqlD40DUGSw57Q'})
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }

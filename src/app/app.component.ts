import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DirectionsRenderer } from '@ngui/map';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  providers: [Location,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {/*
  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;
  directionsRenderer: google.maps.DirectionsRenderer;
  directionsResult: google.maps.DirectionsResult;
  direction: any = {
    origin: '',
    destination: '',
    travelMode: 'WALKING'
  };
  formulario: FormGroup;
  mensajeError: string;
  spinner: boolean;
  localId: string;

  mostrarFormulario: boolean;
  locales: Array<any>;
  localActual: any;

  constructor(private formBuilder: FormBuilder, public Location: Location, private cdr: ChangeDetectorRef, public ActivatedRoute: ActivatedRoute) {
    this.formulario = this.formBuilder.group({
      'localOrigen': [null, Validators.compose([Validators.required])],
      'localDestino': [null, Validators.compose([Validators.required])]
    });
    this.mensajeError = null;
    navigator.geolocation.getCurrentPosition(position => {
      this.direction.origin = position.coords.latitude + ',' + position.coords.longitude;
      console.log(this.direction.origin);
    });
  }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(parametros => {
      this.localId = parametros['id'];
      this.taerLocales();
    });
    this.directionsRendererDirective['initialized$'].subscribe(directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });
  }

  taerLocales() {
    this.spinner = true;
    this.spinner = false;
    this.locales.push([id => 1, nombre => "Microcentro", direccion => "Sarmiento 858, Buenos Aires"]);
    this.locales.push([id => 2, nombre => "Palermo", direccion => "Jorge Luis Borges 2454, Buenos Aires"]);
    this.locales.push([id => 3, nombre => "Belgrano", direccion => "Avenida Cabildo 2629, Buenos Aires"]);

    this.obtenerLocalActual();
    this.direction.destination = this.localActual.direccion;

  }

  obtenerLocalActual() {
    for (let index = 0; index < this.locales.length; index++) {
      if (this.locales[index].id == this.localId) {
        this.localActual = this.locales[index];
      }
    }
  }

  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges();
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);
  }*/

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductoFormComponent } from './components/productos/producto-form/producto-form.component';
import { ProductoGaleriaComponent } from './components/productos/producto-galeria/producto-galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';
import { PedidoFormComponent } from './components/pedidos/pedido-form/pedido-form.component';
import { PedidoListComponent } from './components/pedidos/pedido-list/pedido-list.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { ProductoDetallesComponent } from './components/productos/producto-detalles/producto-detalles.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ProductoFormComponent,
    ProductoGaleriaComponent,
    NavbarComponent,
    ClienteFormComponent,
    PedidoFormComponent,
    PedidoListComponent,
    ClienteListComponent,
    ProductoDetallesComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

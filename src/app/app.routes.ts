import {RouterModule, Routes} from '@angular/router';
import { ProductoGaleriaComponent } from './components/productos/producto-galeria/producto-galeria.component';
import { ProductoFormComponent } from './components/productos/producto-form/producto-form.component';
import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { PedidoFormComponent } from './components/pedidos/pedido-form/pedido-form.component';
import { PedidoListComponent } from './components/pedidos/pedido-list/pedido-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { ProductoCatalogoComponent } from './components/productos/producto-catalogo/producto-catalogo.component';

const APP_ROUTES: Routes = [
    {path: 'productos/galeria', component: ProductoGaleriaComponent},
    {path: 'productos/catalogo', component: ProductoCatalogoComponent},
    {path: 'productos/nuevo', component: ProductoFormComponent},
    {path: 'productos/editar/:id', component: ProductoEditComponent},
    {path: 'clientes/lista', component: ClienteListComponent},
    {path: 'clientes/nuevo', component: ClienteFormComponent},
    {path: 'pedidos/lista', component: PedidoListComponent},
    {path: 'pedidos/nuevo', component: PedidoFormComponent},
    {path: 'auth/acceso', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'auth/registro', component: RegisterComponent},
    {path: '', component: DefaultComponent},
    {path: '**', component: DefaultComponent},
    {path: 'home', component: DefaultComponent}

];

// tslint:disable-next-line:variable-name
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

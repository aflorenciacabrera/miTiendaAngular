import {RouterModule, Routes} from '@angular/router';
import { ProductoGaleriaComponent } from './components/productos/producto-galeria/producto-galeria.component';
import { ProductoFormComponent } from './components/productos/producto-form/producto-form.component';
import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { PedidoFormComponent } from './components/pedidos/pedido-form/pedido-form.component';
import { PedidoListComponent } from './components/pedidos/pedido-list/pedido-list.component';

const APP_ROUTES: Routes = [
    {path: 'productos/galeria', component: ProductoGaleriaComponent},
    {path: 'productos/nuevo', component: ProductoFormComponent},
    {path: 'clientes/lista', component: ClienteListComponent},
    {path: 'clientes/nuevo', component: ClienteFormComponent},
    {path: 'pedidos/lista', component: PedidoListComponent},
    {path: 'pedidos/nuevo', component: PedidoFormComponent}
];

// tslint:disable-next-line:variable-name
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

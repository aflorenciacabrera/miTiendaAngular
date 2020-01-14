import {RouterModule, Routes} from '@angular/router';
import { ProductoGaleriaComponent } from './components/productos/producto-galeria/producto-galeria.component';
import { ProductoFormComponent } from './components/productos/producto-form/producto-form.component';
import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';

const APP_ROUTES: Routes = [
    {path: 'productos/galeria', component: ProductoGaleriaComponent},
    {path: 'productos/nuevo', component: ProductoFormComponent},
    {path: 'clientes/lista', component: ClienteFormComponent},
    {path: 'clientes/nuevo', component: ClienteFormComponent}
];

// tslint:disable-next-line:variable-name
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

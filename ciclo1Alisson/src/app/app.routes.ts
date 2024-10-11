import { ArquivosEtapaComponent } from './componentes/arquivos-etapa/arquivos-etapa.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'ArquivosEtapa/:id',
    component: ArquivosEtapaComponent
  }
];

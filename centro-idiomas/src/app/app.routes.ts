import { Routes } from '@angular/router';
import { Nosotros } from './pages/nosotros/nosotros';
import { OfertaIdiomas } from './pages/oferta-idiomas/oferta-idiomas';
import { NivelesModalidades } from './pages/niveles-modalidades/niveles-modalidades';
import { Docentes } from './pages/docentes/docentes';
import { Estudiantes } from './pages/estudiantes/estudiantes';
import { Novedades } from './pages/novedades/novedades';

export const routes: Routes = [
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' },
  { path: 'nosotros', component: Nosotros },
  { path: 'oferta-idiomas', component: OfertaIdiomas },
  { path: 'niveles-modalidades', component: NivelesModalidades },
  { path: 'docentes', component: Docentes },
  { path: 'estudiantes', component: Estudiantes },
  { path: 'novedades', component: Novedades }
];
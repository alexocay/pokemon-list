import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

const routes: Routes = [
  { path: 'home', component: PokeTableComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

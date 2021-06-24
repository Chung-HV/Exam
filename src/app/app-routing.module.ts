import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeAddComponent } from './awesome-add/awesome-add.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeUpdateComponent } from './awesome-update/awesome-update.component';

const routes: Routes = [
  {
    path: 'awesome-list',
    component: AwesomeListComponent,
  },
  {
    path: 'awesome-add',
    component: AwesomeAddComponent,
  },
  {
    path: 'awesome-update/:id',
    component: AwesomeUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

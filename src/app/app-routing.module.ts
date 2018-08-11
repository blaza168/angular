import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicComponentComponent} from './components/basic-component/basic-component.component';
import {ChildComponent} from './components/child/child.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BasicComponentComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent
      }
    ]
  },
  {
    path: '**',
    component: BasicComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamplePageComponent} from './pages/example-page/example-page.component';

const routes: Routes = [
  { path: 'example-feature', component: ExamplePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionRoutingModule {}

import { NgModule } from '@angular/core';
import {ExamplePageComponent} from './pages/example-page/example-page.component';
import {SharedModule} from '../../shared/shared.module';
import {TransactionRoutingModule} from './example-feature-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TransactionRoutingModule
  ],
  declarations: [
    ExamplePageComponent
  ]
})
export class ExampleFeatureModule { }

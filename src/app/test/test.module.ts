import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';
import { TestInfoComponent } from './test-info/test-info.component';



@NgModule({
  declarations: [TestComponent, TestInfoComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }

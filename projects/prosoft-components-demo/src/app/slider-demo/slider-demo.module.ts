import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { PsFormBaseModule } from '@prosoft/components/form-base';
import { PsFormFieldModule } from '@prosoft/components/form-field';
import { PsSliderModule } from '@prosoft/components/slider';

import { DemoPsFormsService } from '../common/demo-ps-form-service';
import { InvalidErrorStateMatcher } from '../common/invalid-error-state-matcher';
import { SliderDemoComponent } from './slider-demo.component';

@NgModule({
  declarations: [SliderDemoComponent],
  imports: [
    PsFormBaseModule.forRoot(DemoPsFormsService),
    CommonModule,
    PsFormFieldModule,
    PsSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    PsFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: SliderDemoComponent,
      },
    ]),
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: InvalidErrorStateMatcher }],
})
export class SliderDemoModule {}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { FactoryPageLayoutComponent } from 'src/app/components';

type CheckSerialResult = "success" | "fail" | "not-checked";
@Component({
  selector: 'app-factory-check-serial',
  standalone: true,
  imports: [
    CommonModule,
    FactoryPageLayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './factory-check-serial.component.html',
  styleUrl: './factory-check-serial.component.css'
})
export class FactoryCheckSerialComponent {
  form = new FormGroup({
    serial: new FormControl(''),
  });

  checkDone: CheckSerialResult = "not-checked";

  checkCoupon() {
    const serial = this.form?.value.serial;
    this.checkDone = "success";
  }

}

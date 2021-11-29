import { Component, OnInit } from '@angular/core';
import { StepType } from '../step.type';
import { StepperService } from '../stepper.service';
import { ArrayService } from '../array.service';
import { Observable } from 'rxjs';

export var dataArray: any = [];

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  stepsObservable!: any;
  currentStep!: Observable<StepType>;
  constructor(private stepperServcie: StepperService) {
  }

  ngOnInit() {
    this.stepsObservable = this.stepperServcie.getStepper();
    this.currentStep = this.stepperServcie.getCurrentStep();
    console.log(this.currentStep)
  }

  stepClickHandle(stepNumber: StepType) {
    console.log(stepNumber);
    this.stepperServcie.setCurrentStep(stepNumber);
  }
}

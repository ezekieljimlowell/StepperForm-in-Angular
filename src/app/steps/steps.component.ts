import { Component, OnInit } from '@angular/core';
import { StepType } from '../step.type';
import { StepperService } from '../stepper.service';
import { Observable } from 'rxjs';
import { mergeAll } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export var dataArray: any = [];

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  stepsObservable!: Observable<StepType[]>;
  currentStep!: Observable<StepType>;
  //stepNumber!: number;

  constructor(private stepperServcie: StepperService, private http: HttpClient) { 
    this.http.get("https://jsonplaceholder.typicode.com/todos?userId=1").subscribe((data:any) => dataArray.push(data));
  }

  ngOnInit() {
    
    console.log(dataArray);
    this.stepsObservable = this.stepperServcie.getStepper();
    this.currentStep = this.stepperServcie.getCurrentStep();
  }

  stepClickHandle(stepNumber: StepType) {
    console.log(stepNumber);
    this.stepperServcie.setCurrentStep(stepNumber);
  }
}

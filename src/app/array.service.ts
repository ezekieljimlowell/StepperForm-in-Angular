import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { StepType } from './step.type';
import { HttpClient } from '@angular/common/http';
import { dataArray } from './steps/steps.component';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  STEPS: Array<object> = [
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: false },
    { id: 4, completed: false },
    { id: 5, completed: false },
    { id: 6, completed: false },
    { id: 7, completed: false }
  ]

  stepperBehaviour = this.STEPS;
  addedStep: any = [];
  currentStep: any;
  previousStep: any;
  index: number = 0;

  constructor(private http: HttpClient) {
    this.addedStep.push(this.STEPS[this.index]);
    this.currentStep = this.addedStep.pop();
    console.log(this.currentStep)
  }

  setCurrentStep(step: StepType): void {
    this.addedStep.push(step);
    this.currentStep = this.addedStep.pop();
    console.log(this.currentStep);
  }

  
  getCurrentStep(): any {
    console.log(this.currentStep)
    return this.currentStep;
  }

  
  getStepper(): any {
    console.log(this.stepperBehaviour)
    return this.stepperBehaviour;
  }

  
  nextStep(): void {
    const index = this.currentStep.id;
    if (index < this.stepperBehaviour.length) {
      this.addedStep.push(this.stepperBehaviour[index]);
      this.currentStep = this.addedStep.pop();
      console.log(this.currentStep)
    }
  }

  setPreviousStep(): void {
    const index = this.currentStep.id - 1;
    if(index < this.stepperBehaviour.length) {
      this.addedStep.push(this.stepperBehaviour[index]);
      this.previousStep = this.addedStep.pop();
      console.log(this.previousStep);
    }
  }

  isFirstStep(): boolean {
    return this.previousStep.id === -1;
  }

  isLastStep(): boolean {
    return this.currentStep.id === this.stepperBehaviour.length;
  }

}


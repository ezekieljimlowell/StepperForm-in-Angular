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
  currentStep: any = null;
  previousStep$: any = null;

  constructor(private http: HttpClient) {
    this.currentStep.push(this.stepperBehaviour[0]);
    console.log(this.currentStep)
  }

  /*setCurrentStep(step: StepType): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<StepType> {
    return this.currentStep$.asObservable()
  }

  getStepper(): Observable<StepType[]> {
    return this.stepperBehaviour$.asObservable()
  }

  nextStep(): void {
    const index = this.currentStep$.value.id;
    if (index < this.stepperBehaviour$.value.length) {
      this.currentStep$.next(this.stepperBehaviour$.value[index])
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.id === this.stepperBehaviour$.value.length;
  }*/

}


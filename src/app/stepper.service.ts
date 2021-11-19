import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepType } from './step.type';
import { HttpClient } from '@angular/common/http';
import { dataArray } from './steps/steps.component';

const STEPS = [
  { id: 1, completed: false },
  { id: 2, completed: false },
  { id: 3, completed: false }
]

//const API_TODOS = "https://jsonplaceholder.typicode.com/todos";

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  //STEPPER: any = dataArray.flat();

  constructor(private http: HttpClient) {
    this.currentStep$.next(this.stepperBehaviour$.value[0]);
    //this.http.get<BehaviorSubject<StepType[]>>("https://jsonplaceholder.typicode.com/todos?userId=1").pipe(data => this.STEPPER = data)
  }

  stepperBehaviour$: BehaviorSubject<StepType[]> = new BehaviorSubject<StepType[]>(STEPS);
  currentStep$: BehaviorSubject<any> = new BehaviorSubject<any>(null);



  setCurrentStep(step: StepType): void {
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
  }

}


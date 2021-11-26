import { Component, OnInit, ViewChild } from '@angular/core';
import { StepType } from '../step.type';
import { Subscription } from 'rxjs';
import { StepperService } from '../stepper.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArrayService } from '../array.service';

var taskToBeAdded: any;

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {
  todos: Array<string> = [];
  local: any = [];
  checkedFood: any = [];

  currentStep!: StepType;
  currentStepSubscription!: Subscription;

  constructor(private stepperService: StepperService, 
    private router: Router, private http: HttpClient, private arrayService: ArrayService) { }

  ngOnInit() {
    this.currentStepSubscription = this.stepperService.getCurrentStep().subscribe((step: StepType) => {
      this.currentStep = step;
    })
    const localStore = () => {
      if (this.todos.length > 0) {
        for (let i = 0; i < this.todos.length; i++) {
          localStorage.setItem(this.todos[i], this.todos[i]);
          var needToSave = localStorage.getItem(this.todos[i]);
          console.log(needToSave);
          console.log(this.local)
          needToSave && this.local.push(needToSave);
        }
      }
    };
  }

  nextStepper() {
    if (!this.stepperService.isLastStep()) {
      this.stepperService.nextStep();
    }
    else {
      this.onSubmit();
    }
  }

  previousStep() {
    
  }

  showButtonLabel() {
    return !this.stepperService.isLastStep() ? 'Continue' : 'Finish';
  }

  ngOnDestroy(): void {
    this.currentStepSubscription.unsubscribe();
  }

  onSubmit() {
    this.router.navigate(['/complete']);
  }

  submit() {
    if (taskToBeAdded !== undefined && taskToBeAdded !== "") {
      this.todos.push(taskToBeAdded);
      this.todos = [...new Set(this.todos)];
    }
  }

  onTaskChange(event: any) {
      taskToBeAdded = event.target.value;
  }

  chekcFood(values: any) {
    if(values.target.checked) {
      console.log(values.target.value)
      this.checkedFood.push(values.target.value)
      console.log(this.checkedFood)
    }
    else {
      this.checkedFood.splice(this.checkedFood.indexOf(values.target.value), 1)
    }
  }

}

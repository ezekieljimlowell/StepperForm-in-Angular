import { Component, OnInit } from '@angular/core';
import { StepType } from '../step.type';
import { Subscription } from 'rxjs';
import { StepperService } from '../stepper.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {
  currentStep!: StepType;
  currentStepSubscription!: Subscription;

  constructor(private stepperService: StepperService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.currentStepSubscription = this.stepperService.getCurrentStep().subscribe((step: StepType) => {
      this.currentStep = step;
    })
  }

  nextStepper() {
    if (!this.stepperService.isLastStep()) {
      this.stepperService.nextStep();
    }
    else {
      this.onSubmit();
    }
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
}

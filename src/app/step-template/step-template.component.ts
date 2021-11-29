import { Component, OnInit, Input } from '@angular/core';
import { StepType } from '../step.type';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss']
})
export class StepTemplateComponent implements OnInit {
  @Input() step!: StepType;

  constructor() { 
    console.log(this.step)
  }

  ngOnInit(): void {
    
  }

  onCompleteStep(event: any) {
    if(event.target.checked) {
      this.step.completed = true;
      console.log(this.step)
    }
    else {
      this.step.completed = false;
    }
  }

}

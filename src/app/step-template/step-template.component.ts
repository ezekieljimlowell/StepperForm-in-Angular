import { Component, OnInit, Input } from '@angular/core';
import { StepType } from '../step.type';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss']
})
export class StepTemplateComponent implements OnInit {
  @Input() step!: StepType;

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteStep() {
    this.step.completed = true;
  }

}

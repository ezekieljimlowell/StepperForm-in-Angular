import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { StepsComponent } from './steps/steps.component';
import { CompletePageComponent } from './complete-page/complete-page.component';
import { StepTemplateComponent } from './step-template/step-template.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxContextModule } from 'ngx-context';
import { FoodFormComponent } from './food-form/food-form.component';
import { TodosFormComponent } from './todos-form/todos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    StepsComponent,
    CompletePageComponent,
    StepTemplateComponent,
    FoodFormComponent,
    TodosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxContextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

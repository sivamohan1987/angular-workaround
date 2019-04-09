import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { ChildComponent } from './child/child.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  { path: 'ngOnChanges', component: WorkoutsComponent },
  { path: 'ngOnChanges/:page', component: WorkoutsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ReversePipe,
    ChildComponent,
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

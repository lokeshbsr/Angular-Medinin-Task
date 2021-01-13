import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule} from '@angular/material/slider';
import {MatCardModule } from '@angular/material/card'; 
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material';
import { PatientRegistrationComponent, DialogOverviewExampleDialog, PatinetregistrationDoneDialog } from './patient-registration/patient-registration.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ScanFaceComponent } from './scan-face/scan-face.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    ScanFaceComponent,
    DialogOverviewExampleDialog,
    PatinetregistrationDoneDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    CommonModule
  ],
  entryComponents: [DialogOverviewExampleDialog,PatinetregistrationDoneDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

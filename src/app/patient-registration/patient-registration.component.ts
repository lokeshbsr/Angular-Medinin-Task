import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit{

  patientData = [
    {
      name: 'Baskar rao',
      dob: '18-AUG-1954',
      age:'63',
      gender:'MALE',
      phoneNo:'+91 7995237342',
      allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
      emergencyContactName:'NANDINI VEDA',
      emergencyContactRel:'Mother',
      emergencyContactPhnNo:'+91 7995237342',
      insuranceProviderName:'AETNA HEALTH',
      insurancePlan:'Active Health Plan',
      address:'2930 Chestnut st, Philadelphia, 19104',
      lastVisitedOn:'Last Visit 12-Sept-18'
    },
    {
      name: 'Sunil P',
      dob: '18-AUG-1954',
      age:'63',
      gender:'MALE',
      phoneNo:'+91 7995237342',
      allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
      emergencyContactName:'NANDINI VEDA',
      emergencyContactRel:'Mother',
      emergencyContactPhnNo:'+91 7995237342',
      insuranceProviderName:'AETNA HEALTH',
      insurancePlan:'Active Health Plan',
      address:'2930 Chestnut st, Philadelphia, 19104',
      lastVisitedOn:'Last Visit 12-Sept-18'
    },
    {
     name: 'Neeraj Nanda',
     dob: '18-AUG-1954',
     age:'63',
     gender:'MALE',
     phoneNo:'+91 7995237342',
     allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
     emergencyContactName:'NANDINI VEDA',
     emergencyContactRel:'Mother',
     emergencyContactPhnNo:'+91 7995237342',
     insuranceProviderName:'AETNA HEALTH',
     insurancePlan:'Active Health Plan',
     address:'2930 Chestnut st, Philadelphia, 19104',
     lastVisitedOn:'Last Visit 12-Sept-18'
   },
   {
     name: 'Suresh Pattu',
     dob: '18-AUG-1954',
     age:'63',
     gender:'MALE',
     phoneNo:'+91 7995237342',
     allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
     emergencyContactName:'NANDINI VEDA',
     emergencyContactRel:'Mother',
     emergencyContactPhnNo:'+91 7995237342',
     insuranceProviderName:'AETNA HEALTH',
     insurancePlan:'Active Health Plan',
     address:'2930 Chestnut st, Philadelphia, 19104',
     lastVisitedOn:'Last Visit 12-Sept-18'
   },
   {
     name: 'Pooja Fernandes',
     dob: '18-AUG-1954',
     age:'63',
     gender:'FEMALE',
     phoneNo:'+91 7995237342',
     allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
     emergencyContactName:'NANDINI VEDA',
     emergencyContactRel:'Mother',
     emergencyContactPhnNo:'+91 7995237342',
     insuranceProviderName:'AETNA HEALTH',
     insurancePlan:'Active Health Plan',
     address:'2930 Chestnut st, Philadelphia, 19104',
     lastVisitedOn:'Last Visit 12-Sept-18'
   },
   {
     name: 'Pooja Fernandes',
     dob: '18-AUG-1954',
     age:'63',
     gender:'FEMALE',
     phoneNo:'+91 7995237342',
     allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
     emergencyContactName:'NANDINI VEDA',
     emergencyContactRel:'Mother',
     emergencyContactPhnNo:'+91 7995237342',
     insuranceProviderName:'AETNA HEALTH',
     insurancePlan:'Active Health Plan',
     address:'2930 Chestnut st, Philadelphia, 19104',
     lastVisitedOn:'Last Visit 12-Sept-18'
   },
   {
     name: 'Pooja Fernandes',
     dob: '18-AUG-1954',
     age:'63',
     gender:'FEMALE',
     phoneNo:'+91 7995237342',
     allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
     emergencyContactName:'NANDINI VEDA',
     emergencyContactRel:'Mother',
     emergencyContactPhnNo:'+91 7995237342',
     insuranceProviderName:'AETNA HEALTH',
     insurancePlan:'Active Health Plan',
     address:'2930 Chestnut st, Philadelphia, 19104',
     lastVisitedOn:'Last Visit 12-Sept-18'
   },
   {
    name: 'Pooja Fernandes',
    dob: '18-AUG-1954',
    age:'63',
    gender:'FEMALE',
    phoneNo:'+91 7995237342',
    allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
    emergencyContactName:'NANDINI VEDA',
    emergencyContactRel:'Mother',
    emergencyContactPhnNo:'+91 7995237342',
    insuranceProviderName:'AETNA HEALTH',
    insurancePlan:'Active Health Plan',
    address:'2930 Chestnut st, Philadelphia, 19104',
    lastVisitedOn:'Last Visit 12-Sept-18'
  },
  {
    name: 'Pooja Fernandes',
    dob: '18-AUG-1954',
    age:'63',
    gender:'FEMALE',
    phoneNo:'+91 7995237342',
    allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
    emergencyContactName:'NANDINI VEDA',
    emergencyContactRel:'Mother',
    emergencyContactPhnNo:'+91 7995237342',
    insuranceProviderName:'AETNA HEALTH',
    insurancePlan:'Active Health Plan',
    address:'2930 Chestnut st, Philadelphia, 19104',
    lastVisitedOn:'Last Visit 12-Sept-18'
  },
  {
    name: 'Pooja Fernandes',
    dob: '18-AUG-1954',
    age:'63',
    gender:'FEMALE',
    phoneNo:'+91 7995237342',
    allergies:'Latex Allergy, Mold Allergy, PetAllergy, Pollen Allergy',
    emergencyContactName:'NANDINI VEDA',
    emergencyContactRel:'Mother',
    emergencyContactPhnNo:'+91 7995237342',
    insuranceProviderName:'AETNA HEALTH',
    insurancePlan:'Active Health Plan',
    address:'2930 Chestnut st, Philadelphia, 19104',
    lastVisitedOn:'Last Visit 12-Sept-18'
  }
    
  ];
  scanFace = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(){

  }

  openDialog(){
    this.scanFace = true;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      height:'400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onClick() {
    this.scanFace = false;
    const dialogRef = this.dialog.open(PatinetregistrationDoneDialog,
      {panelClass: 'full-width-dialog',maxWidth:'none',height:'100%'}
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'dialog-registration-done-dialog',
  templateUrl: 'dialog-registration-done-dialog.html',
})

export class PatinetregistrationDoneDialog {
  constructor(
    public dialogRef: MatDialogRef<PatinetregistrationDoneDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialog } from '../patient-registration/patient-registration.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-scan-face',
  templateUrl: './scan-face.component.html',
  styleUrls: ['./scan-face.component.css']
})
export class ScanFaceComponent implements OnInit {
  stream: any;

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) { }

  ngOnInit() {

      //add constraints object
      let constraints = { audio: false,
                          video: true}
  
      //call getUserMedia, 
      navigator.mediaDevices.getUserMedia(constraints).then((mediaStream)=>{
          let video = document.querySelector('video');
          this.stream = mediaStream;
          video.srcObject = mediaStream;
          video.play();
      }).catch((err)=>{
          console.log("yikes, and err!" + err.message);
      });
  
   }

  //  on close modal stop the stream from our device
   onCloseStopStram() {
    this.dialogRef.close();
    this.stream.getTracks().forEach((track)=>{
      if (track.readyState == 'live' && track.kind === 'video') {
          track.stop();
      }
    });
   }

}

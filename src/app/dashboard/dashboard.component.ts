import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { Dialog1Component } from '../dialog1/dialog1.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dialog: MatDialog) {}  

 // The MatDialog service can be used to open modal dialogs with Material Design styling and animations.=MatDialog


  ngOnInit() {
    
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    //MatDialogConfig
    //we are then creating an instance of MatDialogConfig, which will 
    //configure the dialog with a set of default behaviors

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

   
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };
  //dialogConfig.data
  // We can pass data to the dialog component by using the data property of the dialog configuration object.

    this.dialog.open(Dialog1Component, dialogConfig);
}
 
imdistroying:boolean=true;
 
takingvariable: string;
clicked(temprefvar){
  this.takingvariable=temprefvar.value;
}

  
}

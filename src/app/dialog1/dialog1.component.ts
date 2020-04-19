import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

 
  form: FormGroup;
  description:string;
  
  constructor(
    private fb: FormBuilder,    
    
    //Keeps track of the currently-open dialogs.  = MatDialogRef

      private dialogRef: MatDialogRef<Dialog1Component>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.description = data.description;
  }

  ngOnInit() {
      this.form = this.fb.group({
          description: [this.description, []],
          
      });
  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}

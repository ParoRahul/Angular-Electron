import { Component, Inject, OnInit } from '@angular/core';
/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */
import { DialogRef } from '../dialog/dialog.ref';
import { ComponentData } from '../common/component.data';


@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialog implements OnInit{

  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  dialogIcon:boolean = true;
  dialogIconName:string = 'warning';

  constructor(  public bucket: ComponentData,
                public dialogRef: DialogRef) {
      
  }

  ngOnInit(){
    if(this.bucket.data){
        this.message = this.bucket.data.message || this.message;
        if (this.bucket.data.buttonText) {
            this.confirmButtonText = this.bucket.data.buttonText.ok || this.confirmButtonText;
            this.cancelButtonText = this.bucket.data.buttonText.cancel || this.cancelButtonText;
        }
        /* if(data.dialogIconName){
          this.dialogIcon=true;
          this.dialogIconName = data.dialogIconName || this.dialogIconName;
        }
        else{
          this.dialogIcon=false;
        } */
    }

  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void{
    this.dialogRef.close(false);
  }

}

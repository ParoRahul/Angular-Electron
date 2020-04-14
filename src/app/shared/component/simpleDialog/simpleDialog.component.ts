import { Component, OnInit } from '@angular/core';

import { DialogRef } from '../../model/dialog.ref';
import { ComponentData } from '../../model/component.data';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simpleDialog.component.html',
  styleUrls: ['./simpleDialog.component.css']
})
export class SimpleDialogComponent implements OnInit {

  message: string = 'Are you sure?'
  confirmButtonText: string = 'Yes'
  cancelButtonText: string = 'Cancel'
  dialogIcon: boolean = true;
  dialogIconName: string = 'warning';

  constructor(  public bucket: ComponentData,
                public dialogRef: DialogRef) { }

  ngOnInit(){
    if ( this.bucket.data){
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

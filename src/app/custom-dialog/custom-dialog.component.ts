import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialog {

  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  dialogIcon:boolean = true;
  dialogIconName:string = 'warning';

  constructor(  @Inject(MAT_DIALOG_DATA) private data: any,
                private dialogRef: MatDialogRef<CustomDialog>) {
      if(data){
        this.message = data.message || this.message;
        if (data.buttonText) {
            this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
            this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
        if(data.dialogIconName){
          this.dialogIcon=true;
          this.dialogIconName = data.dialogIconName || this.dialogIconName;
        }
        else{
          this.dialogIcon=false;
        }
      }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}

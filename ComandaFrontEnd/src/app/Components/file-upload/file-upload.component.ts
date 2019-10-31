import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({});
  public file: File;
  public url = '../../assets/blankPick.png';
  @Input() message: string;
  @Input() displayUploadedFoto = true;
  @Output() fileSelected = new EventEmitter<File>();
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (item) => {
      this.file = item._file;
      this.fileSelected.emit(this.file);
    };
  }

  getRendererImage(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
          this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
  }
}
}

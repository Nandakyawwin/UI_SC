import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localService } from 'src/assets/localservice';

@Component({
  selector: 'app-ads-admin',
  templateUrl: './ads-admin.component.html',
  styleUrls: ['./ads-admin.component.css']
})
export class AdsAdminComponent implements OnInit {
  form: any;
  datas: any;
  constructor(private http: localService, private router: Router) {

  }
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: any) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  uploadImage() {
    const formData: any = new FormData();
    let file = this.dataURLtoFile(this.croppedImage, this.imageChangedEvent.target.files[0].name);
    formData.append('image', file, file.name);

    console.log(formData);
    this.http.PostAds(formData).subscribe(
    
      (response: any) => console.log(formData.image)
    )
  }

  dataURLtoFile(dataurl: any, filename: any) {

    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });

  }
  ngOnInit(): void {
    
  }

}


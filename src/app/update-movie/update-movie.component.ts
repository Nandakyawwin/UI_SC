import { Component } from '@angular/core';
import { localService } from 'src/assets/localservice';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {

  datas: any;
  constructor(private http: localService) {

  }
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
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

  uploadImage(datas: any) {
    const formData: any = new FormData();
    let file = this.dataURLtoFile(this.croppedImage, this.imageChangedEvent.target.files[0].name);
    formData.append('image', file, file.name);
    formData.append('name', datas.name);
    formData.append('Duration', datas.Duration);
    formData.append('category', datas.category);
    formData.append('rating', datas.rating);
    formData.append('creater', datas.creater);
    formData.append('overview', datas.overview);
    formData.append('episodes', datas.episodes);
    formData.append('trailer1', datas.trailer1);
    formData.append('trailer2', datas.trailer2);
    formData.append('trailer3', datas.trailer3);
    formData.append('Network', datas.Network);
    formData.append('age_rating', datas.age_rating);
    formData.append('weekly_download', datas.weekly_download);
    formData.append('download1Low', datas.download1Low);
    formData.append('download1Lowtext', datas.download1Lowtext);
    formData.append('download1High', datas.download1High);
    formData.append('download1Hightext', datas.download1Hightext);
    formData.append('download2Low', datas.download2Low);
    formData.append('download2Lowtext', datas.download2Lowtext);
    formData.append('download2High', datas.download2High);
    formData.append('download2Hightext', datas.download2Hightext);
    formData.append('download3Low', datas.download3Low);
    formData.append('download3Lowtext', datas.download3Lowtext);
    formData.append('download3High', datas.download3High);
    formData.append('download3Hightext', datas.download3Hightext);
    formData.append('download4Low', datas.download4Low);
    formData.append('download4Lowtext', datas.download4Lowtext);
    formData.append('download4High', datas.download4High);
    formData.append('download4Hightext', datas.download4Hightext);
    formData.append('download5Low', datas.download5Low);
    formData.append('download5Lowtext', datas.download5Lowtext);
    formData.append('download5High', datas.download5High);
    formData.append('download5Hightext', datas.download5Hightext);
    formData.append('download6Low', datas.download6Low);
    formData.append('download6Lowtext', datas.download6Lowtext);
    formData.append('download6High', datas.download6High);
    formData.append('download6Hightext', datas.download6Hightext);
    formData.append('download7Low', datas.download7Low);
    formData.append('download7Lowtext', datas.download7Lowtext);
    formData.append('download7High', datas.download7High);
    formData.append('download7Hightext', datas.download7Hightext);
    formData.append('download8Low', datas.download8Low);
    formData.append('download8Lowtext', datas.download8Lowtext);
    formData.append('download8High', datas.download8High);
    formData.append('download8Hightext', datas.download8Hightext);
    formData.append('download9Low', datas.download9Low);
    formData.append('download9Lowtext', datas.download9Lowtext);
    formData.append('download9High', datas.download9High);
    formData.append('download9Hightext', datas.download9Hightext);
    formData.append('download10Low', datas.download10Low);
    formData.append('download10Lowtext', datas.download10Lowtext);
    formData.append('download10High', datas.download10High);
    formData.append('download10Hightext', datas.download10Hightext);
    formData.append('encoder', datas.encoder);
    formData.append('translator', datas.translator);
    formData.append('uploader', datas.uploader);





    this.http.PostMoviebyAdmin(formData).subscribe(
      (response: any) => console.log(response)
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
  ngOnInit() {

    this.datas = new FormGroup({
      'name': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'image': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'Duration': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'category': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'rating': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'creater': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'discription': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'series': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'trailer1': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'trailer2': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'trailer3': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'Network': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'age_rating': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download1Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download1Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download1High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download1Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download2Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download2Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download2High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download2Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download3Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download3Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download3High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download3Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download4Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download4Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download4High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download4Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download5Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download5Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download5High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download5Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download6Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download6Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download6High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download6Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download7Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download7Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download7High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download7Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download8Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download8Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download8High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download8Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download9Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download9Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download9High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download9Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'download10Low': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download10Lowtext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download10High': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'download10Hightext': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),

      'translator': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'encoder': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ])),
      'uploader': new FormControl('', Validators.compose([
        Validators.minLength(70)
      ]))
    })

    // this.http.AdminPostmovie(data).subscribe
  }


}

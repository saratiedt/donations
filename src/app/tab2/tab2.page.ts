import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BaseService } from '../shared/services/base.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule],
})
export class Tab2Page implements OnInit {
  ionicForm!: FormGroup;
  base64Image: any;
  convertedImage: any;

  constructor(
    private service: BaseService,
    private _sanitizer: DomSanitizer,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ionicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      subtitle: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  loadImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Image = reader.result;

      // convert image to display
      this.convertedImage = this._sanitizer.bypassSecurityTrustResourceUrl(
        this.base64Image
      );
    };
  }

  submitForm() {
    console.log('bla', this.ionicForm);
  }
}

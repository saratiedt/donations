import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BaseService } from '../shared/services/base.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab2Page {
  constructor(private service: BaseService, private _sanitizer: DomSanitizer) {}

 base64Image: any;
 convertedImage: any;

  loadImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64Image = reader.result;

       // convert image to display
       this.convertedImage = this._sanitizer.bypassSecurityTrustResourceUrl(this.base64Image);
    };
  }
}

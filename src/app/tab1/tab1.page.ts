import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Donations } from '../shared/models/danation-case';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page {
  data: Donations = [
    {
      id: 1,
      title: 'Mila',
      subtitle: 'gatinha atropelada',
      description:
        'Mila foi atropelada e precisa urgentemente de cuidados veterinários. ',
      image: 'assets/icon/gato.jpg',
    },
    {
      id: 2,
      title: 'Jack',
      subtitle: 'Cachorro com pata quebrada',
      description:
        'Jack foi atropelado e precisa urgentemente de cuidados veterinários. ',
      image: 'assets/icon/jack.jpg',
    },
  ];

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}

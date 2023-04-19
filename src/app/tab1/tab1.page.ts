import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BaseService } from '../shared/services/base.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page implements OnInit {
  data: any = [];
  constructor(private service: BaseService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((values) => {
      this.data = values;
    });
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}

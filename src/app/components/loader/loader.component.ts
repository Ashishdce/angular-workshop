import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnDestroy {

  loader: boolean;
  loaderSubscription;
  constructor(private service: DataService) {
    this.loaderSubscription = this.service.$loader.subscribe(val => this.loader = val);
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}

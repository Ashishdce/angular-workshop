import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface Post {
  content: string;
  name: string;
  posted: Date;
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  posts;
  keys = [];
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.setLoader(true);
    this.service.getData().then(res => {
      this.posts = res;
      this.keys = Object.keys(this.posts).reverse();
      console.log(this.posts);
      this.service.setLoader(false);
    }).catch(err => {
      this.service.setLoader(false);
      console.log(err.message);
    });
  }
}

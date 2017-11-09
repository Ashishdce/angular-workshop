import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }
  post(content, name) {
    this.service.setLoader(true);
    const postObj = {
      content: content,
      name: name,
      posted: new Date()
    };
    this.service.setData(postObj).then(res => {
      console.log(res);
      this.service.setLoader(false);
    }).catch(err => {
      console.log(err.message);
      this.service.setLoader(false);
    });
  }
}

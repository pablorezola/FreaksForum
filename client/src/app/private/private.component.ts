import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  private:Boolean;

  constructor() { 
    this.private = false;
    console.log(this.private)
  }

  ngOnInit() {

  }

}

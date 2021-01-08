import { Component, OnInit, ViewChild } from '@angular/core';
//declare const Quill: any;
declare var $: any;
import * as $ from 'jquery';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model: string = '';
  constructor() {
        
  }
  
  
  ngOnInit() {
    console.log('test1');
    console.log($('body'));
  }
}

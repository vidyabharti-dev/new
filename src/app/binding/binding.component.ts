import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayingName:string="hii vidya";
  setValueForInput="true";

code=`displayingName:string="hii vidya" {{displayingName}} {{1*3}} ;`;
codeProperty=`  setValueForInput="true"`;

stylepro='32px';

proprttyStyle={'color':'red','width':'40px'};
codestyle=`proprttyStyle= { 'width':'400px', 'color':'red'}`;
codeProperty2=`proprttyClass={class1:true, class2:false}`;
}

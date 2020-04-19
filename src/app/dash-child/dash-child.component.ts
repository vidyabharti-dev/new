import { Component, OnInit, Input, OnChanges, SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-dash-child',
  templateUrl: './dash-child.component.html',
  styleUrls: ['./dash-child.component.css']
})


export class DashChildComponent implements OnInit,OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
@Input() childvar: string;
  constructor() { console.log("constructor");}
  person: Person;

////ngOnChanges called changes in @input property (every time , it called whenever changes in in that property)
////any changes like button , input property then docheck will be called ,(chnaging the our dom)

  ngOnChanges(){
    console.log("onchnages");
 
  }
  ngOnInit() { console.log("oninit");}
 ngDoCheck(){
   console.log("do check");
 }
ngAfterContentInit(){
  console.log("ngcontent init");
}
ngAfterContentChecked(){
  console.log("ngcontent checked");

}
ngAfterViewInit(){
  console.log("afterviewinit");
}
ngAfterViewChecked(){
  console.log("afterviewchecked");
}

clickedme(myvalue){
  console.log(myvalue.value+" jhii");

}


code = `   ////ngOnChanges called changes in @input property (every time , it called whenever changes in in that property)
////any changes like button , input property then docheck will be called ,(chnaging the our dom)

  ngOnChanges(){
    console.log("onchnages");
 
  }
  ngOnInit() { console.log("oninit");}
 ngDoCheck(){
   console.log("do check");
 }
ngAfterContentInit(){
  console.log("ngcontent init");
}
ngAfterContentChecked(){
  console.log("ngcontent checked");

}
ngAfterViewInit(){
  console.log("afterviewinit");
}
ngAfterViewChecked(){
  console.log("afterviewchecked");
}

clickedme(myvalue){
  console.log(myvalue.value+" jhii");

}`

code2= `@HostBinding('style.backgroundColor') bgColor;
@HostListener('click') onClickedPerforming(){
  this.bgColor='blue';
}`


dadads={
r:1
};

}

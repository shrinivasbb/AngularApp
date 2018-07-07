import { Component, OnInit, Optional } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 // template:`<p> This Home Template works</p>`,
  styleUrls: ['./home.component.scss'],
  animations:[
      trigger ('goals',[
        transition('*=>*',[
          query(':enter',style({ opacity:0}),{optional:true}),

          query(':enter',stagger('300ms',[
            animate('.6s ease-in',keyframes([
              style({opacity:0,transform:'translate(-75%)',offset:0}),
              style({opacity:.5,transform:'translate(35px)',offset:.3}),
              style({opacity:1,transform:'translate(0)',offset:1}),
            ]))
          ]),{optional:true})
        ])
      ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount:number;

  btnText:String='Add an Item';

  goalText:String='My First Life Goal';

  goals=['Goal1','Goal2','Goal3'];

  constructor() { }

  ngOnInit() {
    this.itemCount=this.goals.length;
  }

  addItem(){
   if (this.goalText!=""){
      this.goals.push(this.goalText);
      this.goalText='';
      this.itemCount=this.goals.length;
    }
  }

}

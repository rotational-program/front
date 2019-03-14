import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent  {


    private jumboInfo:string;
    private jumboHeader:string;
    private jumboBtn:string;
    private jumboBtnUrl:string;

    constructor(){
        this.jumboInfo ='This is a nt. Use it as a starting point to create something more unique.';
        this.jumboHeader = 'Hello, Rotational 2019!';
        this.jumboBtn = 'Learn more';
        this.jumboBtnUrl = "about";
    }
    }



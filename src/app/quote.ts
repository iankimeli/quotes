//import { BrowserPlatformLocation } from '@angular/platform-browser';

export class Quote {
  [x: string]: string | number | Date;
  //showInfo: boolean = false;
  static completeDate:Date;
  constructor(
    public id:number,
    public name:string,
    public title:string,
    public quote:string,
    public author:string,
    public datePosted: Date,
    public likes:number,
    public dislikes:number){
      
    }
}

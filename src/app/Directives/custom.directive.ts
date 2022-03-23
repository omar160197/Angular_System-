import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(myElement:ElementRef) { 
    // console.log(myElement.nativeElement.value);
    // if ( myElement.nativeElement ==)
    myElement.nativeElement.option.style.backgroundColor="red";
    
     
  }

}

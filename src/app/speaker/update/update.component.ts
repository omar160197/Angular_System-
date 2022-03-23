import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewspeakerService } from 'src/app/services/newspeaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnChanges, OnInit  {


@Input()speakerEmail='';
@Input()speaker: Speaker = new Speaker("","",0,'',"","");
@Input()itemCheck=false;


  
constructor(public  speakerser:NewspeakerService) { }
  ngOnInit(): void {
    // this.speakerser.getSpeakerByEmail(this.speakerEmail).subscribe(a=>this.speaker=a)
  }


ngOnChanges(changes: SimpleChanges): void {
    this.speakerser.getSpeakerByEmail(this.speakerEmail).subscribe(a=>this.speaker=a)  
}

save(){
  this.speakerser.updateSpeaker(this.speakerEmail,this.speaker).subscribe(a=>console.log(a));
}


}

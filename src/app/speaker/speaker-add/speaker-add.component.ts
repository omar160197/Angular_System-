import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NewspeakerService } from 'src/app/services/newspeaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit ,OnChanges {

  speaker: Speaker = new Speaker("","",0,'',"","");
  newspeakers:Speaker[]=[];

  constructor(public speakerser:NewspeakerService) {}
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  }
  onClick() { 
    this.speakerser.addSpeaker(this.speaker).subscribe()
  }


}

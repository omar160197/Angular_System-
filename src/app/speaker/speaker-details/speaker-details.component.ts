import { Component, OnInit,Input } from '@angular/core';
import { NewspeakerService } from 'src/app/services/newspeaker.service';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
  @Input() speaker:Speaker=  new Speaker("","",0,'',"","");
  @Input() speakerEmail="";
  @Input() speakerId='';
  constructor(public newservice:NewspeakerService) { }

  
  
  ngOnInit(): void {
  }

}

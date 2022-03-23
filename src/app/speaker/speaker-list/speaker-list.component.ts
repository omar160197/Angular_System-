import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewspeakerService } from 'src/app/services/newspeaker.service';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

  speakers:Speaker[]=[];


  speakerDetails:Speaker= this.speakers[0];

  public searchFilter: any = '';
  public query:string='';

  speakermail:string='';
  check:boolean=false;

  constructor(public newservice:NewspeakerService) { }

  saveSpeaker(s:Speaker){
    this.speakers.push(s)
  }

  saveSpeakerAfterDelete(s:any){
    this.speakers=s;
  }

  showDetails(s:Speaker){
    this.speakerDetails=s
  }

  hidden = false;
  viewImage() {
    this.hidden = !this.hidden;
  }



  ngOnInit(): void {
   this.newservice.getAllSpeaker().subscribe(a=>{
    this.speakers=a.filter(structure =>{
     return ('address' in structure)   
    });
   });

  }


}



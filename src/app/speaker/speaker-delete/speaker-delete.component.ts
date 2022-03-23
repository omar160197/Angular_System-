import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { NewspeakerService } from 'src/app/services/newspeaker.service';

@Component({
  selector: 'app-speaker-delete',
  templateUrl: './speaker-delete.component.html',
  styleUrls: ['./speaker-delete.component.css']
})
export class SpeakerDeleteComponent implements OnInit {
 //1-declare event emitter datatype
//  @Output() speakerDelete: EventEmitter<Speaker> = new EventEmitter<Speaker>()

//  @Output() speakerDelete =new EventEmitter()

 
 @Input() speakerEmail='';

  // @Input() 

  constructor(public speakerser:NewspeakerService) { }
  speakers:Speaker[]=[];
  newSpeaker:Speaker[]=[];

  delete(){
    this.speakerser.delete(this.speakerEmail).subscribe(
      a=>console.log(`speaker ${this.speakerEmail} deleted`)
    );
  }

  // delete(id:any, i:any) {
  //   console.log(id);
  //   if(window.confirm('Do you want to go ahead?')) {
  //     this.speakerser.deleteBook(id).subscribe((res) => {
  //       this.Books.splice(i, 1);
  //     })
  //   }
  // }
  
  ngOnInit(): void {
    this.speakerser.getAllSpeaker().subscribe(a=>this.speakers=a)
    this.newSpeaker=this.speakers;
  }

}

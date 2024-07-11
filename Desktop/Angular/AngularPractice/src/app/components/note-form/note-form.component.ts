import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteComponent } from 'src/app/services/note/note.component';


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit{
// export class NoteFormComponent {
  noteForm!: FormGroup;
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
      this.noteForm = this.formBuilder.group({
        id: 1,
        this: ['', Validators.required],
        content: ['']
      })
  }
  // subName: string ='Science';
  // subCourse :string ='Angular18';

  // changeSubCourse(){
  //   this.subCourse = 'Html';
  // }
}


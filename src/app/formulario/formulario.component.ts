import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsService: PostsService) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      fecha: new FormControl(new Date().toLocaleDateString('en-CA'), [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.formulario.reset();
  }

}

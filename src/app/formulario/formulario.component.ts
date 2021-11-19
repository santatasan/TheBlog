import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsService: PostsService, private router: Router) {

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
    this.formulario.value.fecha = new Date(this.formulario.value.fecha);
    this.formulario.value.categoria = this.formulario.value.categoria.toLowerCase();
    this.postsService.agregar(this.formulario.value);
    this.formulario.reset();
    Swal.fire({
      title: 'Post subido',
      text: 'El post ya está esperando a que lo lean',
      icon: 'success',
      showConfirmButton: false,
      timer: 3500,
    })
    setTimeout(() => {
      this.router.navigate(['/blog']);
    }, 3700);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {} from './catalogo.json'
@Component({
  selector: 'aby-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuario: string; 

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.params['user'] 
  }

  onClickIr() {
    this.router.navigate(['/home'])
    //this.router.navigateByUrl('https://github.com/ReactiveX/rxjs/tree/6.x')
  }
}

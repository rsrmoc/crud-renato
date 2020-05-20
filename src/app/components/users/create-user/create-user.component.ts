import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: User = {
    nm_usuario: '',
    nome: '',
    avatar: ''
  }
 
  response: User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  save(){
    console.log(this.request);
    this.userService.createUser(this.request).subscribe(res => {
      this.response =res;
      alert('Usuario criado com sucesso!!!');
      this.router.navigate(["/users"]);
    })
  } 

}

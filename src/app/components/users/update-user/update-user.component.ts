import { User } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { tap } from 'rxjs/operators';
 


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request: User;
 

  constructor( private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  
    this.userService.getUser(this.id).subscribe((request: User) => {

      this.request = request[0];
      console.log(this.request);

      });

  }

  update(){
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      console.log(res);
      alert('Atualizado Codigo ('+this.id+')');
      this.router.navigate(["/users"]);
      /*
      this.userService.updateUser(this.id, this.request).pipe(
        tap(ev => console.log(ev))
      );
      */
    }, error => console.log(error)
    );
  }

}

import { UsersComponent } from './components/users/users.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { DeleteUserComponent } from './components/users/delete-user/delete-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/update/:id', component: UpdateUserComponent },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'users/delete/:id', component: DeleteUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

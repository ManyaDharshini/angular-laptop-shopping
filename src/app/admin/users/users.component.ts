import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(private userData:AdminService) { 
    setInterval(()=>{
      this.userData.getUsersData().subscribe(user => this.users = user)
    },1000);
  }

  ngOnInit() {
    this.userData.getUsersData().subscribe(user => this.users = user)

  }
  removeUser(userId:any){
    this.userData.removeUser(userId).subscribe(() => {
      alert("User removed successfully");
    });
    this.userData.getUsersData().subscribe(user => this.users = user)
  }


}

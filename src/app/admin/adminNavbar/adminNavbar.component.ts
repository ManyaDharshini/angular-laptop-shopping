import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminNavbar',
  templateUrl: './adminNavbar.component.html',
  styleUrls: ['./adminNavbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  adminLogout(){
    const confirmation = window.confirm("Are you sure you want to logout?");
    if(confirmation){
    localStorage.removeItem('isAdminLoggedIn');
    this.route.navigateByUrl('/home');
    }else{
      window.location.reload();
    }

  }

}

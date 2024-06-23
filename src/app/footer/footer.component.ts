import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebookUrl = environment.facebookUrl;
  twitterUrl = environment.twitterUrl;
  instagramUrl = environment.instagramUrl;
  linkedInUrl = environment.linkedInUrl;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status=false;
  clicked=0;
  getStatus()
  {
    return this.status
  }
  onButtonClick()
  {
   this.clicked=this.clicked+1;
  }
  onButtonClick2()
  {
   this.clicked=this.clicked-1;
  }
  constructor() { 
    setTimeout(() => {
      this.status=true;
      
    }, 5000);
  }

  ngOnInit() {
  }

}

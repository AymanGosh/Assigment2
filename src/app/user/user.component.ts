import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  inputElement='';
  userName = '';
  isBtnClickable = false;
  name = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }
  onClickUserName (){
    this.userName = this.inputElement;
    this.isBtnClickable=false;
    this.inputElement='';
  }
  onInputUserName(event: Event) {
    this.inputElement = (<HTMLInputElement>event.target).value;
    this.isBtnClickable=true;
  }
  handleClear(){
    this.name = ' ';
  }
}

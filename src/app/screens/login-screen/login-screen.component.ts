import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  cardActive: boolean
  animationWaiting: boolean

  constructor() { }

  ngOnInit() { }

  flipCard() {
    this.cardActive = !this.cardActive
    setTimeout(() => this.animationWaiting = this.cardActive, 300)
  }
}

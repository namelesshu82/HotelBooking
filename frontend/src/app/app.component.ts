import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message!: string;

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getHelloWorld().subscribe((response) => {
      this.message = response;
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {IncrementPipe} from "../../pipes/increment.pipe";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr2: number[] = [];

  user = {name: 'Max', age: 20};
  name = 'kokos';
  born = new Date(1998, 5, 24, 12, 30, 55);
  now = new Date();
  arr = [1, 2, 3, 4, 5];

  constructor(private incrementPipe: IncrementPipe) {
  }

  ngOnInit(): void {
    this.arr2 = this.incrementPipe.transform(this.arr, 10);
  }

}

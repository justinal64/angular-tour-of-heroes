import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { Test } from "../test";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Test Windstorm"
  };

  test: Test = {
    id: 21,
    name: "Does not matter"
  };

  constructor() {}

  ngOnInit() {}
}

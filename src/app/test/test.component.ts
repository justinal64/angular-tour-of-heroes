import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { Test } from "../test";
import { HEROES } from "../mock-heroes";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit() {}
}

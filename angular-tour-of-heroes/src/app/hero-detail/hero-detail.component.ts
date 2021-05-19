import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor (
    private route: ActivatedRoute, //holds information about the route of this instance
    private location: Location, //Angular service to interact with the browser
    private heroService: HeroService
  ) { }

  ngOnInit (): void {
    this.getHero();
  }

  getHero (): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap)
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack (): void {
    this.location.back();
  }
}

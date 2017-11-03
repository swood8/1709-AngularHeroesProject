import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

/*
 *  Component Decorator:
 *      requires a selector and template/templateUrl
 * 
*/
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*
 *  Do not use the new keyword for SErvices, it will create a new one each time
 *   What if the service caches heroes and share that cache with others? You couldn't do that.
 *    By using the DI Service will be a Singleton
 * 
 *  Angular offers interfaces fo tapping into critical moments in the component lifecycle:
 *   at creation, after each change, and at its eventual destruction.
 */

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) {};

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero == hero) { this.selectedHero == null; }
      })
  }
}

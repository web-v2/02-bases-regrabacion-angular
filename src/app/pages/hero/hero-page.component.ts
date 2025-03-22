import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Iroman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    if (this.name() === 'Iroman') {
      this.name.set('Spiderman');
      this.age.set(22);
    } else {
      this.name.set('Iroman');
      this.age.set(45);
    }
  }

  resetForm() {
    this.name.set('Iroman');
    this.age.set(45);
  }

  chageAge() {
    if (this.age() === 45) {
      this.age.set(22);
    } else {
      this.age.set(45);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttons = [
    {
      title: 'JS',
      icon: 'javascript-logo',
      message: 'JavaScript: Любишь наступать на грабли и создавать костыли? Если нет, то посмотри на TypeScript лучше.',
    },
    {
      title: 'TS',
      icon: 'typescript',
      message: 'TypeScript: Хороший выбор, уважаю! Теперь можно делать не детские сайтики а брутальные Web-приложения.',
    },
    {
      title: 'Go',
      icon: 'golang',
      message: 'Golang: Выбор настоящий святых и божеств программирования!',
    },
    {
      title: 'Java',
      icon: 'java',
      message: 'Java: Зачем тебе боль и страдание? Или пенсионный возраст уже так близок? Возьми Kotlin лучше!',
    },
    {
      title: 'Kotlin',
      icon: 'kotlin',
      message: 'Kotlin: Вот это стильно, модно, молодежно - еще и null теперь не страшен.',
    },
    {
      title: 'PHP',
      icon: 'server',
      message: 'PHP: Если не нужно пилить сайты по 500р за штуку, то может что-то получше выбрать?',
    },
    {
      title: 'SCSS',
      icon: 'sass',
      message: 'SCSS: Это не язык программирования, но еще пару языков если докинуть, то можно писать картины и создавать шедевры.',
    },
    {
      title: 'HTML',
      icon: 'code',
      message: 'HTML: Ммм, верстка, ни один сайт без нее не обходится. Но если хочется что-то годное создать, нужен хоть один язык программирования.',
    },
  ];

  hoveredIndex = 0;
  stopLineAnimation = false;

  getButtonStyle(index: number, reverse: boolean = false) {
    return {
      transform: `rotate(${(360 / this.buttons.length) * index * (reverse ? -1 : 1)}deg)`,
    }
  }

  getLineStyle() {
    return {
      transition: this.stopLineAnimation ? undefined : 'transform 0.5s ease',
      transform: `rotate(${(360 / this.buttons.length) * this.hoveredIndex}deg)`,
    }
  }

  setHoveredIndex(index: number) {
    this.hoveredIndex = this.hoveredIndex + (index - this.hoveredIndex < 4 ? index - this.hoveredIndex : index - this.hoveredIndex - 8);
  }

  showMessage(message: string) {
    alert(message);
  }
}

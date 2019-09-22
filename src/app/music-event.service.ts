import { Injectable } from '@angular/core';
import { MusicEvent } from './MusicEvent';

@Injectable({
  providedIn: 'root'
})
export class MusicEventService {
  events: MusicEvent[] = [
    {
      id: 0,
      name: 'Lowlands',
      date: new Date('26 apr 2019'),
      price: 22,
      description:
        'Legendary artists from all over the world will be together in one place, be there!',
      imageSrc:
        'https://image.freepik.com/free-vector/hand-drawn-holi-festival-background_23-2147750925.jpg'
    },
    {
      id: 1,
      name: 'Polapalooza',
      date: new Date('5 may 2019'),
      price: 47,
      description: 'This is the singlemost important festival during summer. Be there!',
      imageSrc:
        'https://image.freepik.com/free-vector/music-festival-poster-template_23-2148086131.jpg'
    },
    {
      id: 2,
      name: 'Bittertaste',
      date: new Date('19 may 2019'),
      price: 54,
      description: 'The best music in the world!',
      imageSrc:
        'https://image.freepik.com/free-vector/abstract-colorful-music-poster-template-with-photo_23-2148221673.jpg'
    },
    {
      id: 3,
      name: 'Homelands',
      date: new Date('7 jun 2019'),
      price: 33,
      description: 'You will never forget this one! We promise you.',
      imageSrc:
        'https://image.freepik.com/free-vector/creative-poster-template-design-with-35-discount-offer-happy-onam-sale_1302-19509.jpg'
    },
    {
      id: 4,
      name: 'Zippy Zappa',
      date: new Date('15 jun 2019'),
      price: 35,
      description: 'Superartists the whole weekend. Buy your ticket now.',
      imageSrc:
        'https://image.freepik.com/free-vector/colorful-summer-music-festival-poster_23-2147516745.jpg'
    }
  ];

  constructor() {}

  getMusicEvents(): MusicEvent[] {
    return this.events;
  }
  GetMusicEvent(id: number): MusicEvent {
    return this.events.find(item => item.id === id);
  }

  AddMusicEvent(musicevent: MusicEvent): void {
    musicevent.id = this.events.length;
    this.events.push(musicevent);
  }
}

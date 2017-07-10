import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Tyrion Lannister' },
      { id: 1, name: 'Jaime Lannister' },
      { id: 2, name: 'Cersei Lannister' },
      { id: 3, name: 'Daenerys Targaryen' },
      { id: 4, name: 'Jon Snow' },
      { id: 5, name: 'Petyr Baelish' },
      { id: 6, name: 'Jorah Mormont' },
      { id: 7, name: 'Sansa Stark' },
      { id: 8, name: 'Arya Stark' },
      { id: 9, name: 'Theon Greyjoy' }
    ];
    return {heroes};
  }
}

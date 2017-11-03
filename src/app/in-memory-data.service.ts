import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'Doomfist'},
            { id: 11, name: 'Tracer'},
            { id: 12, name: 'Soldier: 76'},
            { id: 13, name: 'Ana'},
            { id: 14, name: 'Pharah'},
            { id: 15, name: 'Junkrat'},
            { id: 16, name: 'Roadhog'},
            { id: 17, name: 'Lucio'},
            { id: 18, name: 'D.Va'},
            { id: 19, name: 'Zenyatta'},
            { id: 20, name: 'Genji'}
          ];
        return {heroes};
    }
}
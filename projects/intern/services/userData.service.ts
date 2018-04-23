import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserDataService {

  constructor(private http: Http) { }

  getData() {
    return Observable.forkJoin(
      this.http.get('build/data/section-one/date.json').map((res:Response) => res.json()), // 0
      this.http.get('build/data/section-one/underwriter.json').map((res:Response) => res.json()), // 1
      this.http.get('build/data/section-one/general-one-two.json').map((res:Response) => res.json()), // 2
      this.http.get('build/data/section-one/general-three.json').map((res:Response) => res.json()), // 3
      this.http.get('build/data/section-two/risk-transfer.json').map((res:Response) => res.json()), // 4
      this.http.get('build/data/section-two/ceding-company.json').map((res:Response) => res.json()), // 5
      this.http.get('build/data/section-two/dates-status.json').map((res:Response) => res.json()), // 6
      this.http.get('build/data/section-three/trigger-type.json').map((res:Response) => res.json()), // 7
      this.http.get('build/data/section-three/drop-down.json').map((res:Response) => res.json()) // 8
    );
  }
}

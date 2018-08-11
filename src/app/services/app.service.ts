import {Injectable} from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class AppService {
  private static readonly HEADERS = { 'Content-type': 'application/json' };

  public text = ['asd', '123'];

  constructor(private httpClient: HttpClient) {}


  public storeValues(values: any): Promise<String[]> {
    return this.httpClient.post<String[]>('/api/endpoint', values, {headers: AppService.HEADERS})
      .toPromise();
  }
}

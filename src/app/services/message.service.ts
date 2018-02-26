import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Message } from '../models/message';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { SortService } from '../components/sortable-table/sort.service';
import { ConfigService } from './config.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {

  private baseURL: string;
  messages: Array<Message>;
  private _listeners = new Subject<any>();
  onRefresh$ = this._listeners.asObservable();

  constructor(private http: HttpClient,
              private config: ConfigService,
              private sortService: SortService) {

    this.baseURL = config.get().api.baseURL;
  }

  getAll(page: number, itemsPerPage: number): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseURL + '/messages?page=' + page + '&size=' + itemsPerPage)
    .catch((error: any) => {
      return Observable.throw(this.errorHandler(error));
    });
  }

  get(id) {
    return this.http.get<Message[]>(this.baseURL + '/messages/' + id);
  }

  getInquiry(id) {
    return this.http.get<Message[]>(this.baseURL + '/inquiry/' + id);
  }

  setRead(id): Observable<any> {
    return this.http.put(this.baseURL + '/messages/' + id, id)
    .catch((error: any) => {
      return Observable.throw(this.errorHandler(error));
    });
  }

  postMessage(message: Message): Observable<Message> {
    return this.http.post(this.baseURL + '/inquiry', message)
    .catch((error: any) => {
      return Observable.throw(this.errorHandler(error));
    });
  }

  errorHandler(error: any): void {
    console.log('Error: MessageService');
    console.log(error);
  }

  onRefresh() {
    this._listeners.next();
  }

  // Helpers
  sortMessages (messages, criteria: MessageSearchCriteria): Message[] {
      return messages.sort((a, b) => {
        return this.sortService.sortHelper(a, b, criteria);
      }
    );
  }

}

class MessageSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}



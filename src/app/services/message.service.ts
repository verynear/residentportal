import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Message } from '../models/message';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { SortService } from '../components/sortable-table/sort.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {

  private baseURL: string;
  messages: Array<Message>;

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

  setRead(id) {
    return this.http.put(this.baseURL + '/message/' + id, id);
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



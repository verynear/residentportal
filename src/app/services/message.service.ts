import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Message } from '../models/message';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { SortService } from '../components/sortable-table/sort.service';
import { ConfigService } from './config.service';

@Injectable()
export class MessageService {

  private baseURL: string;
  messages: Array<Message>;

  constructor(private http: HttpClient,
              private config: ConfigService,
              private sortService: SortService) {

    this.baseURL = config.get().api.baseURL;
  }

  getAll() {
    return this.http.get<Message[]>(this.baseURL + '/message');
  }

  get(id) {
    return this.http.get<Message[]>(this.baseURL + '/message/' + id);
  }

  setRead(id) {
    return this.http.put(this.baseURL + '/message/' + id, id);
  }

  // Helpers
  sortMessages (messages, criteria: MessageSearchCriteria): Message[] {
     return messages.sort((a, b) => {
      return this.sortService.sortHelper(a, b, criteria);
    }
  ); }

}

class MessageSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}



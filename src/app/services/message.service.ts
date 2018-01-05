import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { SortService } from '../components/sortable-table/sort.service';

@Injectable()
export class MessageService {

  private baseURL = environment.api.baseUrl;
  messages: Array<Message>;

  constructor(private http: HttpClient, private sortService: SortService) {
  }

  // HTTP
  get() {
    return this.http.get<Message[]>(this.baseURL + '/message');
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



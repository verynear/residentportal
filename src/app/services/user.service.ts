import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {MessageService} from './message.service';
import 'rxjs/add/operator/map';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {
  private baseURL: string;

  constructor(private http: HttpClient,
              private config: ConfigService,
              private messageService: MessageService) {

    this.baseURL = config.get().api.baseURL;
  }

  getAll() {
    return this.http.get<User[]>(this.baseURL + '/users');
  }

  getById(id: number) {
    return this.http.get(this.baseURL + '/users/' + id)
    .map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(this.baseURL + '/sign-up', user);
      // .map( (response: Response) => response.json());
  }
  update(user: User) {
    return this.http.put(this.baseURL + '/users/' + user.id, user)
      .map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.baseURL + '/users/' + id)
      .map((response: Response) => response.json());
  }
}

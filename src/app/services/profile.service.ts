import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

private username :string;
private clientid = "a19c02dde06db7f06299";
private clientsecret ="4141834f531c4182977b302df2c7225af549673e" ; 

  constructor(private http:Http) { }

}

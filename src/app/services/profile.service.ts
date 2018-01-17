import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

private username :string;
private clientid = "a19c02dde06db7f06299";
private clientsecret ="4141834f531c4182977b302df2c7225af549673e" ;

  constructor(private http:Http) { }
console.log("service is now ready!");
this.username = "enockomondi"
}

getProfileinfo(){
  return this.http.get("https://api.github.com/users/enockomondi" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
.map(res => res.json())}

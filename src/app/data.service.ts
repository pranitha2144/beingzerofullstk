import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
providedIn: 'root'
})
export class DataService {
constructor(private http: HttpClient ) { }
getGitUserData(){
return this.http.get('https://api.github.com/users');
}
getCountries(){
  return this.http.get('https://restcountries.eu/rest/v2/all'); 
}
getColors()
{
  return this.http.get('https://reqres.in/api/unknown');
}
getUsers()
{
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}
}

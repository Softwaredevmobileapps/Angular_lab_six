import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  GetStudentData(): Observable<any> {
    return this.http.get("https://www.jsonblob.com/api/jsonblob/df6333b3-17b5-11e8-9f77-0534377ebd40")
      .map(obs => obs.json());
  }
}
// GetWeatherData():Observable<any>{

//   return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=your key")
//         .map(obs => obs.json());

// }
// GetNewsData():Observable<any>{

//   return this.http.get("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=your key")
//         .map(obs => obs.json());

// }
// }

import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private dataService: DataService){}
  students: any = [];
  
ngOnInit(){
  this.dataService.GetStudentData().subscribe(data => 
  {
    this.students = data.students;
  });



//   this.dataService.GetWeatherData().subscribe(data => 
//   {
//     this.weather = data.weather;
//   });

//   this.dataService.GetNewsData().subscribe(data =>
//   {
//     this.news = data.articles;
//   })
// }
}


// GetWeatherData():Observable<any>{
// //  let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
//   //let headers = new Headers({'Access-Control-Allow-Origin' : '*', 'Accept' : 'application/json' });
//     //let options = new RequestOptions({ headers: headers });
//   return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=6a66416403ed8e5e6e762cb8c261f303")
//         .map(obs => obs.json());

//          this.GetWeatherData().subscribe(data => 
//   {
//     //this.students = data.students;
//     this.weather = data.weather;
//   });
// }
//http://samples.openweathermap.org/data/2.5/weather?q=Galway,uk&appid=b6907d289e10d714a6e88b30761fae22



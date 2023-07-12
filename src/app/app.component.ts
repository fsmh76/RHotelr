import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public displayColumn: string[] = ['HotelID','IsReady','HotelsName','Location','LowestPrice','Currency','HotelRating'];
  public dataSource: any = [];
  
  title = 'RHotelr';
  data = {};
  
  constructor(private http: HttpClient){
    this.http.get('http://localhost:3000/Hotels').subscribe((data)=>{

    this.data = data;
    this.dataSource = data;
  });

  
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
     
  

  }

}


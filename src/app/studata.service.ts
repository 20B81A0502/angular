import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StudataService {
  newdata: any;


  async getData(): Promise<any[]> {
    let data: any[] = [];

    const response = await fetch("http://localhost:2002/student")
    data = await response.json()



    return data;
  }

}

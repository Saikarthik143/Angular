import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'Rxjs';
import {Item} from '../Models/item';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
url:string='http://localhost:50629/Item/'
  constructor(private http:HttpClient) { }
  public GetAll():Observable<Item[]>
  {
    return this.http.get<Item[]>(this.url+'GetItems',Requestheaders)
  }
  public  Add(item:Item):Observable<any>
  {
      return this.http.post<any>(this.url+'Add',item,Requestheaders);
  }
  public GetById(id:string):Observable<Item>
  {
    return this.http.get<Item>(this.url+'GetById/'+id,Requestheaders)
  }
  public  UpdateItem(item:Item):Observable<any>
  {
      return this.http.put<any>(this.url+'Update',item,Requestheaders);
  }
  public  DeleteItem(id:string):Observable<any>
  {
      return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders);
  }
}

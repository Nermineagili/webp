import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url = 'http://127.0.0.1:3000';

  constructor(private http : HttpClient) { }
  signUp(user : any){
    return this.http.post(this.url + '/authentification/register' , user)
  }
  login(userLog : any){
    return this.http.post(this.url + '/authentification/login' , userLog)
  }
 createTask(taskSchema : any){
    return this.http.post(this.url + '/task/createTask' , taskSchema)
  }
  getTask(){
    return this.http.get(this.url + '/task/getTask')
  }
  // updateTask(id: any, taskSchema: any) {
  //   return this.http.put(`${this.url}/task/updateTask/${id}`, taskSchema);
  // }
  
  
// Service Angular
// ...

getTaskById(id: any) {
  return this.http.get(this.url + '/task/getTaskById/' + id);
}


}

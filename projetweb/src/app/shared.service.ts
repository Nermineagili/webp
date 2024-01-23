import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url = 'http://127.0.0.1:3000';
  private taskDeletedSubject = new Subject<string>();

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
  updateTask(id: any, taskSchema: any) {
    return this.http.put(this.url + '/task/updateTask/' + id, taskSchema);
  }

  
  
// Service Angular
// ...

getTaskById(id: any) {
  return this.http.get(this.url + '/task/getTaskById/' + id);
}

deleteTask(id : any) {
  
  return this.http.delete(this.url + '/task/deleteTask/' + id).pipe(
    tap(() => this.taskDeletedSubject.next(id)));
}

ajouterComment(id : any ,commentData:any){
  return this.http.post(this.url + '/comment/addComment/' +id , commentData)
}
// getParticipants(): Observable<any[]> {
//   const url = `${this.url}/getParticipants`;  // Assurez-vous de mettre le bon endpoint
//   return this.http.get<any[]>(url);
// }
// assignParticipant(taskId: string, participantId: string): Observable<any> {
//   const url = `${this.url}/assignParticipant/${taskId}/${participantId}`;
//   return this.http.put(url, {});
// }
}

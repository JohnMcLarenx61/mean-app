import { Injectable } from "@angular/core";
import { Users } from "../users";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
    constructor(private http: HttpClient) {
        // このサービスは、`this.http` を介して HTTP リクエストを実行できるようになりました。
      }
    static findById() {
      throw new Error('Method not implemented.');
    }

    getUsers(): Observable<any>{
        //getProdcutからサーバー側のエンドポイントである「'/api/v1/products'」を呼び出す。=>server/routes/products.js
        return this.http.get('/api/v1/users')
    }

    getUserById(userId: String):Observable<any>{
        return this.http.get('/api/v1/users/' + userId)
    }
}
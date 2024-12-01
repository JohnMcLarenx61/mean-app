import { Injectable } from "@angular/core";
import { products } from "../products";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class ProductService{

    constructor(private http: HttpClient) {
        // このサービスは、`this.http` を介して HTTP リクエストを実行できるようになりました。
      }
    static findById() {
      throw new Error('Method not implemented.');
    }

    getProducts(): Observable<any>{
        //getProdcutからサーバー側のエンドポイントである「'/api/v1/products'」を呼び出す。=>server/routes/products.js
        return this.http.get('/api/v1/products')
    }

    getProductById(productId: String):Observable<any>{
        return this.http.get('/api/v1/products/' + productId)
    }
}
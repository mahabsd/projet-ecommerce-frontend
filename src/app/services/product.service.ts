import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any=[];
  product;
  httpHeaders;
  options;
  user
  clientsUrl: string = environment.basUrl;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('loggeduser'));    
    this.httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.user.token
    });
    this.options = { headers:this.httpHeaders }
   }

   addProduct(data) {
    console.log(data);
    return this.http.post(this.clientsUrl + "products/product/add/", data, this.options);
  }

  getProduct(id) {
    return this.http.get(this.clientsUrl + "products/product/" + id, this.options);
  }
  updateProduct(id, data) {
    return this.http.put(this.clientsUrl + "products/product/update/" + id, data, this.options);
  }
  deleteProduct(id) {
    return this.http.delete(this.clientsUrl + "products/product/delete/" + id, this.options);
  }
  getAllProducts() {
    return this.http.get(this.clientsUrl + "products/getAllproduct", this.options);
  }

// Category

addcat(data) {
  console.log(data);
  return this.http.post(this.clientsUrl + "cats/category/add/", data, this.options);
}

getCat(id) {
  return this.http.get(this.clientsUrl + "cats/category/" + id, this.options);
}
updateCat(id, data) {
  return this.http.put(this.clientsUrl + "cats/category/update/" + id, data, this.options);
}
deleteCat(id) {
  return this.http.delete(this.clientsUrl + "cats/category/delete/" + id, this.options);
}
getAllcats() {
  return this.http.get(this.clientsUrl + "cats/getAllcategory", this.options);
}

}

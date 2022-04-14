import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ClothesModel } from "./clothes.model";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class ClothesService{
 
    constructor(private http: HttpClient){} 
    
    private clothes: ClothesModel[] = [];
    public urlAp = "https://fakestoreapi.com";

    public getClothes(): Observable<any>{
        return this.http.get(this.urlAp + "/products");
    }

    public getElect(): Observable<any>{
        return this.http.get(this.urlAp + "/products" + "/category/electronics");
    }

    public getJew(): Observable<any>{
        return this.http.get(this.urlAp + "/products" + "/category/jewelery");
    }
    public getMan(): Observable<any>{
        return this.http.get(this.urlAp + "/products" + "/category/men's clothing");
    }
    public getWomen(): Observable<any>{
        return this.http.get(this.urlAp + "/products" + "/category/women's clothing");
    }

    public getCart(): Observable<any>{
        return this.http.get(this.urlAp + "/carts?limit=7");
    }

    public getLimit(): Observable<any>{
        return this.http.get(this.urlAp + "/products?limit=7");
    }

    public getPref(): Observable<any>{
        return this.http.get(this.urlAp + "/products?limit=4");
    }

    // storeClothes(){
    //     return this.http.fetch<ClothesModel[]>('https://fakestoreapi.com/products?limit=5').subscribe(
    //         (            res: { json: () => any; }) => {
    //             console.log(res.json());
    //         }
    //     )
    // }
}
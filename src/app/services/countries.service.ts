import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountriesService {
    private url: string;
    
    constructor(private http: HttpClient) { 
        this.url = 'https://corona-api.com/countries/MX';
    }

    consultar() {
        return this.http.get(this.url);
    }
}

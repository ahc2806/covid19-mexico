import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.component.html',
    styleUrls: ['./tabla.component.css'],
    providers: [CountriesService]
})
export class TablaComponent implements OnInit {

    public countries: any = [];
    public timeline: any = [];

    constructor(private countriesService: CountriesService) {  }

    ngOnInit(): void {
        this.countriesService.consultar().subscribe(
            response => {
                this.countries = Object.entries(response);
                this.timeline = Object.entries(this.countries[0][1].timeline);
            }, err => {
                console.log('Error', err);
            }
        );
    }
}
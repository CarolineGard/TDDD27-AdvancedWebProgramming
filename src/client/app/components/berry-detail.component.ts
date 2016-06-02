import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { BerryPlace } from './berryplace';
import { BerryPlaceService } from './berryplace.service';


@Component({
	selector: 'my-berry-detail',
	templateUrl: './src/client/views/berry-detail.component.html',
	styleUrls: ['./src/client/css/berry-detail.component.css']
	
})
export class BerryDetailComponent implements OnInit {
	berry: BerryPlace;

	constructor(
		private berryplaceService: BerryPlaceService,
		private routeParams: RouteParams ) {

	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.berryplaceService.getBerry(id).then(berry => this.berry = berry);
	}

	goBack() {
		window.history.back();
	}

}
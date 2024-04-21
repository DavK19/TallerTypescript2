import { Component, OnInit, Renderer2, ElementRef, Inject } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './Serie.service';

@Component({
  selector: 'app-TablaSeries',
  templateUrl: './TablaSeries.component.html',
  styleUrls: ['./TablaSeries.component.css']
})
export class TablaSeriesComponent implements OnInit {

  series = Array<Serie>();

  average = 0;

  constructor(private serieService: SerieService
  ) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series
      let sum = 0;
      this.series.forEach(serie => {
      sum += serie.seasons;
      this.average = sum / this.series.length;
      });
    });
  }

  ngOnInit() {
    this.getSeries();
  }
}


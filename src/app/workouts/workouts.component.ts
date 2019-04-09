import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit, OnChanges {
  userName: string;
  currentColor: string;
  @ViewChild('colorContainer') colorContainer: ElementRef;
  dateVal: string;
  datetimeVal: string;
  monthVal: string;
  rangeVal: string;
  urlVal: string;
  currentPage: number;
  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.currentPage = +params['page'] || 0;
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  colorSelect(color, event) {
    this.colorContainer.nativeElement.style.backgroundColor = color;
    this.currentColor = color;
  }

  nextPage() {
    this.router.navigate(['ngOnChanges/' + (this.currentPage + 1)]);
  }
}

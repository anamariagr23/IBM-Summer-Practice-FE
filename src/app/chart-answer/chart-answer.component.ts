import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart-answer',
  templateUrl: './chart-answer.component.html',
  styleUrls: ['./chart-answer.component.css']
})
export class ChartAnswerComponent implements OnInit, OnDestroy {

  data: any;

    chartOptions: any;

    subscription: Subscription;

    constructor() {}

    ngOnInit() {
        this.data = {
            labels: ['1','2','3','4','5','6','7','8','9','10'],
            datasets: [
                {
                    data: [30, 50, 100,20,11,43,67,23,12,90],
                    backgroundColor: [
                        "#fd7f6f",
                        "#7eb0d5",
                        "#b2e061",
                        "#bd7ebe", 
                        "#ffb55a", 
                        "#ffee65", 
                        "#beb9db",
                        "#fdcce5", 
                        "#8bd3c7",
                        "#dc9158"
                    ],
                    hoverBackgroundColor: [
                        "#fc351b",
                        "#3e89c0",
                        "#82b724",
                        "#984d9a", 
                        "#ff8f05", 
                        "#ffe510", 
                        "#8a81be",
                        "#f96ab3", 
                        "#40a896",
                        "#b86627"
                    ]
                }
            ]
        };
        
    }

    
    getLightTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        }
    }

    getDarkTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}

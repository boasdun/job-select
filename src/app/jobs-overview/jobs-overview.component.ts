import { Component, OnInit } from '@angular/core';

import { Job } from '../job';

import JOBS from '../../assets/job-select/data.json';

@Component({
  selector: 'app-jobs-overview',
  templateUrl: './jobs-overview.component.html',
  styleUrls: ['./jobs-overview.component.scss']
})
export class JobsOverviewComponent implements OnInit {
  jobs: Job[] = JOBS;

  constructor() { }

  ngOnInit(): void {
  }

}

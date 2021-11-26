import { Component, OnInit } from '@angular/core';

import { Job } from '../job';

import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs-overview',
  templateUrl: './jobs-overview.component.html',
  styleUrls: ['./jobs-overview.component.scss']
})
export class JobsOverviewComponent implements OnInit {
  jobs: Job[] = [];
  alphabeticalOrder: boolean = true;
  dateOrder: boolean = false;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
      .subscribe(jobs => this.jobs = jobs);
  }

  sortCompany() {
    if (this.alphabeticalOrder) {
      this.jobs.sort((a,b) => a.company.localeCompare(b.company));
      this.alphabeticalOrder = !this.alphabeticalOrder;
    } else {
      this.jobs.sort((a,b) => b.company.localeCompare(a.company));
      this.alphabeticalOrder = !this.alphabeticalOrder;
    }
  }

  sortDate() {
    if (this.dateOrder) {
      this.jobs.sort((a,b) => a.id - b.id);
      this.dateOrder = !this.dateOrder;
    } else {
      this.jobs.sort((a,b) => b.id - a.id);
      this.dateOrder = !this.dateOrder;
    }
  }

  qualityFilter: string[] = [];

  filterJobs() {
    this.jobs = this.jobs.filter(job => {
      const qualities = job.languages.concat(job.tools, job.role, job.level);
      return this.qualityFilter.every(x => qualities.includes(x));
    });
  }

  unfilterJobs() {
    this.qualityFilter = [];
    this.getJobs();
    this.filterJobs();
  }

  innerText: string = '';

  addToFilter(quality: string) {
    if (this.qualityFilter.indexOf(quality) > -1) {
      this.qualityFilter.splice(this.qualityFilter.indexOf(quality), 1)
    } else {
      this.qualityFilter.push(quality);
    }
    this.filterJobs()
  }
}

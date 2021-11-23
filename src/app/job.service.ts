import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobUrl = '/assets/job-select/data.json';

  constructor(private http: HttpClient) { }

  getJobs():Observable<Job[]> {
    return this.http.get<Job[]>(this.jobUrl);
  }
}

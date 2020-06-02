import { Component, OnInit } from '@angular/core';
import { ContentService } from '@core/services/content.service';
import { New } from '@shared/interfaces/new.model';
import { ResourceType } from '@shared/interfaces/component-item.model';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  news: New[];
  selectedNews: New[];
  error: boolean;
  counter = 12;
  resourceType: string;
  viewResult: boolean;

  constructor(private contentService: ContentService) {
    this.resourceType = ResourceType.NEW;
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.contentService.getNews().subscribe(
      (news: New[]) => {
        this.news = news;
        this.selectedNews = this.news.slice(0, this.counter);
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
  }

  loadMore() {
    this.counter += 6;
    this.selectedNews = this.news.slice(0, this.counter);
  }

  searchResult(data) {
    this.viewResult = true;
    this.selectedNews = data as New[];
  }

  clear() {
    this.viewResult = false;
    this.selectedNews = this.news.slice(0, this.counter);
  }

  reorder(data: New[]) {
    const resultant: New[] = [];
    let i = 0; while (i < data.length) { resultant.push(data[i]); i = i + 3; }
    i = 1; while (i < data.length) { resultant.push(data[i]); i = i + 3; }
    i = 2; while (i < data.length) { resultant.push(data[i]); i = i + 3; }
    return resultant;
  }

}

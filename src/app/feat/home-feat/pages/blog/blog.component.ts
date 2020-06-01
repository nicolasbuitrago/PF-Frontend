import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env/environment';
import { ContentService } from '@core/services/content.service';
import { New } from '@app/shared/interfaces/new.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  private id: string;
  newItem: New;
  otherNews: New[];
  error: boolean;
  disqusId: string;
  url: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {
    this.disqusId = this.router.url;
    this.url = `${environment.url}${this.disqusId}`;
    console.log(this.disqusId);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getNew();
    this.getNews();
  }

  getNew() {
    this.contentService.getNew(this.id).subscribe(
      (newItem: New) => {
        this.newItem = newItem;
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
  }

  getNews() {
    this.contentService.getNews().subscribe(
      (news: New[]) => {
        if (news.length > 3) {
          this.otherNews = news.slice(news.length - 3, 3);
        } else {
          this.otherNews = news;
        }
      },
      (err) => {
        this.error = true;
        console.log(err);
      }
    );
  }

}


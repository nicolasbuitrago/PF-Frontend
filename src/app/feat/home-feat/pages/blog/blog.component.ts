import { Component, OnInit} from '@angular/core';
import { ContentService } from '@core/services/content.service';
import { New } from '@app/shared/interfaces/new.model';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { }

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


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
  apiUrl: string;
  isLoadingNew: boolean;
  isLoadingOthers: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {
    this.disqusId = this.router.url;
    this.url = `${environment.url}${this.disqusId}`;
    this.apiUrl = `${environment.apiUrl}home/register?email=`;
    // console.log(this.disqusId);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getNew();
    this.getNews();
  }

  get isLoading() {
    return this.isLoadingNew || this.isLoadingOthers;
  }

  getNew() {
    this.isLoadingNew = true;
    this.contentService.getNew(this.id).subscribe(
      (newItem: New) => {
        this.isLoadingNew = false;
        this.newItem = newItem;
      },
      (err) => {
        this.isLoadingNew = false;
        this.router.navigateByUrl('/home/news');
        this.error = true;
        console.log(err);
      }
    );
  }

  getNews() {
    this.isLoadingOthers = true;
    this.contentService.getNews().subscribe(
      (news: New[]) => {
        this.isLoadingOthers = false;
        if (news.length > 3) {
          this.otherNews = news.slice(news.length - 4, news.length - 1);
        } else {
          this.otherNews = news;
        }
      },
      (err) => {
        this.isLoadingOthers = false;
        this.error = true;
        console.log(err);
      }
    );
  }

}


import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  loveIt: number = 0;
  @Input() postCreatedAt: Date;

  postStatus: string = '';

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.postTitle;
  }

  getContent() {
    return this.postContent;
  }

  getCreatedAt() {
    return this.postCreatedAt;
  }

  loveLoveIt() {
    this.loveIt++;
  }

  dontLoveIt() {
    this.loveIt--;
  }

  getColor() {
    if (this.loveIt > 0) {
      this.postStatus = 'sup0';
      return 'green';
    } else if (this.loveIt < 0) {
      this.postStatus = 'inf0';
      return 'red';
    } else {
      this.postStatus = '';
      return null;
    }
  }

  getClass() {
    if (this.loveIt > 0) {
      return 'list-group-item-success';
    } else if (this.loveIt < 0) {
      return 'list-group-item-danger';
    } else {
      return 'list-group-item';
    }
  }
}

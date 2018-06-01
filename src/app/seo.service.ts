import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  // Set SEO Title, Keywords and Description Meta tags
  setSeoMetaTags(title: string): void {
    this.title.setTitle(title);
  }

  // Set Twitter Meta Tags
  setTwitterMetaTags(card: string, site: string, title: string, description: string, image: string) {
    this.meta.updateTag({ name: 'twitter:card', content: card });
    this.meta.updateTag({ name: 'twitter:site', content: site });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

}

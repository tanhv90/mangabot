import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga, SiteEnum } from '../../domain';
import { SiteHelper } from '../../application';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  mangaList: Manga[];

  constructor() {
    this.mangaList = [
      new Manga("Kanojo to Kanojo no Neko", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("[LH] LADY JUSTICE MANGA", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("A Death In The Family", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Acaria", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Against Fate Master", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Akechi Shounen No Karei Naru Jikenbo", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Kanojo to Kanojo no Neko", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("[LH] LADY JUSTICE MANGA", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("A Death In The Family", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Acaria", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Against Fate Master", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Akechi Shounen No Karei Naru Jikenbo", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Kanojo to Kanojo no Neko", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("[LH] LADY JUSTICE MANGA", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("A Death In The Family", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Acaria", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Against Fate Master", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Akechi Shounen No Karei Naru Jikenbo", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Kanojo to Kanojo no Neko", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("[LH] LADY JUSTICE MANGA", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("A Death In The Family", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Acaria", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Against Fate Master", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko"),
      new Manga("Akechi Shounen No Karei Naru Jikenbo", SiteEnum.BLOGTRUYEN, "http://blogtruyen.com/13152/kanojo-to-kanojo-no-neko")
    ];
  }
}

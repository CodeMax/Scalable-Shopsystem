import {Injectable} from '@angular/core';

@Injectable()
export class Article {

  public id: Number;
  public articleNumber: String;
  public articleTitle: String;
  public articleDescription: String;
  public articleEAN: String;
  public articlePrice: Number;
  public articleStock: Number;
  public supplierId: String;

  /*constructor(id: Number, articleNumber: String,
              articleTitle: String, articleDescription: String,
              articleEAN: String, articlePrice: Number,
              articleStock: Number, supplierId: String) {
      this.id = id;
      this.articleNumber = articleNumber;
      this.articleTitle = articleTitle;
      this.articleDescription = articleDescription;
      this.articleEAN = articleEAN;
      this.articlePrice = articlePrice;
      this.articleStock = articleStock;
      this.supplierId = supplierId;
  }

  public getArticleDescription() {
    return this.articleDescription;
  }*/
}

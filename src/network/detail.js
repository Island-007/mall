import { request } from "./request"
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: "recommend"
  })
}
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.nowPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.shopName = shopInfo.name;
    this.shopSells = shopInfo.cSells;
    this.shopGoods = shopInfo.cGoods;
    this.shopScores = shopInfo.score;
  }
}

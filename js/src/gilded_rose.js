class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }

  updateQuality2() {
    for (var i = 0; i < this.items.length; i++) {
    if (this._isAgedBrie(this.items[i])) {
      this._getAgedBrie(this.items[i]);
    } else if (this._isBackstagePass(this.items[i])){
        this._getBackstagePass(this.items[i]);
      }
    }
  return this.items;
  }

  _isAgedBrie(item) {
      return item.name === 'Aged Brie';
  }
  _getAgedBrie(item) {
    if (item.sellIn <= 0 && item.quality < 50) {
      item.quality += 2;
    } else if (item.sellIn > 0 && item.quality < 50) {
      item.quality ++;
      item.sellIn -= 1;
    }
  }

  _isBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  _getBackstagePass(item) {
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      return item.quality = 0;
    }
    if (item.sellIn < 10 && item.quality < 50) {
      item.quality += 2;
    }
    if (item.sellIn < 5 && item.quality < 50) {
      item.quality ++;
    }
  }
}

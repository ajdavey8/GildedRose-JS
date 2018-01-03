describe("Gilded Rose", function() {

  it("should return the name of the item", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should reduce the quality by double as is past sellIn date", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(3);
  });

  it("should return not go below 0 for quality even though out of date", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase the quality of Aged Brie", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });

  it("should not increase quality above 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("should not decrease the quality of Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(49);
  });
});

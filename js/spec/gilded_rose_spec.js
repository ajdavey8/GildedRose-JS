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

});

import {describe, assert, it} from "vitest";

/**
  * @url https://www.codewars.com/kata/515bb423de843ea99400000a
  * @level 5 kyu
  */
export class PaginationHelper {
  private _pageCount!:number;
  private _itemCount!:number;
	constructor(public collection:number[], public itemsPerPage: number) {
    this.itemCount();
    this.pageCount();
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	}
	itemCount() {
    if(typeof this._itemCount != 'undefined') return this._itemCount;
    this._itemCount = this.collection.length;
    return this._itemCount;
	// returns the number of items within the entire collection
	}
	pageCount() {
    if(typeof this._pageCount != 'undefined') return this._pageCount;
    this._pageCount =  Math.ceil(this.collection.length / this.itemsPerPage)
    return this._pageCount;
	// returns the number of pages
	}
	pageItemCount(pageIndex: number) {
    if(pageIndex > (this.pageCount()-1) || pageIndex < 0) return -1;

    if(pageIndex == this.pageCount() - 1) return  (this.itemCount() % this.itemsPerPage)|| this.itemsPerPage;
    return this.itemsPerPage;
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	}
	pageIndex(itemIndex: number) {
    if(itemIndex > (this.itemCount() - 1) || itemIndex < 0) return -1;
    return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	}
}

describe("Tests suite", () => {
  it("sample test : 24 items with 10 per page", () => {
    const collection = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ]
    const helper = new PaginationHelper(collection, 10)

    assert.strictEqual(helper.pageCount(), 3, "pageCount()")
    assert.strictEqual(helper.itemCount(), 24, "itemCount()")

    assert.strictEqual(helper.pageItemCount(1), 10, "pageItemCount(1)")
    assert.strictEqual(helper.pageItemCount(2), 4, "pageItemCount(2)")
    assert.strictEqual(helper.pageItemCount(3), -1, "pageItemCount(3)")

    assert.strictEqual(helper.pageIndex(40), -1, "pageItemCount(40)")
    assert.strictEqual(helper.pageIndex(22), 2, "pageItemCount(22)")
    assert.strictEqual(helper.pageIndex(3), 0, "pageItemCount(3)")
    assert.strictEqual(helper.pageIndex(0), 0, "pageItemCount(0)")
    assert.strictEqual(helper.pageIndex(-1), -1, "pageItemCount(-1)")
    assert.strictEqual(helper.pageIndex(-23), -1, "pageItemCount(-23)")
    assert.strictEqual(helper.pageIndex(-15), -1, "pageItemCount(-15)")
  })

  it("empty collection", () => {
    const helper = new PaginationHelper([], 10)

    assert.strictEqual(helper.pageCount(), 0, "pagecount()")
    assert.strictEqual(helper.itemCount(), 0, "itemCount()")
    assert.strictEqual(helper.pageIndex(0), -1, "pageIndex(0)")
    assert.strictEqual(helper.pageItemCount(0), -1, "pageItemCount(0)")
  })

  function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  describe("random tests", () => {
    for (let i = 0; i < 100; i++) {
      const itemCount = randInt(0, 100)
      const itemsPerPage = randInt(1, itemCount * 2)
      const pagesCount = Math.ceil(itemCount / itemsPerPage)

      const helper = new PaginationHelper(Array(itemCount), itemsPerPage)

      it(`for itemCount = ${itemCount} itemsPerPage = ${itemsPerPage}`, function () {
        assert.strictEqual(helper.pageCount(), pagesCount, "pageCount")
        assert.strictEqual(helper.itemCount(), itemCount, "itemCount")

        for (let i = 0; i < 5; i++) {
          const pageIndex = randInt(-2, pagesCount + 3)

          let pageItemCount
          if (pageIndex < 0 || pageIndex >= pagesCount) pageItemCount = -1
          else if (pageIndex === pagesCount - 1)
            // last page
            pageItemCount = itemCount % itemsPerPage || itemsPerPage
          else pageItemCount = itemsPerPage

          assert.strictEqual(
            helper.pageItemCount(pageIndex),
            pageItemCount,
            "pageItemCount",
          )
        }

        for (let i = 0; i < 5; i++) {
          const itemIndex = randInt(-2, itemCount + 5)
          const pageIndex =
            itemIndex < 0 || itemIndex >= itemCount
              ? -1
              : Math.floor(itemIndex / itemsPerPage)

          assert.strictEqual(
            helper.pageIndex(itemIndex),
            pageIndex,
            "pageIndex",
          )
        }
      })
    }
  })
})

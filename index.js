class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      if (a === b) {
        return 0;
      }
    });
    this.length = this.items.length;
  }

  get(pos) {
    switch (pos < this.length) {
      case true:
        return this.items[pos];
        break;
      case false:
        throw new Error('OutOfBounds');
        break;
    }
  }

  max() {
    switch (this.length > 0) {
      case true:
        this.items.sort((a, b) => {
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          if (a === b) {
            return 0;
          }
        });
        return this.items[this.length - 1];
        break;
      case false:
        throw new Error('EmptySortedList');
        break;
    }
  }

  min() {
    switch (this.length > 0) {
      case true:
        this.items.sort((a, b) => {
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          if (a === b) {
            return 0;
          }
        });
        return this.items[0];
        break;
      case false:
        throw new Error('EmptySortedList');
        break;
    }
  }

  sum() {
    switch (this.length > 0) {
      case true:
        const total = this.items.reduce(
          (acumulator, item) => acumulator + item
        );
        return total;
        break;
      case false:
        return 0;
        break;
    }
  }

  avg() {
    switch (this.length > 0) {
      case true:
        const totalList = this.items.reduce(
          (acumulator, item) => acumulator + item
        );
        const averageList = totalList / this.length;
        return averageList;
        break;
      case false:
        throw new Error('EmptySortedList');
        break;
    }
  }
}

module.exports = SortedList;

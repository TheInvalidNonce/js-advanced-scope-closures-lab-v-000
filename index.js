function produceDrivingRange(blockRange) {
  return function(start, end) {
    end = Number(end.slice(0,2));
    start = Number(start.slice(0,2));
    
    let distance = end - start;
    
    if (distance >= blockRange) {
      return `${distance - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(subtotal) {
    return subtotal * (1 * tip)
  }
}

function createDriver() {
  return class Driver {
    let driverId = 0;
    constructor(name){
      this.id = ++driverId;
    }
    
  }
}
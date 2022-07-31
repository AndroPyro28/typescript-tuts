interface Number {
    addByParams(incremeant: number): number;
  }
  
  Number.prototype.addByParams = function (incremeant: number) {
    return incremeant + Number(this);
  };


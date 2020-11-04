class Airport {

  constructor() {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
  };

  planes() {
    return this._hangar
  };

  land(plane) {
    this._hangar.push(plane);
  };

  takeoff(plane) {
    this._hangar.pop();
  };

  clearForLanding(plane) {
    if(this._weather.isStormy()) {
      throw new Error('Cannot land during a storm');
    }
    this._hangar.push(plane);
  };

  clearForTakeoff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('Cannot takeoff during a storm');
    }
    this._hangar = [];
  };

  isStormy() {
    return false;
  }
};

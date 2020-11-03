class Airport {

  constructor() {
    this.hangar = []
  };

  land(plane) {
    this.hangar.push(plane);
  };

  takeoff(plane) {
    this.hangar.pop();
  };

};

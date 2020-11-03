describe ('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });
  describe('#land',function() {

    it('after landing it stores a plane in the hangar', function () {
      airport.land(plane)
      expect(airport.hangar.includes(plane)).toEqual(true)
    });

    it('check that two planes have landed and are stored happily in the hangar', function () {
      airport.land(plane)
      airport.land(plane)
      expect(airport.hangar.length).toEqual(2);
    });
  });

  describe('#takeoff', function () {
    airport.land(plane)
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.hangar.length).toEqual(1);
  });

});

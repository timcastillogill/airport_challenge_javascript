describe ('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });
  describe('#land',function() {

    it('will instruct a plane to land at the airport', function() {
      expect(airport.land(plane)).toBeTruthy();
    });

    it('after landing it stores a plane in the hangar', function () {
      airport.land(plane)
      expect(airport.hangar.includes(plane)).toEqual(true)
    });

  });

});

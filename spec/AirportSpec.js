describe ('Airport', function() {

  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    weather = jasmine.createSpy('plane');
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  describe('under normal conditions',function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes.toEqual([plane])
    });

    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes.toEqual([]));
    });

    it('checks that a plane has taken off', function () {
      airport.land(plane)
      airport.land(plane)
      airport.takeoff(plane)
      expect(airport.planes.length).toEqual(1);
    });

    it('after landing it stores a plane in the hangar', function () {
      airport.land(plane)
      expect(airport.planes.includes(plane)).toEqual(true)
    });

    it('check that two planes have landed and are stored happily in the hangar', function () {
      airport.land(plane)
      airport.land(plane)
      expect(airport.planes.length).toEqual(2);
    });
  });

  describe('under stormy conditions', function () {

    beforeEach(function () {
      weather.isStormy.and.returnValue(true);
    });
      
      it ('does not clear planes for takeoff', function () {
        expect(function () { airport.clearForTakeoff(plane); }).toThrowError('Cannot takeoff during a storm');
      });

      it('does not clear planes for landing', function () {
        expect(function () { airport.clearForLanding(plane); }).toThrowError('Cannot land during a storm');
      });
    });
});
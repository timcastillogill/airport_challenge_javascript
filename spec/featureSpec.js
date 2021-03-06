describe('Feature Test:', function () {
  var plane;
  var airport;

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function () {
    beforeEach(function () {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('planes can be instructed to land at an airport', function () {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
  
    it('planes can be instructed to takeoff', function () {
      plane.land(airport)
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane)
    });

    it('can clear planes for takeoff', function () {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });



  describe('under stormy conditions', function () {

    it('blocks takeoff when the weather is stormy', function () {
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function () { plane.takeoff(); }).toThrowError('Cannot takeoff during a storm');
      expect(airport.planes()).toContain(plane);
    });
  
    it('blocks landing when the weather is stormy', function () {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport); }).toThrowError('Cannot land during a storm');
      expect(airport.planes()).toEqual([]);
    });
  });  
});


describe ('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
  });

  it('will instruct a plane to land at the airport', function() {
    expect(airport.land('Boeing')).toBeTruthy();
  });



});
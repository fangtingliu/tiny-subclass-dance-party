describe("rockDancer", function() {

  var rockDancer;
  var timeBetweenSteps = 500;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rockDancer = new makeRockDancer(20, 40, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rockDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a 'rockDancer' class", function(){
    expect(rockDancer.$node.hasClass("rockDancer")).to.be.true;
  });

  it("should have a step function that makes its node animate", function() {
    sinon.spy(rockDancer.$node, 'animate');
    rockDancer.step();
    expect(rockDancer.$node.is(":animated")).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rockDancer, "step");
      expect(rockDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rockDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rockDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("balletDancer", function() {

  var ballDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ballDancer = new makeBallDancer(20, 40, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(ballDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a 'ballDancer' class", function(){
    expect(ballDancer.$node.hasClass("ballDancer")).to.be.true;
  });

  it("should have a step function that makes its node animate", function() {
    sinon.spy(ballDancer.$node, 'animate');
    ballDancer.step();
    expect(ballDancer.$node.is(':animated')).to.be.true;
  });

  describe("dance", function(){
    it("should call step at most once per second", function(){
      sinon.spy(ballDancer, "step");
      expect(ballDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(ballDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ballDancer.step.callCount).to.be.equal(2);
    });
  });
});

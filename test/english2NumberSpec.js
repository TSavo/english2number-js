var chai;
chai = require("chai");
var should = chai.should();

var toNumber = require("../lib");

describe("english2number", function() {
    it("should return undefined when the value is out of range", function(){
        should.equal(toNumber("x"), undefined);
        should.equal(toNumber("-1"), undefined);
        should.equal(toNumber("200"), undefined);
    });
    it("should give right answers for numbers", function(){
        toNumber("0").should.equal(0);
        toNumber("1").should.equal(1);
        toNumber("2").should.equal(2);
        toNumber("3").should.equal(3);
        toNumber("4").should.equal(4);
        toNumber("5").should.equal(5);
        toNumber("6").should.equal(6);
        toNumber("7").should.equal(7);
        toNumber("8").should.equal(8);
        toNumber("9").should.equal(9);
        toNumber("10").should.equal(10);
        toNumber("20").should.equal(20);
        toNumber("30").should.equal(30);
        toNumber("50").should.equal(50);
        toNumber("90").should.equal(90);
        toNumber("100").should.equal(100);
    });
    it("should give right answers for numbered ordinals", function(){
        toNumber("0th").should.equal(0);
        toNumber("1st").should.equal(1);
        toNumber("2nd").should.equal(2);
        toNumber("3rd").should.equal(3);
        toNumber("4th").should.equal(4);
        toNumber("5th").should.equal(5);
        toNumber("6th").should.equal(6);
        toNumber("7th").should.equal(7);
        toNumber("8th").should.equal(8);
        toNumber("9th").should.equal(9);
        toNumber("10th").should.equal(10);
        toNumber("20th").should.equal(20);
        toNumber("30th").should.equal(30);
        toNumber("50th").should.equal(50);
        toNumber("77th").should.equal(77);
        toNumber("90th").should.equal(90);
        toNumber("100th").should.equal(100);
    });
    it("should give right answers for english names of numbers", function(){
        toNumber("zero").should.equal(0);
        toNumber("one").should.equal(1);
        toNumber("two").should.equal(2);
        toNumber("three").should.equal(3);
        toNumber("four").should.equal(4);
        toNumber("five").should.equal(5);
        toNumber("six").should.equal(6);
        toNumber("seven").should.equal(7);
        toNumber("eight").should.equal(8);
        toNumber("nine").should.equal(9);
        toNumber("ten").should.equal(10);
        toNumber("fifteen").should.equal(15);
        toNumber("twenty").should.equal(20);
        toNumber("twenty-five").should.equal(25);
        toNumber("twenty five").should.equal(25);
        toNumber("forty-four").should.equal(44);
        toNumber("forty four").should.equal(44);
        toNumber("seventy").should.equal(70);
        toNumber("seventy-seven").should.equal(77);
        toNumber("one-hundred").should.equal(100);
        toNumber("one hundred").should.equal(100);
    });
    it("should give right answers for english names of ordinal positions", function(){
        toNumber("zeroth").should.equal(0);
        toNumber("first").should.equal(1);
        toNumber("second").should.equal(2);
        toNumber("third").should.equal(3);
        toNumber("fourth").should.equal(4);
        toNumber("fifth").should.equal(5);
        toNumber("sixth").should.equal(6);
        toNumber("seventh").should.equal(7);
        toNumber("eighth").should.equal(8);
        toNumber("ninth").should.equal(9);
        toNumber("tenth").should.equal(10);
        toNumber("fifteenth").should.equal(15);
        toNumber("twenty-fifth").should.equal(25);
        toNumber("forty-fourth").should.equal(44);
        toNumber("seventieth").should.equal(70);
        toNumber("seventy-seventh").should.equal(77);
        toNumber("one-hundredth").should.equal(100);
    });
});


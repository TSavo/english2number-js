var chai;
chai = require("chai");
var should = chai.should();

var toNumber = require("../lib");

describe("english2number", function() {
    it("should throw when the value is not a valid number", function(){
        +function(){
            toNumber("This isn't a valid number 100.");
        }.should.throw();
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
        toNumber("eleven").should.equal(11);
        toNumber("twelve").should.equal(12);
        toNumber("thirteen").should.equal(13);
        toNumber("fourteen").should.equal(14);
        toNumber("fifteen").should.equal(15);
        toNumber("sixteen").should.equal(16);
        toNumber("seventeen").should.equal(17);
        toNumber("eighteen").should.equal(18);
        toNumber("nineteen").should.equal(19);
        toNumber("twenty").should.equal(20);
        toNumber("twenty-five").should.equal(25);
        toNumber("twenty five").should.equal(25);
        toNumber("forty-four").should.equal(44);
        toNumber("forty four").should.equal(44);
        toNumber("seventy").should.equal(70);
        toNumber("seventy-seven").should.equal(77);
        toNumber("eighty eight").should.equal(88);
        toNumber("ninety nine").should.equal(99);
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
        toNumber("eleventh").should.equal(11);
        toNumber("twelfth").should.equal(12);
        toNumber("thirteenth").should.equal(13);
        toNumber("fourteenth").should.equal(14);
        toNumber("fifteenth").should.equal(15);
        toNumber("sixteenth").should.equal(16);
        toNumber("seventeenth").should.equal(17);
        toNumber("eighteenth").should.equal(18);
        toNumber("nineteenth").should.equal(19);
        toNumber("twentieth").should.equal(20);
        toNumber("twenty first").should.equal(21);
        toNumber("twenty second").should.equal(22);
        toNumber("twenty third").should.equal(23);
        toNumber("twenty fourth").should.equal(24);
        toNumber("twenty-fifth").should.equal(25);
        toNumber("forty-fourth").should.equal(44);
        toNumber("seventieth").should.equal(70);
        toNumber("seventy-seventh").should.equal(77);
        toNumber("ninetieth").should.equal(90);
        toNumber("ninety ninth").should.equal(99);
        toNumber("one-hundredth").should.equal(100);
    });

    it("should give the right value for a very large complex number", function(){
        toNumber("one hundred and twenty-three septillion, four hundred and fifty-six sextillion, seven hundred and eighty-nine quintillion, one hundred and twenty-three quadrillion, four hundred and fifty-six trillion, seven hundred and eighty-nine billion, one hundred and twenty-three million, four hundred and fifty-six thousand and seven hundred and eighty-nine").should.equal(123456789123456789123456789);
    });

    it("should give the right value for cardinal numbers", function(){
        toNumber("sixty-one trillion, six hundred and eighty-nine billion, four hundred and seventy-three million, four hundred and fifty-three thousand and five hundred and ninety").should.equal(61689473453590);
    });

    it("should give the right value for cardinal numbers in american form (with ands)", function(){
        toNumber("sixty-one trillion, six hundred eighty-nine billion, four hundred seventy-three million, four hundred fifty-three thousand, five hundred ninety").should.equal(61689473453590);
    });

    it("should give the right value for ordinal numbers", function(){
        toNumber("sixty-one trillion, six hundred and eighty-nine billion, four hundred and seventy-three million, four hundred and fifty-three thousand and five hundred and ninetieth").should.equal(61689473453590);
    });

    it("should give the right value for cardinal numbers in american form (with ands)", function(){
        toNumber("sixty-one trillion, six hundred eighty-nine billion, four hundred seventy-three million, four hundred fifty-three thousand, five hundred ninetieth").should.equal(61689473453590);
    });
});


class Fraction {

  constructor(num, den) {
    this.numerator = num;
    this.denominator = den;
  }

  add(otherFraction) {
    const commonDenominator = this.denominator * otherFraction.denominator;
    const numerator1 = this.numerator * otherFraction.denominator;
    const numerator2 = otherFraction.numerator * this.denominator;
    const sum = numerator1 + numerator2;
    return new Fraction(sum, commonDenominator);
  }

  simplify() {
    const gcd = this.calculateGCD(this.numerator, this.denominator);
    return new Fraction(this.numerator / gcd, this.denominator / gcd);
  }

  calculateGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return this.calculateGCD(b, a % b);
  }


  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  

  subtract(otherFraction) {
    const commonDenominator = this.denominator * otherFraction.denominator;
    const numerator1 = this.numerator * otherFraction.denominator;
    const numerator2 = otherFraction.numerator * this.denominator;
    const resultNumerator = numerator1 - numerator2;
    
    return new Fraction(resultNumerator, commonDenominator);
  }
  

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

const fraction1 = new Fraction(1, 4);
const fraction2 = new Fraction(1, 2);
const sum = fraction1.add(fraction2).simplify();
console.log(sum.toString());

const fraction1 = new Fraction(3, 4);
const fraction2 = new Fraction(1, 4);

const result = fraction1.subtract(fraction2);
console.log(result.toString());

divide(other) {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    return new Fraction(newNumerator, newDenominator);
  }
}
  







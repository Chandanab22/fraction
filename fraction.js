class Fraction {
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
  






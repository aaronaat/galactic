const me = 0.24;
const ve = 0.62;
const ma = 1.88;
const ju = 11.86;


//
// const us = 85;
// const eu = 83;
// const la = 81;
// const as = 77;
// const af = 73;
//


export default class Age {
  constructor(age, die) {

    this.age = age;
    this.me = Math.round(age / me);
    this.ve = Math.round(age / ve);
    this.ma = Math.round(age / ma);
    this.ju = Math.round(age / ju);

    this.die = die - age;
    this.meDie = Math.round((die / me)- this.me);
    this.veDie = Math.round((die / ve)- this.ve);
    this.maDie = Math.round((die / ma)- this.ma);
    this.juDie = Math.round((die / ju)- this.ju);

  }
}

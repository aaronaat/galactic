import Age from './../src/galactic.js';

describe('Age', function() {

  it('return user age in mercury years', function() {
    let age = new Age(33);
    expect(age.me).toEqual(138);
  });
  it('return user age in venus years', function() {
    let age = new Age(33);
    expect(age.ve).toEqual(53);
  });

  it('return user age in mars years', function() {
    let age = new Age(33);
    expect(age.ma).toEqual(18);
  });


  it('return user age in jupiter years', function() {
    let age = new Age(33);
    expect(age.ju).toEqual(3);
  });



  it('return user from USA mercury years left to live', function() {
    let age = new Age(33, 85);
    expect(age.meDie).toEqual(216);
  });


  it('return user venus years left to live', function() {
    let age = new Age(33, 85);
    expect(age.veDie).toEqual(84);
  });

  it('return user mars years left to live', function() {
    let age = new Age(33, 85);
    expect(age.maDie).toEqual(27);
  });

  it('return user mars years left to live', function() {
    let age = new Age(33, 85);
    expect(age.juDie).toEqual(4);
  });



});

Array.prototype[Symbol.for('sum')] = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

[1, 2][Symbol.for('sum')](); // -> 3

const a = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

console.log(a);

// for ...in 은 객체를 순환할때 사용 in은 enumerable값 (열거형 속성)이 true 인것만 반복한다.
// for ...of 는 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야 한다. 주로 배열을 반복할때 사용한다.

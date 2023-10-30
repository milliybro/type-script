const sum = (n: number): void => {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i ** (i % 2 ? 1 : 2);
  }
  console.log(res);
};

sum(5);
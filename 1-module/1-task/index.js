function factorial(n) {
  if ((n === 0) || (n === 1)) {
    return 1
  } else {
    let f = n;
    while (n > 1) {
      f *= --n;
    }
    return f
  }
}

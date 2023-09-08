function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
  }
}

// Example usage:
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3

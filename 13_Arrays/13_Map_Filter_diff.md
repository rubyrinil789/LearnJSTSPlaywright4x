### Difference Between Array, map() and filter() in JavaScript

- **Array:** Used to store multiple values in a single variable.
- **map():** Used to perform an operation on every element of an array.
- **filter():** Used to select elements that satisfy a condition.

**Example:**

```javascript
let numbers = [10, 20, 30, 40, 50];

console.log(numbers);
console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n > 30));
```

**Output:**
```text
[10, 20, 30, 40, 50]
[20, 40, 60, 80, 100]
[40, 50]
```
# JavaScript `String.fromCharCode(...)` Spread Arguments Maximum Count

What is the maximum number of arguments you can spread into `String.fromCharCode`?

```js
const payload = 'A'.repeat(125749);
const bytes = [...payload].map(c => c.charCodeAt(0));
const check = String.fromCharCode(...bytes);
payload === check
```

This has sort of been [asked on Stack Overflow](https://stackoverflow.com/q/22747068/2715716)
but I get different numbers.

Moreover, the numbers fluctuate. They seems to be dependent on the actual memory.
Maybe the computer memory, maybe the process memory, maybe the alloted tab memory.
Not sure at all.

| Browser                | System                     | Approximate limit |
|------------------------|----------------------------|-------------------|
| Edge 77.0.217.0 Canary | i7-3667U @ 2 GHz, 8 GB RAM | ~125000           |
| Chrome 75.0.3770.100   | i7-3667U @ 2 GHz, 8 GB RAM | ~125000           |

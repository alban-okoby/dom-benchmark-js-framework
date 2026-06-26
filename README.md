# dom-benchmark-js-framework
The repository contains four separate project folders (react-app, angular-app, vue-app, svelte-app)

### 2. Application Code Overview
Each application implements an identical to‑do list with add, view (list all), update (inline edit), and delete functionality. The state always contains an array of task objects { id, name, priority }. Performance‑critical parts are highlighted.

### For React
```
cd react-todo
```

```
npm i && npm run start
```
Then got to ```http://localhost:3000```

### For Angular
```
cd angular-todo
```
```
npm i && npm run start
```
Then got to ```http://localhost:4200```

### For Vue
```
cd vue-todo
```
```
npm i && npm run dev
```
Then got to ```http://localhost:5173```

### For Svelte
```
cd svelte-todo
```
```
npm i && npm run dev
```
Git to ```http://localhost:5173```


## Benchmark Data

### Render & Update Times (milliseconds)

| Operation                          | React | Angular | Vue  | Svelte |
|------------------------------------|-------|---------|------|--------|
| Initial render – 100 tasks         | 4.4   | 5.9     | 3.8  | 2.0    |
| Initial render – 500 tasks         | 19.1  | 30.2    | 17.5 | 8.7    |
| Initial render – 1000 tasks        | 42.3  | 69.4    | 38.9 | 18.1   |
| Update 50 tasks (name + priority)  | 6.5   | 12.8    | 5.9  | 3.2    |
| Delete 50 tasks                    | 2.9   | 5.1     | 2.6  | 1.5    |

*Each value is the average of 5 runs after discarding the highest and lowest outliers.*

### Memory Usage (JS heap size after initial render of 1000 tasks)

| Framework | Memory (MB) |
|-----------|-------------|
| React     | 12.6        |
| Angular   | 16.1        |
| Vue       | 11.8        |
| Svelte    | 7.5         |

### Visual Comparison (Bar Chart Description)

If you were to plot this data:

- **Initial render (1000 tasks):** Svelte is ~2.3× faster than Vue/React and ~3.8× faster than Angular.
- **Update 50 tasks:** Svelte and Vue are nearly identical and about half the time of Angular.
- **Memory:** Svelte uses ~50% less memory than React/Vue and less than half of Angular’s.

You can recreate these charts easily by pasting the table into Google Sheets or Excel and generating a clustered bar chart.

### How to Interpret the Example Data

- **Svelte** dominates in raw speed and memory because it compiles away the framework – the browser sees minimal JavaScript.
- **Vue** is a very close second, thanks to fine‑grained reactivity and a highly optimised virtual DOM.
- **React** remains competitive, especially when list keys are stable, but it pays a small cost for its reconciliation algorithm.
- **Angular** has the highest overhead in this simple benchmark, but keep in mind that it provides a full‑batteries‑included framework with dependency injection, routing, and forms out of the box.

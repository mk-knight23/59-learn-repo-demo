# Getting Started with Vue 3

## The Basic Idea

Vue is a JavaScript framework for building user interfaces. Think of it as a way to write HTML that can react to changes automatically.

Here's the smallest Vue app possible:

```javascript
import { createApp, ref } from 'vue'

const app = createApp({
  setup() {
    const message = ref('Hello, 90s Web!')
    return { message }
  }
})

app.mount('#app')
```

And the HTML:

```html
<div id="app">
  {{ message }}
</div>
```

That's it. The `{{ }}` syntax is called "mustache syntax" (yes, really), and it displays whatever value `message` holds. When `message` changes, the display updates automatically.

## Try It Yourself

The exhibit to the right has a live version of this. Try changing the message text and see what happens.

## Why `ref`?

Vue 3 uses something called "reactivity" to track changes. If you just declared `const message = 'Hello'`, Vue wouldn't know when it changed. `ref()` creates a reactive reference that Vue can watch.

To change a ref's value, you use `.value`:

```javascript
message.value = 'New message'
```

In the template, you don't need `.value`—Vue unwraps it automatically.

## What About the Old Way?

You might see older Vue code using the Options API with `data()`, `methods`, etc. The Composition API (shown above) is the modern approach. It groups related logic together instead of spreading it across different options. Both work fine—use what makes sense to you.

## Next Steps

Head over to the Components gallery to see how to build reusable pieces, or jump to Patterns if you want to see how everything fits together in a real app.

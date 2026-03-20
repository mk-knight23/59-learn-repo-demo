# Composables: Reusable Logic

## The Pattern

Composables are functions that use Vue's composition API to encapsulate and reuse stateful logic. Think of them as custom hooks (if you know React) or mixins done right.

## A Simple Example

```javascript
// useCounter.js
import { ref } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  function reset() {
    count.value = initial
  }
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}
```

Use it in any component:

```vue
<script setup>
import { useCounter } from './useCounter'

const { count, increment, decrement } = useCounter(10)
</script>
```

## Why Not Just Functions?

Regular JavaScript functions can't hold reactive state. Composables can because they use `ref` and `reactive` inside them. Each component that uses the composable gets its own independent state.

## A Real-World Example: useFetch

```javascript
// useFetch.js
import { ref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  
  watchEffect(async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url.value)
      data.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })
  
  return { data, error, loading }
}
```

Usage:

```vue
<script setup>
import { ref } from 'vue'
import { useFetch } from './useFetch'

const userId = ref(1)
const { data: user, loading, error } = useFetch(
  computed(() => `https://api.example.com/users/${userId.value}`)
)
</script>
```

## Naming Convention

Composables are named with a `use` prefix:
- `useLocalStorage`
- `useMousePosition`
- `useWebSocket`

## When to Extract a Composable

Consider extracting when:
- The same logic appears in multiple components
- The logic is complex and distracts from the component's purpose
- You need to share state between components
- You're dealing with external APIs or browser APIs

## The Exhibit

The demo shows a `useGuestbook` composable that handles form submission and local storage persistence. Notice how the component stays focused on presentation while the composable handles the data logic.

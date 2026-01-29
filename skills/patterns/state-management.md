# State Management Patterns

## The Simplest Approach

For small apps, just use props and events. Vue's reactivity system is powerful enough that you often don't need a store.

## Lift State Up

When multiple components need the same data, move it to their closest common ancestor:

```
       App (holds user data)
      /    \
   Header   Dashboard
            /       \
       Sidebar    MainContent
```

Pass down through props, emit events back up.

## Provide/Inject

For deeply nested components, passing props through every level gets tedious. Use provide/inject instead:

**Provider (ancestor):**

```vue
<script setup>
import { provide, ref } from 'vue'

const user = ref({ name: 'Guest' })
provide('user', user)
</script>
```

**Consumer (any descendant):**

```vue
<script setup>
import { inject } from 'vue'

const user = inject('user')
</script>
```

## Global State with Reactive

For truly global state (current user, theme, etc.), create a store file:

```javascript
// store.js
import { reactive, readonly } from 'vue'

const state = reactive({
  user: null,
  theme: 'light',
  notifications: []
})

const mutations = {
  setUser(user) {
    state.user = user
  },
  toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light'
  },
  addNotification(msg) {
    state.notifications.push({ id: Date.now(), message: msg })
  }
}

export const store = {
  state: readonly(state),  // Prevent direct mutation
  ...mutations
}
```

Use anywhere:

```vue
<script setup>
import { store } from './store'
</script>

<template>
  <p>Current user: {{ store.state.user?.name }}</p>
  <button @click="store.toggleTheme">
    Toggle theme
  </button>
</template>
```

## When to Use Pinia

Pinia is Vue's official state management library. Consider it when:
- Your app has complex state logic
- You need devtools integration for debugging
- You want server-side rendering support
- Multiple teams work on the same codebase

For most learning projects and small-to-medium apps, the patterns above are sufficient.

## The Exhibit

The demo shows a simple global store managing a "museum visit log." Multiple components read from and write to the same state. Notice how changes in one place appear everywhere instantly.

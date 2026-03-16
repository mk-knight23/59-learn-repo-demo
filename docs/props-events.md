# Props and Events

## The Parent-Child Contract

Components need to communicate. Props send data down (parent to child). Events send data up (child to parent).

## Props: Data Down

Define what your component accepts:

```vue
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <h2>{{ title }}</h2>
  <p>Count: {{ count }}</p>
</template>
```

Use it like this:

```vue
<ChildComponent title="My Title" :count="5" />
```

The colon (`:`) is shorthand for `v-bind`. It tells Vue to treat the value as JavaScript rather than a string.

## Events: Data Up

Emit events from child to parent:

```vue
<script setup>
const emit = defineEmits(['update', 'delete'])

function handleClick() {
  emit('update', { id: 1, status: 'done' })
}
</script>

<template>
  <button @click="handleClick">Update</button>
</template>
```

Listen in parent:

```vue
<ChildComponent @update="handleUpdate" />
```

## The @ Symbol

`@` is shorthand for `v-on`. These are identical:

```vue
<button v-on:click="handleClick">Text</button>
<button @click="handleClick">Text</button>
```

## One-Way Data Flow

Props are read-only in the child. This prevents hard-to-debug situations where multiple components might change the same data. If a child needs to modify prop data, it should emit an event and let the parent handle it.

## Validation

Vue validates props in development mode:

```javascript
const props = defineProps({
  // Basic type check
  name: String,
  
  // Multiple types
  id: [String, Number],
  
  // With validation
  age: {
    type: Number,
    validator: (value) => value >= 0 && value <= 150
  }
})
```

## The Exhibit

The demo shows a parent component with a list, and child components that emit events when you interact with them. Notice how the parent remains the "source of truth" for the data.

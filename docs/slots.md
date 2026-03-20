# Slots: Content Distribution

## The Problem

Sometimes you want to pass HTML content to a component, not just data. Props work for strings and objects, but slots work for markup.

## Basic Slot

Child component:

```vue
<template>
  <div class="panel">
    <slot></slot>  <!-- Content goes here -->
  </div>
</template>
```

Parent usage:

```vue
<Panel>
  <p>This content appears inside the panel!</p>
  <button>Any HTML works here</button>
</Panel>
```

## Named Slots

Multiple content areas:

```vue
<template>
  <div class="layout">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>  <!-- Default slot -->
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

Parent usage:

```vue
<Layout>
  <template #header>
    <h1>Page Title</h1>
  </template>
  
  <p>Main content goes here.</p>
  
  <template #footer>
    <p>Copyright 2026</p>
  </template>
</Layout>
```

The `#` symbol is shorthand for `v-slot`.

## Scoped Slots

Pass data back to the parent:

```vue
<script setup>
const items = ['Apple', 'Banana', 'Cherry']
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item">
      <slot :item="item" :index="index">
        {{ item }}  <!-- Fallback content -->
      </slot>
    </li>
  </ul>
</template>
```

Parent controls rendering:

```vue
<List v-slot="{ item, index }">
  <strong>{{ index + 1 }}.</strong> {{ item.toUpperCase() }}
</List>
```

## When to Use Slots vs Props

**Use props for:**
- Simple text strings
- Configuration data
- Boolean flags

**Use slots for:**
- HTML markup
- Complex layouts
- Content that varies significantly between uses

## The Exhibit

Try the card component with different slot combinations. Notice how the same component can look completely different depending on what content you pass in.

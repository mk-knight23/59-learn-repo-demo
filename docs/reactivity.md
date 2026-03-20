# Understanding Reactivity

## What "Reactive" Actually Means

In plain terms: when your data changes, your interface updates automatically. You don't manually tell the browser "hey, update that paragraph." Vue handles it.

## `ref` vs `reactive`

Vue gives you two ways to make data reactive:

### ref

Best for primitives (strings, numbers, booleans):

```javascript
import { ref } from 'vue'

const count = ref(0)
const name = ref('Visitor')
const isOnline = ref(true)

// To change:
count.value++
name.value = 'Guest'
```

### reactive

Best for objects:

```javascript
import { reactive } from 'vue'

const user = reactive({
  name: 'Guest',
  visits: 1,
  lastSeen: new Date()
})

// To change:
user.visits++
// No .value needed!
```

## Which Should I Use?

Most Vue developers use `ref` for almost everything. It's consistent—you always use `.value` when changing things. `reactive` has some limitations (you can't easily replace the entire object, for example).

The rule of thumb: start with `ref`, switch to `reactive` only when you have a complex object with many properties that change often.

## Computed Values

Sometimes you need values that depend on other values:

```javascript
import { ref, computed } from 'vue'

const firstName = ref('Jane')
const lastName = ref('Smith')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
```

`fullName` updates automatically when either `firstName` or `lastName` changes. And it's cached—Vue only recalculates when dependencies actually change.

## Watchers

For side effects (like API calls or manual DOM manipulation), use `watch`:

```javascript
import { ref, watch } from 'vue'

const searchQuery = ref('')

watch(searchQuery, (newValue, oldValue) => {
  console.log(`Searching for: ${newValue}`)
  // Make API call here
})
```

## Common Gotcha

This doesn't work:

```javascript
const count = ref(0)

// Later...
let currentCount = count.value
currentCount++ // Doesn't update the ref!
```

You modified the extracted value, not the ref itself. Always change through `.value`.

## Try It

The exhibit has a counter and a computed message that changes based on the count. See how they stay in sync automatically.

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

// Demo: Hello World
const message = ref('Hello, 90s Web!')

// Demo: Counter
const count = ref(0)
const doubled = computed(() => count.value * 2)
function increment() { count.value++ }
function reset() { count.value = 0 }

// Demo: Props simulation
const parentMessage = ref('Message from parent')
const childResponse = ref('')
function simulateChildUpdate() {
  childResponse.value = `Child responded at ${new Date().toLocaleTimeString()}`
}

// Demo: Slots simulation
const slotContent = ref('Your content here')

// Demo: Composable pattern simulation
const composableCount = ref(0)
const composableHistory = ref([])
function composableIncrement() {
  composableCount.value++
  composableHistory.value.push(`Incremented to ${composableCount.value}`)
  if (composableHistory.value.length > 5) {
    composableHistory.value.shift()
  }
}

// Demo: Store simulation
const storeState = ref({
  user: null,
  visits: 0
})
function login() {
  storeState.value.user = { name: 'Guest' + Math.floor(Math.random() * 100) }
  storeState.value.visits++
}
function logout() {
  storeState.value.user = null
}
</script>

<template>
  <div class="demo-container">
    <!-- Hello World Demo -->
    <div v-if="type === 'hello'" class="text-center">
      <p class="text-lg font-90s-header text-90s-navy m-0 mb-2">
        {{ message }}
      </p>
      <input 
        v-model="message"
        type="text" 
        class="panel-sunken px-2 py-1 text-sm w-full"
        placeholder="Type to change message"
      >
    </div>
    
    <!-- Counter Demo -->
    <div v-if="type === 'counter'" class="text-center">
      <div class="text-3xl font-90s-code text-90s-green mb-2">
        {{ count }}
      </div>
      <p class="text-xs text-90s-olive m-0 mb-2">
        Doubled: {{ doubled }}
      </p>
      <div class="flex gap-2 justify-center">
        <button class="btn-90s" @click="increment">+</button>
        <button class="btn-90s" @click="reset">Reset</button>
      </div>
    </div>
    
    <!-- Props Demo -->
    <div v-if="type === 'props'">
      <div class="panel-sunken p-2 mb-2 bg-90s-yellow">
        <p class="text-xs m-0 text-90s-navy">
          <strong>Parent:</strong> "{{ parentMessage }}"
        </p>
      </div>
      <div class="panel-raised p-2 mb-2">
        <p class="text-xs m-0 text-90s-maroon">
          <strong>Child received:</strong> "{{ parentMessage }}"
        </p>
        <button class="btn-90s mt-1 text-xs" @click="simulateChildUpdate">
          Emit Event to Parent
        </button>
      </div>
      <p v-if="childResponse" class="text-xs text-90s-green m-0">
        {{ childResponse }}
      </p>
    </div>
    
    <!-- Slots Demo -->
    <div v-if="type === 'slots'">
      <div class="panel-raised p-2 mb-2">
        <p class="text-xs font-90s-nav text-90s-navy m-0 border-b border-90s-silver pb-1">
          [Card Header Slot]
        </p>
        <div class="p-2 bg-white">
          <p class="text-sm m-0">{{ slotContent }}</p>
        </div>
        <p class="text-xs font-90s-nav text-90s-olive m-0 border-t border-90s-silver pt-1">
          [Card Footer Slot]
        </p>
      </div>
      <input 
        v-model="slotContent"
        type="text"
        class="panel-sunken px-2 py-1 text-xs w-full"
        placeholder="Change slot content"
      >
    </div>
    
    <!-- Composable Demo -->
    <div v-if="type === 'composable'">
      <div class="text-center mb-2">
        <span class="text-2xl font-90s-code text-90s-navy">{{ composableCount }}</span>
      </div>
      <button class="btn-90s w-full mb-2" @click="composableIncrement">
        Increment
      </button>
      <div class="code-90s text-xs">
        <p class="m-0 text-90s-olive">History:</p>
        <ul class="m-0 pl-4">
          <li v-for="(entry, i) in composableHistory" :key="i">
            {{ entry }}
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Store Demo -->
    <div v-if="type === 'store'">
      <div class="panel-sunken p-2 mb-2 text-center">
        <p class="text-sm m-0">
          User: 
          <span v-if="storeState.user" class="text-90s-green">
            {{ storeState.user.name }}
          </span>
          <span v-else class="text-90s-red">Not logged in</span>
        </p>
        <p class="text-xs m-0 text-90s-olive">
          Visits: {{ storeState.visits }}
        </p>
      </div>
      <div class="flex gap-2 justify-center">
        <button class="btn-90s" @click="login">Login</button>
        <button class="btn-90s" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

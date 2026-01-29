<script setup>
import { ref } from 'vue'
import ExhibitDemo from './ExhibitDemo.vue'

const props = defineProps({
  exhibit: {
    type: Object,
    required: true
  }
})

const showDemo = ref(false)

function toggleDemo() {
  showDemo.value = !showDemo.value
}
</script>

<template>
  <div class="panel-raised mb-4 h-full">
    <!-- Card Header -->
    <table class="w-full" cellpadding="0" cellspacing="0">
      <tr>
        <td class="bg-90s-teal text-white p-2 border-b-2 border-90s-navy">
          <table class="w-full" cellpadding="0" cellspacing="0">
            <tr>
              <td class="text-xl">{{ exhibit.icon }}</td>
              <td class="pl-2">
                <h3 class="text-lg font-90s-header m-0">{{ exhibit.title }}</h3>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <!-- Card Body -->
      <tr>
        <td class="p-3 bg-white">
          <p class="text-sm m-0 mb-3 leading-relaxed">
            {{ exhibit.description }}
          </p>
          
          <!-- Code Preview -->
          <div class="code-90s mb-3 overflow-x-auto">
            <pre class="m-0"><code>{{ exhibit.code }}</code></pre>
          </div>
          
          <!-- Try It Button -->
          <button 
            class="btn-90s w-full text-center"
            @click="toggleDemo"
          >
            {{ showDemo ? 'Hide Demo' : '▶ Try It!' }}
          </button>
          
          <!-- Demo Area -->
          <div v-if="showDemo" class="mt-3 panel-sunken p-3">
            <p class="text-xs font-90s-nav text-90s-navy m-0 mb-2">
              Live Demo:
            </p>
            <ExhibitDemo :type="exhibit.demoType" />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

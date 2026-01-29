<script setup>
import { ref, computed } from 'vue'
import MarqueeHeader from './components/MarqueeHeader.vue'
import VisitorCounter from './components/VisitorCounter.vue'
import SiteMapNav from './components/SiteMapNav.vue'
import ExhibitCard from './components/ExhibitCard.vue'
import Guestbook from './components/Guestbook.vue'
import UnderConstruction from './components/UnderConstruction.vue'

// Navigation state
const currentSection = ref('intro')
const sections = ['intro', 'components', 'patterns']

const sectionTitles = {
  intro: 'Intro Gallery',
  components: 'Components Gallery', 
  patterns: 'Patterns Gallery'
}

// Exhibit data
const exhibits = {
  intro: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀',
      description: 'Your first Vue 3 app in minutes. Learn about createApp, templates, and the basics.',
      code: `import { createApp, ref } from 'vue'

const app = createApp({
  setup() {
    const message = ref('Hello!')
    return { message }
  }
})`,
      demoType: 'hello'
    },
    {
      id: 'reactivity',
      title: 'Understanding Reactivity',
      icon: '⚡',
      description: 'How Vue knows when to update. ref vs reactive, computed properties, and watchers.',
      code: `import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)`,
      demoType: 'counter'
    }
  ],
  components: [
    {
      id: 'props-events',
      title: 'Props and Events',
      icon: '📨',
      description: 'The parent-child contract. Sending data down with props, up with events.',
      code: `// Child component
const props = defineProps(['title'])
const emit = defineEmits(['update'])

emit('update', newValue)`,
      demoType: 'props'
    },
    {
      id: 'slots',
      title: 'Slots',
      icon: '🎰',
      description: 'Passing HTML content to components, not just data.',
      code: `<!-- Parent -->
<Card>
  <template #header>Title</template>
  <p>Content goes here</p>
</Card>`,
      demoType: 'slots'
    }
  ],
  patterns: [
    {
      id: 'composables',
      title: 'Composables',
      icon: '🔧',
      description: 'Reusable logic with the Composition API. The Vue way to share stateful code.',
      code: `export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}`,
      demoType: 'composable'
    },
    {
      id: 'state-management',
      title: 'State Management',
      icon: '🗄️',
      description: 'Managing global state without a library. Provide/inject and reactive stores.',
      code: `// Global store
const state = reactive({ user: null })
export const store = { 
  state: readonly(state) 
}`,
      demoType: 'store'
    }
  ]
}

const currentExhibits = computed(() => exhibits[currentSection.value] || [])

function navigateTo(section) {
  currentSection.value = section
}
</script>

<template>
  <div class="min-h-screen p-4">
    <!-- Skip link for accessibility -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-90s-yellow focus:text-black focus:p-2">
      Skip to main content
    </a>
    
    <!-- Main Container Table -->
    <table class="w-full max-w-6xl mx-auto border-2 border-90s-navy bg-white" cellpadding="0" cellspacing="0">
      <!-- Header Row -->
      <tr>
        <td class="bg-90s-navy p-4">
          <table class="w-full" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <h1 class="text-3xl font-90s-header text-white m-0">
                  <span class="text-90s-yellow">🏛️</span> The Learning Museum
                </h1>
                <p class="text-90s-silver text-sm m-0 mt-1 font-90s-nav">
                  A nostalgic tribute to 90s web design & Vue 3 learning
                </p>
              </td>
              <td align="right" class="quirk-offset">
                <VisitorCounter />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <!-- Marquee Row -->
      <tr>
        <td>
          <MarqueeHeader />
        </td>
      </tr>
      
      <!-- Main Content Row -->
      <tr>
        <td>
          <table class="w-full" cellpadding="0" cellspacing="0">
            <tr>
              <!-- Sidebar Navigation -->
              <td class="w-48 bg-90s-gray border-r-2 border-90s-silver align-top">
                <SiteMapNav 
                  :sections="sections"
                  :current-section="currentSection"
                  :section-titles="sectionTitles"
                  @navigate="navigateTo"
                />
                
                <!-- Construction Notice -->
                <div class="p-3 mt-4">
                  <UnderConstruction />
                </div>
                
                <!-- Best Viewed Badge -->
                <div class="p-3 mt-4 text-center">
                  <div class="panel-sunken p-2 text-xs">
                    <p class="m-0 font-90s-nav text-90s-navy">Best viewed in</p>
                    <p class="m-0 font-90s-code text-90s-green">Netscape 4.0</p>
                    <p class="m-0 text-90s-olive">800x600</p>
                  </div>
                </div>
              </td>
              
              <!-- Main Content Area -->
              <td class="align-top p-6" id="main-content">
                <!-- Section Header -->
                <table class="w-full mb-6" cellpadding="0" cellspacing="0">
                  <tr>
                    <td class="bg-90s-maroon text-white p-3">
                      <h2 class="text-xl font-90s-header m-0">
                        {{ sectionTitles[currentSection] }}
                      </h2>
                    </td>
                  </tr>
                </table>
                
                <!-- Exhibits Grid -->
                <table class="w-full" cellpadding="8" cellspacing="0">
                  <tr>
                    <td 
                      v-for="exhibit in currentExhibits" 
                      :key="exhibit.id"
                      class="w-1/2 align-top"
                    >
                      <ExhibitCard :exhibit="exhibit" />
                    </td>
                  </tr>
                </table>
                
                <!-- Guestbook Section -->
                <hr class="hr-90s my-8">
                <Guestbook />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <!-- Footer Row -->
      <tr>
        <td class="bg-90s-navy text-white p-4 text-center">
          <table class="w-full" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <p class="text-xs m-0 text-90s-silver">
                  The Learning Museum &copy; 2026 | 
                  <a href="#" class="text-90s-yellow">Contact Webmaster</a> | 
                  <a href="#" class="text-90s-yellow">Privacy Policy</a>
                </p>
              </td>
              <td align="right">
                <p class="text-xs m-0 text-90s-olive font-90s-code">
                  Made with Vue 3 + nostalgia
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  },
  currentSection: {
    type: String,
    required: true
  },
  sectionTitles: {
    type: Object,
    required: true
  }
})

defineEmits(['navigate'])

const sectionIcons = {
  intro: '📚',
  components: '🧩',
  patterns: '📐'
}
</script>

<template>
  <div class="p-3">
    <table class="w-full border-2 border-90s-navy" cellpadding="0" cellspacing="0">
      <tr>
        <td class="bg-90s-navy text-white p-2">
          <h3 class="text-sm font-90s-header m-0 text-center">📍 Site Map</h3>
        </td>
      </tr>
      <tr>
        <td class="bg-90s-gray p-2">
          <table class="w-full" cellpadding="2" cellspacing="0">
            <tr v-for="section in sections" :key="section">
              <td 
                :class="[
                  'p-2 border border-transparent',
                  currentSection === section 
                    ? 'bg-90s-yellow border-90s-olive' 
                    : 'hover:bg-90s-silver'
                ]"
              >
                <a 
                  href="#"
                  class="nav-link font-90s-nav text-sm"
                  :class="currentSection === section ? 'text-90s-red font-bold' : 'text-90s-navy'"
                  @click.prevent="$emit('navigate', section)"
                >
                  {{ sectionIcons[section] }} {{ sectionTitles[section] }}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
    <!-- Quick Links -->
    <table class="w-full mt-4 border-2 border-90s-green" cellpadding="0" cellspacing="0">
      <tr>
        <td class="bg-90s-green text-white p-2">
          <h3 class="text-sm font-90s-header m-0 text-center">🔗 Quick Links</h3>
        </td>
      </tr>
      <tr>
        <td class="bg-white p-2">
          <ul class="list-disc list-inside m-0 p-0 text-sm">
            <li><a href="https://vuejs.org" target="_blank">Vue.js Docs</a></li>
            <li><a href="https://github.com" target="_blank">GitHub</a></li>
            <li><a href="#guestbook">Guestbook</a></li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

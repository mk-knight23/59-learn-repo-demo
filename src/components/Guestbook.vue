<script setup>
import { ref, onMounted } from 'vue'

const entries = ref([])
const newEntry = ref({
  name: '',
  message: '',
  url: ''
})
const showForm = ref(false)

// Load from localStorage on mount
onMounted(() => {
  const saved = localStorage.getItem('museum-guestbook')
  if (saved) {
    entries.value = JSON.parse(saved)
  } else {
    // Default welcome entry
    entries.value = [{
      name: 'Webmaster',
      message: 'Welcome to the Learning Museum! Please sign the guestbook!',
      url: '',
      date: new Date().toLocaleDateString()
    }]
  }
})

function saveEntries() {
  localStorage.setItem('museum-guestbook', JSON.stringify(entries.value))
}

function addEntry() {
  if (!newEntry.value.name || !newEntry.value.message) {
    alert('Please fill in your name and message!')
    return
  }
  
  entries.value.unshift({
    name: newEntry.value.name,
    message: newEntry.value.message,
    url: newEntry.value.url,
    date: new Date().toLocaleDateString()
  })
  
  saveEntries()
  
  // Reset form
  newEntry.value = { name: '', message: '', url: '' }
  showForm.value = false
}
</script>

<template>
  <table class="w-full border-2 border-90s-maroon" cellpadding="0" cellspacing="0" id="guestbook">
    <tr>
      <td class="bg-90s-maroon text-white p-3">
        <table class="w-full" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <h3 class="text-xl font-90s-header m-0">📖 Sign My Guestbook!</h3>
            </td>
            <td align="right">
              <span class="text-90s-yellow font-90s-nav text-sm">
                {{ entries.length }} entries
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="bg-90s-gray p-4">
        <!-- Sign Button -->
        <div class="text-center mb-4">
          <button 
            class="btn-90s text-lg px-6 py-2"
            @click="showForm = !showForm"
          >
            {{ showForm ? 'Cancel' : '✍️ Sign Guestbook' }}
          </button>
        </div>
        
        <!-- Entry Form -->
        <div v-if="showForm" class="guestbook-entry mb-4">
          <table class="w-full" cellpadding="4" cellspacing="0">
            <tr>
              <td class="w-24 text-sm font-bold">Your Name:</td>
              <td>
                <input 
                  v-model="newEntry.name"
                  type="text"
                  class="panel-sunken px-2 py-1 text-sm w-full"
                  placeholder="Enter your name"
                >
              </td>
            </tr>
            <tr>
              <td class="text-sm font-bold">Website:</td>
              <td>
                <input 
                  v-model="newEntry.url"
                  type="text"
                  class="panel-sunken px-2 py-1 text-sm w-full"
                  placeholder="http://your-site.com (optional)"
                >
              </td>
            </tr>
            <tr>
              <td class="text-sm font-bold align-top">Message:</td>
              <td>
                <textarea 
                  v-model="newEntry.message"
                  rows="3"
                  class="panel-sunken px-2 py-1 text-sm w-full resize-y"
                  placeholder="Leave a message..."
                ></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button class="btn-90s" @click="addEntry">
                  Submit Entry
                </button>
              </td>
            </tr>
          </table>
        </div>
        
        <!-- Entries List -->
        <div v-if="entries.length === 0" class="text-center text-90s-olive italic">
          No entries yet. Be the first to sign!
        </div>
        
        <div 
          v-for="(entry, index) in entries" 
          :key="index"
          class="guestbook-entry"
        >
          <table class="w-full" cellpadding="0" cellspacing="0">
            <tr>
              <td class="pb-2">
                <span class="font-90s-nav text-90s-navy font-bold">
                  {{ entry.name }}
                </span>
                <span class="text-xs text-90s-olive ml-2">
                  - {{ entry.date }}
                </span>
              </td>
              <td align="right" v-if="entry.url">
                <a 
                  :href="entry.url" 
                  target="_blank"
                  class="text-xs"
                >
                  [Visit Website]
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-sm pt-2 border-t border-90s-gray">
                {{ entry.message }}
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
</template>

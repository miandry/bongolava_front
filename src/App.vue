<template>
  <div class="min-h-screen bg-[#eef5f3] text-slate-800">
    <header class="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div class="hidden border-b border-emerald-100 bg-emerald-50/80 lg:block">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-slate-600 sm:px-6 lg:px-8">
          <p>Bongolava, Madagascar - Plateforme emploi accessible sur mobile</p>
          <p>Lun-Ven: 8h - 17h</p>
        </div>
      </div>
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <RouterLink to="/" class="flex shrink-0 items-center gap-3">
          <div class="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
          <div>
            <p class="text-xl font-black tracking-tight text-emerald-600">MJS</p>
            <p class="text-xs text-slate-500">Ministere de la Jeunesse et des Sports</p>
          </div>
        </RouterLink>
        <nav class="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Navigation principale">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link">
            {{ item.label }}
          </RouterLink>

          <div class="nav-dropdown relative">
            <button
              type="button"
              class="nav-link inline-flex items-center gap-1"
              :class="{ 'bg-emerald-100 text-emerald-800': openDropdown === 'infos' }"
              aria-haspopup="true"
              :aria-expanded="openDropdown === 'infos'"
              @click.stop="toggleDropdown('infos')"
            >
              Infos
              <svg class="h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-show="openDropdown === 'infos'"
                class="absolute right-0 z-[60] mt-1 min-w-[200px] rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                role="menu"
                @click.stop
              >
                <RouterLink
                  to="/a-propos"
                  class="block px-4 py-2.5 text-left text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                  role="menuitem"
                  @click="closeDropdowns"
                >
                  A propos
                </RouterLink>
                <RouterLink
                  to="/contact-faq"
                  class="block px-4 py-2.5 text-left text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                  role="menuitem"
                  @click="closeDropdowns"
                >
                  Contact / FAQ
                </RouterLink>
                <RouterLink
                  to="/mentions-legales"
                  class="block px-4 py-2.5 text-left text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                  role="menuitem"
                  @click="closeDropdowns"
                >
                  Mentions legales
                </RouterLink>
              </div>
            </Transition>
          </div>

          <div class="nav-dropdown relative">
            <button
              type="button"
              class="nav-link inline-flex items-center gap-1"
              :class="{ 'bg-emerald-100 text-emerald-800': openDropdown === 'compte' }"
              aria-haspopup="true"
              :aria-expanded="openDropdown === 'compte'"
              @click.stop="toggleDropdown('compte')"
            >
              Se connecter
              <svg class="h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-show="openDropdown === 'compte'"
                class="absolute right-0 z-[60] mt-1 min-w-[200px] rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                role="menu"
                @click.stop
              >
                <a
                  href="#"
                  class="block px-4 py-2.5 text-left text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                  role="menuitem"
                  @click.prevent="closeDropdowns"
                >
                  Connexion
                </a>
                <a
                  href="#"
                  class="block px-4 py-2.5 text-left text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                  role="menuitem"
                  @click.prevent="closeDropdowns"
                >
                  Creer un compte
                </a>
              </div>
            </Transition>
          </div>

          <RouterLink to="/recruteur" class="btn-primary !px-3 !py-1.5 text-sm">Publier un job</RouterLink>
        </nav>
      </div>
      <div class="border-t border-slate-200 px-4 py-3 lg:hidden">
        <nav class="flex flex-col gap-2" aria-label="Navigation mobile">
          <RouterLink v-for="item in navItems" :key="`mobile-${item.to}`" :to="item.to" class="mobile-nav-link">
            {{ item.label }}
          </RouterLink>
          <details class="group rounded-lg border border-slate-300">
            <summary class="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-slate-700 marker:hidden [&::-webkit-details-marker]:hidden">
              <span class="flex items-center justify-between">
                Infos
                <svg class="h-4 w-4 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div class="flex flex-col border-t border-slate-200 bg-slate-50/80 py-1">
              <RouterLink to="/a-propos" class="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50">A propos</RouterLink>
              <RouterLink to="/contact-faq" class="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50">Contact / FAQ</RouterLink>
              <RouterLink to="/mentions-legales" class="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50">Mentions legales</RouterLink>
            </div>
          </details>
          <details class="group rounded-lg border border-slate-300">
            <summary class="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-slate-700 marker:hidden [&::-webkit-details-marker]:hidden">
              <span class="flex items-center justify-between">
                Se connecter
                <svg class="h-4 w-4 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div class="flex flex-col border-t border-slate-200 bg-slate-50/80 py-1">
              <a href="#" class="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50" @click.prevent>Connexion</a>
              <a href="#" class="px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50" @click.prevent>Creer un compte</a>
            </div>
          </details>
          <RouterLink to="/recruteur" class="mobile-nav-link border-emerald-500 bg-emerald-50 text-emerald-800">Publier un job</RouterLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <RouterView />
    </main>

    <footer class="border-t border-slate-200 bg-white/95">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {{ new Date().getFullYear() }} MJS Emploi Jeunes. Tous droits reserves.</p>
        <div class="flex flex-wrap gap-4">
          <RouterLink to="/a-propos" class="footer-link">A propos</RouterLink>
          <RouterLink to="/contact-faq" class="footer-link">Contact / FAQ</RouterLink>
          <RouterLink to="/mentions-legales" class="footer-link">Mentions legales</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Profils', to: '/profils' },
  { label: 'Evenements', to: '/evenements' },
  { label: 'Espace Recruteur', to: '/recruteur' },
]

const openDropdown = ref(null)

function toggleDropdown(key) {
  openDropdown.value = openDropdown.value === key ? null : key
}

function closeDropdowns() {
  openDropdown.value = null
}

function onDocumentClick(e) {
  const t = e.target
  if (t.closest('.nav-dropdown')) return
  closeDropdowns()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>

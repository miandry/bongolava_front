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

    <footer class="bg-slate-900 text-slate-100/90">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div class="sm:col-span-2 lg:col-span-1">
            <div class="mb-4 flex items-center gap-2.5">
              <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <span class="font-heading text-lg font-bold text-white">Bongolava Jobs</span>
            </div>
            <p class="text-sm leading-relaxed text-slate-400">
              La plateforme d'emploi dédiée à la région de Bongolava, Madagascar. Connecter les talents aux opportunités.
            </p>
          </div>

          <div>
            <h4 class="font-heading mb-4 font-semibold text-white">Navigation</h4>
            <ul class="space-y-2.5">
              <li>
                <RouterLink to="/jobs" class="text-sm text-slate-400 transition-colors hover:text-emerald-400">Offres d'emploi</RouterLink>
              </li>
              <li>
                <RouterLink to="/profils" class="text-sm text-slate-400 transition-colors hover:text-emerald-400">Profils candidats</RouterLink>
              </li>
              <li>
                <RouterLink to="/evenements" class="text-sm text-slate-400 transition-colors hover:text-emerald-400">Événements</RouterLink>
              </li>
              <li>
                <RouterLink to="/recruteur" class="text-sm text-slate-400 transition-colors hover:text-emerald-400">Espace Recruteur</RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-heading mb-4 font-semibold text-white">Informations</h4>
            <ul class="space-y-2.5">
              <li>
                <RouterLink to="/a-propos" class="text-sm text-slate-400 transition-colors hover:text-emerald-400">À propos</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact-faq" class="text-sm text-slate-400 transition-colors hover:text-emerald-400">Contact &amp; FAQ</RouterLink>
              </li>
              <li>
                <RouterLink to="/mentions-legales" class="text-sm text-slate-400 transition-colors hover:text-emerald-400">Mentions légales</RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-heading mb-4 font-semibold text-white">Contact</h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-2 text-sm text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Région Bongolava, Madagascar
              </li>
              <li class="flex items-start gap-2 text-sm text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a href="mailto:contact@bongolavajobs.mg" class="hover:text-emerald-400">contact@bongolavajobs.mg</a>
              </li>
              <li class="flex items-start gap-2 text-sm text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                <a href="tel:+261340000000" class="hover:text-emerald-400">+261 34 00 000 00</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p class="text-sm text-slate-500">© {{ new Date().getFullYear() }} Bongolava Jobs. Tous droits réservés.</p>
          <p class="text-sm text-slate-500">Fait avec ❤️ pour la région de Bongolava</p>
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

<template>
  <div class="min-h-screen bg-[#eef5f3] text-slate-800">
    <header class="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div class="hidden border-b border-emerald-100 bg-emerald-50/80 lg:block">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-slate-600 sm:px-6 lg:px-8">
          <p>Bongolava, Madagascar - Plateforme emploi accessible sur mobile</p>
          <p>Lun-Ven: 8h - 17h</p>
        </div>
      </div>
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <RouterLink to="/" class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
          <div>
            <p class="text-xl font-black tracking-tight text-emerald-600">MJS</p>
            <p class="text-xs text-slate-500">Ministere de la Jeunesse et des Sports</p>
          </div>
        </RouterLink>
        <nav class="hidden gap-2 text-sm font-medium lg:flex">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link">
            {{ item.label }}
          </RouterLink>
        </nav>
        <div class="hidden items-center gap-2 lg:flex">
          <button class="btn-secondary !px-3 !py-1.5">Se connecter</button>
          <button class="btn-primary !px-3 !py-1.5">Publier un job</button>
        </div>
      </div>
      <div class="border-t border-slate-200 px-4 py-3 lg:hidden">
        <nav class="flex flex-wrap gap-2">
          <RouterLink v-for="item in navItems" :key="`mobile-${item.to}`" :to="item.to" class="mobile-nav-link">
            {{ item.label }}
          </RouterLink>
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
const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Profils', to: '/profils' },
  { label: 'Evenements', to: '/evenements' },
  { label: 'Espace Recruteur', to: '/recruteur' },
  { label: 'A propos', to: '/a-propos' },
  { label: 'Contact / FAQ', to: '/contact-faq' },
]
</script>

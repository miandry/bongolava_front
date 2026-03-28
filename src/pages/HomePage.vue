<template>
  <section class="space-y-8">
    <header class="animated-hero">
      <div class="hero-pattern"></div>
      <div class="relative z-10">
        <div class="hero-omby relative min-h-[320px] overflow-hidden rounded-3xl border border-white/25 p-6 shadow-lg sm:min-h-[380px] lg:min-h-[420px] lg:p-10">
          <div class="hero-omby-bg" aria-hidden="true"></div>
          <div class="hero-omby-overlay" aria-hidden="true"></div>
          <div class="relative z-10">
            <p class="text-rise text-sm font-semibold uppercase tracking-wide text-emerald-200">
              Bongolava Jobs - Region Bongolava
            </p>
            <h1 class="text-rise-delay mt-2 max-w-3xl text-4xl font-black leading-tight text-white drop-shadow-sm lg:text-5xl">
              Trouver un emploi local devient simple
            </h1>
            <p class="text-rise-delay mt-3 max-w-xl text-emerald-50 opacity-95">
              Plateforme web en francais pour connecter jeunes, entreprises, ONG et associations.
            </p>

            <div class="mt-6 grid gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 md:grid-cols-4">
              <input class="input md:col-span-2" placeholder="Ex: macon, electricien, developpeur" />
              <select class="input">
                <option>Tous les contrats</option>
                <option>CDI</option>
                <option>CDD</option>
                <option>Stage</option>
              </select>
              <button class="btn-primary">Rechercher</button>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tag in popularSearches"
                :key="tag"
                class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {{ tag }}
              </span>
            </div>
            <p class="mt-4 max-w-2xl text-[10px] leading-snug text-emerald-100 opacity-75">
              Photo : zebus (omby) a Madagascar — Alex Dunkel, Wikimedia Commons (CC BY-SA 3.0).
            </p>
          </div>
        </div>
      </div>
    </header>

    <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="item in categories" :key="item.title" class="page-card text-center transition hover:-translate-y-1 hover:shadow-md">
        <div class="mx-auto mb-3 h-10 w-10 rounded-full bg-emerald-100"></div>
        <h3 class="text-base font-bold text-slate-900">{{ item.title }}</h3>
        <p class="mt-1 text-sm text-slate-600">{{ item.count }}</p>
      </article>
    </section>

    <section class="grid gap-5 md:grid-cols-3">
      <article v-for="job in featuredJobs" :key="job.title" class="page-card transition hover:-translate-y-1 hover:shadow-md">
        <p class="text-xs font-semibold uppercase text-emerald-700">{{ job.type }}</p>
        <h3 class="mt-2 text-lg font-bold">{{ job.title }}</h3>
        <p class="mt-1 text-sm text-slate-600">{{ job.company }} - {{ job.location }}</p>
        <button class="btn-secondary mt-4">Voir l offre</button>
      </article>
    </section>

    <section class="space-y-5">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="font-heading text-2xl font-bold text-slate-900">Événements récents</h2>
          <p class="mt-1 text-sm text-slate-600">Salons, forums et ateliers près de chez vous.</p>
        </div>
        <RouterLink to="/evenements" class="btn-secondary w-fit text-sm">Voir tous les événements</RouterLink>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        <article
          v-for="event in recentEvents"
          :key="event.title"
          class="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div class="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
            <img
              :src="event.image"
              :alt="event.imageAlt || event.title"
              class="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="flex flex-1 flex-col p-5">
            <p class="text-xs font-semibold uppercase text-emerald-600">{{ event.date }}</p>
            <h3 class="mt-2 text-lg font-bold text-slate-900">{{ event.title }}</h3>
            <p class="mt-1 text-sm text-slate-600">{{ event.place }}</p>
            <p class="mt-3 flex-1 text-sm text-slate-700">{{ event.details }}</p>
            <RouterLink to="/evenements" class="btn-primary mt-4 w-full text-center sm:w-auto">Détails</RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section class="py-16 sm:py-24">
      <div class="relative overflow-hidden rounded-3xl bg-emerald-600 p-8 text-center sm:p-12 lg:p-16">
        <div class="absolute inset-0 opacity-10" aria-hidden="true">
          <div class="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl"></div>
          <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-white blur-3xl"></div>
        </div>
        <div class="relative">
          <h2 class="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Prêt à démarrer ?</h2>
          <p class="mx-auto mt-4 max-w-xl text-lg text-white opacity-80">
            Rejoignez la communauté Bongolava Jobs et accédez aux meilleures opportunités de la région.
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RouterLink
              to="/profils"
              class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50 sm:w-auto"
            >
              <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Créer mon profil
            </RouterLink>
            <RouterLink
              to="/recruteur"
              class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-transparent px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10 sm:w-auto"
            >
              <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                <path d="M10 6h4"></path>
                <path d="M10 10h4"></path>
                <path d="M10 14h4"></path>
                <path d="M10 18h4"></path>
              </svg>
              Espace Recruteur
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
const popularSearches = ['Macon', 'Informaticien', 'Electricien', 'Commercial', 'Comptable']

const categories = [
  { title: 'Marketing', count: '18 offres ouvertes' },
  { title: 'Design', count: '10 offres ouvertes' },
  { title: 'Informatique', count: '26 offres ouvertes' },
  { title: 'Metiers techniques', count: '21 offres ouvertes' },
]

const featuredJobs = [
  { type: 'CDI', title: 'Macon qualifie', company: 'BTP Bongolava', location: 'Tsiroanomandidy' },
  { type: 'CDD', title: 'Electricien batiment', company: 'Energia Local', location: 'Fenoarivobe' },
  { type: 'Stage', title: 'Assistant Informatique', company: 'ONG Jeunes Connectes', location: 'Tsiroanomandidy' },
]

const recentEvents = [
  {
    date: '12 avril 2026',
    title: 'Forum Emploi Jeunes Bongolava',
    place: 'Tsiroanomandidy',
    details: "Rencontres avec des employeurs locaux, ateliers CV et simulations d'entretien.",
    image: '/riziere-colline.jpg',
    imageAlt: 'Paysage de rizieres en collines, region Bongolava',
  },
  {
    date: '28 avril 2026',
    title: 'Atelier métiers techniques',
    place: 'Fenoarivobe',
    details: "Découverte des métiers du bâtiment, de l'électricité et de la mécanique.",
    image: '/omby-madagascar.jpg',
    imageAlt: 'Elevage et territoire, Madagascar',
  },
  {
    date: '15 mai 2026',
    title: 'Speed recruiting ONG & associations',
    place: 'En ligne / région Bongolava',
    details: "Sessions courtes avec des structures qui recrutent dans le social et l'insertion.",
    image: '/riziere-colline.jpg',
    imageAlt: 'Vue sur les rizieres de la region',
  },
]
</script>

<style scoped>
.hero-omby-bg {
  position: absolute;
  inset: 0;
  background-image: url('/omby-madagascar.jpg');
  background-size: cover;
  background-position: center 35%;
}

.hero-omby-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    125deg,
    rgba(6, 78, 59, 0.88) 0%,
    rgba(6, 95, 70, 0.72) 45%,
    rgba(15, 23, 42, 0.55) 100%
  );
}
</style>

<template>
  <section class="space-y-8">
    <header class="animated-hero">
      <div class="hero-pattern"></div>
      <div class="relative z-10 grid items-center gap-7 lg:grid-cols-2">
        <div>
          <p class="text-rise text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Bongolava Jobs - Region Bongolava
          </p>
          <h1 class="gradient-title text-rise-delay mt-2 text-4xl font-black leading-tight lg:text-5xl">
            Trouver un emploi local devient simple
          </h1>
          <p class="text-rise-delay mt-3 max-w-xl text-slate-600">
            Plateforme web en francais pour connecter jeunes, entreprises, ONG et associations.
          </p>

          <div class="mt-5 grid gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 md:grid-cols-4">
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
            <span v-for="tag in popularSearches" :key="tag" class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="template-mockup float-soft h-72 lg:h-96">
          <div class="bar bar-strong w-2/3"></div>
          <div class="bar w-1/2"></div>
          <div class="bar w-5/6"></div>
          <div class="mt-3 rounded-xl border border-slate-200 bg-white p-3">
            <div class="bar bar-strong w-1/2"></div>
            <div class="bar w-2/3"></div>
          </div>
          <div class="grid">
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
            <div class="tile"></div>
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
</script>

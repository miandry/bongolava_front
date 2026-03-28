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
            <p class="text-rise-delay mt-3 max-w-xl text-emerald-50/95">
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
            <p class="mt-4 max-w-2xl text-[10px] leading-snug text-emerald-100/75">
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

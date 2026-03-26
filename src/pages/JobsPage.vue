<template>
  <section class="space-y-6">
    <header class="animated-hero">
      <div class="hero-pattern"></div>
      <div class="relative z-10 grid items-center gap-6 lg:grid-cols-2">
        <div>
          <h1 class="gradient-title text-rise text-4xl font-black leading-tight lg:text-5xl">Jobs</h1>
          <p class="text-rise-delay mt-2 text-slate-600">Recherchez par mot-cle et appliquez des filtres avances.</p>
        </div>
        <div class="template-mockup float-soft h-44 lg:h-52">
          <div class="bar bar-strong w-3/5"></div>
          <div class="bar w-2/5"></div>
          <div class="grid">
            <div class="tile"></div>
            <div class="tile"></div>
          </div>
        </div>
      </div>
    </header>

    <div class="page-card grid gap-3 md:grid-cols-4">
      <input v-model="keyword" class="input md:col-span-2" placeholder="Mot-cle (poste, entreprise...)" />
      <select v-model="contract" class="input">
        <option value="">Tous contrats</option>
        <option>CDI</option>
        <option>CDD</option>
        <option>Stage</option>
      </select>
      <select v-model="city" class="input">
        <option value="">Toutes villes</option>
        <option>Antananarivo</option>
        <option>Toamasina</option>
        <option>Mahajanga</option>
      </select>
    </div>

    <div class="grid gap-4">
      <article v-for="job in filteredJobs" :key="job.id" class="page-card text-rise transition hover:-translate-y-1 hover:shadow-md">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-xl font-bold text-slate-900">{{ job.title }}</h3>
          <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{{ job.type }}</span>
        </div>
        <p class="mt-1 text-sm text-slate-600">{{ job.company }} - {{ job.city }}</p>
        <p class="mt-3 text-slate-700">{{ job.description }}</p>
        <button class="btn-primary mt-4">Postuler</button>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const keyword = ref('')
const contract = ref('')
const city = ref('')

const jobs = [
  { id: 1, title: 'Designer UI/UX', company: 'Studio MJS', city: 'Antananarivo', type: 'CDD', description: 'Concevoir des interfaces accessibles pour les plateformes emploi jeunesse.' },
  { id: 2, title: 'Coach Insertion Professionnelle', company: 'ONG Talenta', city: 'Toamasina', type: 'CDI', description: 'Accompagner les jeunes dans la construction de leur projet de carriere.' },
  { id: 3, title: 'Developpeur Backend Node.js', company: 'Digital Hub', city: 'Mahajanga', type: 'Stage', description: 'Participer au developpement des API de matching candidat-recruteur.' },
]

const filteredJobs = computed(() =>
  jobs.filter((job) => {
    const keywordMatch =
      !keyword.value ||
      `${job.title} ${job.company} ${job.description}`.toLowerCase().includes(keyword.value.toLowerCase())
    const contractMatch = !contract.value || job.type === contract.value
    const cityMatch = !city.value || job.city === city.value
    return keywordMatch && contractMatch && cityMatch
  }),
)
</script>

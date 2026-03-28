<template>
  <section class="space-y-6">
    <header class="animated-hero">
      <div class="hero-pattern"></div>
      <div class="relative z-10">
        <div>
          <h1 class="gradient-title text-rise text-4xl font-black lg:text-5xl">Profils Candidats</h1>
          <p class="text-rise-delay mt-2 text-slate-600">Filtrez par metier, competences et localisation.</p>
        </div>
      </div>
    </header>

    <div class="page-card grid gap-3 md:grid-cols-3">
      <select v-model="job" class="input">
        <option value="">Tous metiers</option>
        <option>Developpeur</option>
        <option>Marketing</option>
        <option>Gestion de projet</option>
      </select>
      <select v-model="skill" class="input">
        <option value="">Toutes competences</option>
        <option>Vue.js</option>
        <option>SEO</option>
        <option>Leadership</option>
      </select>
      <select v-model="location" class="input">
        <option value="">Toutes localisations</option>
        <option>Antananarivo</option>
        <option>Antsirabe</option>
        <option>Fianarantsoa</option>
      </select>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <article v-for="profile in filteredProfiles" :key="profile.name" class="page-card text-rise transition hover:-translate-y-1 hover:shadow-md">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-bold">{{ profile.name }}</h3>
            <p class="text-sm text-slate-600">{{ profile.role }} - {{ profile.location }}</p>
          </div>
          <span class="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">Disponible</span>
        </div>
        <p class="mt-3 text-sm text-slate-700">{{ profile.bio }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="item in profile.skills" :key="`${profile.name}-${item}`" class="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{{ item }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const job = ref('')
const skill = ref('')
const location = ref('')

const profiles = [
  { name: 'Aina Rakoto', role: 'Developpeur', location: 'Antananarivo', bio: '2 ans d experience en applications web et mobile.', skills: ['Vue.js', 'Tailwind', 'Firebase'] },
  { name: 'Soa Randria', role: 'Marketing', location: 'Fianarantsoa', bio: 'Specialiste en communication digitale orientee resultats.', skills: ['SEO', 'Content', 'Analytics'] },
  { name: 'Mickael Rami', role: 'Gestion de projet', location: 'Antsirabe', bio: 'Pilotage de programmes de formation et insertion pro.', skills: ['Leadership', 'Planning', 'Scrum'] },
]

const filteredProfiles = computed(() =>
  profiles.filter((profile) => {
    const jobMatch = !job.value || profile.role === job.value
    const locationMatch = !location.value || profile.location === location.value
    const skillMatch = !skill.value || profile.skills.includes(skill.value)
    return jobMatch && locationMatch && skillMatch
  }),
)
</script>

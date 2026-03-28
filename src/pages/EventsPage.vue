<template>
  <section class="space-y-6">
    <header class="animated-hero">
      <div class="hero-pattern"></div>
      <div class="relative z-10">
        <div>
          <h1 class="gradient-title text-rise text-4xl font-black lg:text-5xl">Evenements</h1>
          <p class="text-rise-delay mt-2 text-slate-600">Salons, forums, ateliers et formations pour booster l employabilite.</p>
        </div>
      </div>
    </header>

    <div class="grid gap-4 md:grid-cols-2">
      <article v-for="event in events" :key="event.title" class="page-card text-rise transition hover:-translate-y-1 hover:shadow-md">
        <p class="text-xs font-semibold uppercase text-emerald-600">{{ event.date }}</p>
        <h3 class="mt-1 text-xl font-bold">{{ event.title }}</h3>
        <p class="mt-1 text-sm text-slate-600">{{ event.place }}</p>
        <p class="mt-3 text-slate-700">{{ event.details }}</p>
        <button class="btn-primary mt-4">Voir la fiche detaillee</button>
      </article>
    </div>

    <form class="page-card grid gap-4 md:grid-cols-2">
      <h2 class="section-title md:col-span-2">Inscription a un evenement</h2>
      <input class="input" placeholder="Nom complet" />
      <input class="input" type="email" placeholder="Email" />
      <input class="input" placeholder="Telephone" />
      <select class="input">
        <option>Selectionner un evenement</option>
        <option>Forum Emploi Jeunes 2026</option>
        <option>Atelier CV & Entretien</option>
      </select>
      <textarea class="input min-h-28 md:col-span-2" placeholder="Message ou besoin specifique"></textarea>
      <button class="btn-primary md:col-span-2 md:w-fit">Envoyer l inscription</button>
    </form>
  </section>
</template>

<script setup>
const events = [
  { date: '12 Avril 2026', title: 'Forum Emploi Jeunes 2026', place: 'Palais des Sports, Antananarivo', details: 'Rencontres directes avec les recruteurs, coaching et mini-entretiens.' },
  { date: '03 Mai 2026', title: 'Atelier CV & Entretien', place: 'MJS Regional, Toamasina', details: 'Session pratique pour valoriser les competences et reussir en entretien.' },
]
</script>

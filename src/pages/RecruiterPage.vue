<template>
  <section class="space-y-6">
    <header class="animated-hero">
      <div class="hero-pattern"></div>
      <div class="relative z-10">
        <div>
          <h1 class="gradient-title text-rise text-4xl font-black lg:text-5xl">Espace Recruteur</h1>
          <p class="text-rise-delay mt-2 text-slate-600">Creation de compte, publication d offres et suivi des candidatures.</p>
        </div>
      </div>
    </header>

    <div class="grid gap-6 lg:grid-cols-2">
      <form class="page-card text-rise grid gap-3">
        <h2 class="text-xl font-bold">Creation de compte recruteur</h2>
        <input class="input" placeholder="Nom de l entreprise" />
        <input class="input" placeholder="Responsable RH" />
        <input class="input" type="email" placeholder="Email professionnel" />
        <input class="input" type="password" placeholder="Mot de passe" />
        <button class="btn-primary w-fit">Creer mon compte</button>
      </form>

      <form class="page-card text-rise-delay grid gap-3">
        <h2 class="text-xl font-bold">Publier une offre</h2>
        <input class="input" placeholder="Intitule du poste" />
        <input class="input" placeholder="Localisation" />
        <select class="input">
          <option>Type de contrat</option>
          <option>CDI</option>
          <option>CDD</option>
          <option>Stage</option>
        </select>
        <textarea class="input min-h-28" placeholder="Description de l offre"></textarea>
        <button class="btn-primary w-fit">Publier l offre</button>
      </form>
    </div>

    <div class="page-card">
      <h2 class="text-xl font-bold">Tableau de bord de suivi (exemple)</h2>
      <div class="mt-4 grid gap-3 md:grid-cols-3">
        <div class="rounded-xl bg-emerald-50 p-4">
          <p class="text-xs font-semibold uppercase text-emerald-700">Offres actives</p>
          <p class="mt-1 text-3xl font-black text-emerald-700">12</p>
        </div>
        <div class="rounded-xl bg-slate-100 p-4">
          <p class="text-xs font-semibold uppercase text-slate-700">Candidatures recues</p>
          <p class="mt-1 text-3xl font-black text-slate-800">147</p>
        </div>
        <div class="rounded-xl bg-brand-red/10 p-4">
          <p class="text-xs font-semibold uppercase text-brand-red">Entretiens planifies</p>
          <p class="mt-1 text-3xl font-black text-brand-red">29</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

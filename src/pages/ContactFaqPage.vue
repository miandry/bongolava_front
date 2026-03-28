<template>
  <section class="space-y-6">
    <header class="animated-hero">
      <div class="hero-pattern"></div>
      <div class="relative z-10">
        <div>
          <h1 class="gradient-title text-rise text-4xl font-black lg:text-5xl">Contact / FAQ</h1>
          <p class="text-rise-delay mt-2 text-slate-600">Posez vos questions et consultez les reponses frequentes.</p>
        </div>
      </div>
    </header>

    <div class="grid gap-6 lg:grid-cols-2">
      <form class="page-card text-rise grid gap-3">
        <h2 class="text-xl font-bold">Formulaire de contact</h2>
        <input class="input" placeholder="Nom complet" />
        <input class="input" type="email" placeholder="Email" />
        <input class="input" placeholder="Sujet" />
        <textarea class="input min-h-32" placeholder="Votre message"></textarea>
        <button class="btn-primary w-fit">Envoyer</button>
      </form>

      <div class="page-card text-rise-delay">
        <h2 class="text-xl font-bold">FAQ</h2>
        <div class="mt-4 space-y-4">
          <article v-for="item in faq" :key="item.question">
            <h3 class="font-semibold text-slate-900">{{ item.question }}</h3>
            <p class="mt-1 text-sm text-slate-700">{{ item.answer }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faq = [
  { question: 'Comment creer mon profil candidat ?', answer: 'Rendez-vous dans la section Profils puis completez le formulaire d inscription.' },
  { question: 'La publication d offres est-elle gratuite ?', answer: 'Une formule gratuite est disponible pour les structures partenaires du programme.' },
  { question: 'Comment participer aux ateliers ?', answer: 'Choisissez un evenement et remplissez le formulaire d inscription.' },
]
</script>

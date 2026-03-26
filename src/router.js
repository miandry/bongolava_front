import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import JobsPage from './pages/JobsPage.vue'
import ProfilesPage from './pages/ProfilesPage.vue'
import EventsPage from './pages/EventsPage.vue'
import RecruiterPage from './pages/RecruiterPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactFaqPage from './pages/ContactFaqPage.vue'
import LegalPage from './pages/LegalPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/jobs', name: 'jobs', component: JobsPage },
  { path: '/profils', name: 'profiles', component: ProfilesPage },
  { path: '/evenements', name: 'events', component: EventsPage },
  { path: '/recruteur', name: 'recruiter', component: RecruiterPage },
  { path: '/a-propos', name: 'about', component: AboutPage },
  { path: '/contact-faq', name: 'contact-faq', component: ContactFaqPage },
  { path: '/mentions-legales', name: 'legal', component: LegalPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

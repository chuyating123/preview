import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Music from '../views/Music.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import MovieDetail from '../views/MovieDetail.vue'
import MusicDetail from '../views/MusicDetail.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/Movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/Music',
    name: 'Music',
    component: Music
  },
  {
    path: '/Book',
    name: 'Book',
    component: Book
  },
  {
    path: '/Photo',
    name: 'Photo',
    component: Photo
  },
   {
    path: '/MovieDetail',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/MusicDetail',
    name: 'MusicDetail',
    component: MusicDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

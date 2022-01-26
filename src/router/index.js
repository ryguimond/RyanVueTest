import Vue from 'vue'
import Router from 'vue-router'
import content from '../components/content.vue'
import main from '../components/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
			  path:"/content",
			  component: content,
			},
			{
			  path:"/main",
			  component: main,
			},
  ]
})

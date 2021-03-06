import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/events",
    name: "events",
    component: Events
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    path: "/event-create",
    name: "event-create",
    component: EventCreate
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

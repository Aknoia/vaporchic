import { RenderMode, ServerRoute } from '@angular/ssr';


const routesIDs: string[] = [
  "autovetture",
  "imbarcazioni",
  "divani",
  "materassi",
  "tappeti",
  "locali",
  "abitazioni",
  "animali",
  "ambienti",
  "camper",
  "incendi",
  "cardetailing",
  "tendedasole",
  "tappezzeria",
  "puliziastraordinaria"
]

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },

  {
    path: 'servizio/:id',
    renderMode: RenderMode.Prerender,

    async getPrerenderParams() {
      const idList = routesIDs;

      return idList.map(id => ({id}))
    }
  }
];

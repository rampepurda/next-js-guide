import { ROUTE } from './routes'

export const navPrimary = [
  {
    tKey: 'navMain.guide',
    link: ROUTE.GUIDE,
  },
  {
    tKey: 'navMain.projects',
    link: ROUTE.PROJECTS,
  },
  {
    tKey: 'navMain.typeScript',
    link: ROUTE.PAGES.TYPE_SCRIPT.HOME,
  },
]
export const sidebar = {
  guide: [
    {
      tKey: 'navGuide.ch-routing',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-routing`,
    },
    {
      tKey: 'navGuide.ch-environment',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-environment`,
    },
    {
      tKey: 'navGuide.ch-classNamesLib',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-classNamesLib`,
    },
    {
      tKey: 'navGuide.ch-loadingTypes',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-loadingTypes`,
    },
    {
      tKey: 'navGuide.ch-internationalization',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-internationalization`,
    },
    {
      tKey: 'navGuide.ch-reduxToolkit',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-reduxToolkit`,
    },
    {
      tKey: 'navGuide.ch-reduxToolkitSelector',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-reduxToolkitSelector`,
    },
    {
      tKey: 'navGuide.ch-propsWithChildren',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-propsWithChildren`,
    },
    {
      tKey: 'navGuide.ch-redirects',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-redirects`,
    },
    {
      tKey: 'navGuide.ch-useCallback',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-useCallback`,
    },
    {
      tKey: 'navGuide.ch-image',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-image`,
    },
    {
      tKey: 'navGuide.ch-graphQLApollo',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-graphQLApollo`,
    },
    {
      tKey: 'navGuide.ch-auth0',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-auth0`,
    },
    {
      tKey: 'navGuide.ch-focusTrapLib',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-focusTrapLib`,
    },
    {
      tKey: 'navGuide.ch-cssJSLib',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-cssJSLib`,
    },
    {
      tKey: 'navGuide.ch-webpack',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-webpack`,
    },
    {
      tKey: 'navGuide.ch-eighteen',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-eighteen`,
    },
    {
      tKey: 'navGuide.ch-internalAPI',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-internalAPI`,
    },
    {
      tKey: 'navGuide.ch-tailwind',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-tailwind`,
    },
    {
      tKey: 'navGuide.ch-hooksDifference',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-hooksDifference`,
    },
    {
      tKey: 'navGuide.ch-mediaQueriesLib',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-mediaQueriesLib`,
    },
    {
      tKey: 'navGuide.ch-useSWR',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-useSWR`,
    },
    {
      tKey: 'navGuide.ch-fontOptimization',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-fontOptimization`,
    },
    {
      tKey: 'navGuide.ch-formSubmit',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-formSubmit`,
    },
    {
      tKey: 'navGuide.ch-formAction',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-formAction`,
    },
    {
      tKey: 'navGuide.ch-useClientVsServer',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-useClientVsServer`,
    },
    {
      tKey: 'navGuide.ch-dangerouslySetInnerHTML',
      link: `${ROUTE.GUIDE_CHAPTERS}/ch-dangerouslySetInnerHTML`,
    },
  ],
  projects: [
    {
      tKey: 'navProjectsLeft.dynamicRouter',
      link: ROUTE.PHOTO_DETAIL,
    },
    {
      tKey: 'navProjectsLeft.cars',
      link: ROUTE.PROJECT_CARS,
    },
    {
      tKey: 'navProjectsLeft.countries',
      link: ROUTE.PROJECT_COUNTRIES,
    },
  ],
  typeScriptDoc: [
    {
      tKey: 'sidebarTypeScript.genericFunction',
      link: ROUTE.PAGES.TYPE_SCRIPT.GENERIC_FN,
    },
    {
      tKey: 'sidebarTypeScript.interfaces',
      link: ROUTE.PAGES.TYPE_SCRIPT.INTERFACE,
    },
    {
      tKey: 'Tuple, union types',
      link: ROUTE.PAGES.TYPE_SCRIPT.TUPLE_UNION,
    },
  ],
}

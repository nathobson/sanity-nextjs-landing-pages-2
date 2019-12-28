export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e07567f342b289d2bb18d12',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-5cyopykj',
                  apiId: '43167d3c-fb66-466d-a08c-855c0195d2d0'
                },
                {
                  buildHookId: '5e0756806855a3a09fd87bfa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-1krhpbgh',
                  apiId: '4ec6e95e-193a-439f-b362-8380250c4864'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathobson/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-1krhpbgh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee23c183aee2af172e202f1',
                  title: 'Sanity Studio',
                  name: 'hello-studio',
                  apiId: '9f2d21df-2fda-47e8-81d5-0e0606ca59ca'
                },
                {
                  buildHookId: '5ee23c18bf561756b835751a',
                  title: 'Blog Website',
                  name: 'hello-web',
                  apiId: 'a8c6e66c-299a-4be3-819e-6f51c426cad3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sunny-hsiao/hello',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hello-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

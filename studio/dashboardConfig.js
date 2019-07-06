export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d20102a43d2dd47e4f522e2',
                  title: 'Sanity Studio',
                  name: 'Ems-sanity-gatsby-blog-studio',
                  apiId: '63874cdf-f223-4da6-a1cd-0bc83cf41a15'
                },
                {
                  buildHookId: '5d20102ab916c84783ad2432',
                  title: 'Blog Website',
                  name: 'Ems-sanity-gatsby-blog',
                  apiId: 'd8e4cc89-fa45-4b6c-b8a1-68e3e54c78eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jwright4810/Ems-sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Ems-sanity-gatsby-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

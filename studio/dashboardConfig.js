export default {
  widgets: [
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
                  buildHookId: '5f5d8cc1c3e9a68467667b67',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-msppqp3g',
                  apiId: 'ee63c958-b729-4646-bdf8-82486ab76153'
                },
                {
                  buildHookId: '5f5d8cc1495aeb56cec39c35',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o7823cjv',
                  apiId: '8ed7c0fe-2d37-407d-843a-a1497fb36c81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krongk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o7823cjv.netlify.app', category: 'apps'}
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

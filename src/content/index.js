import { colors } from 'styles'

export default {
  home: {
    InvestorsSection: {
      heading: 'Our world-renowned investors share in our mission',
      investorData: {
        logo: 'http://via.placeholder.com/210x70',
        info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
        url: '/'
      },
      readMoreLink: 'Read more'
    }
  },
  footer: {
    links: {
      People: {
        color: colors.green,
        items: [
          { label: 'What we do', url: '/' },
          { label: 'Values and mission', url: '/' },
          { label: 'People and departments', url: '/' },
          { label: 'How we work', url: '/' },
          { label: 'Work with us', url: '/' }
        ]
      },
      Solutions: {
        color: colors.yellow,
        items: [
          { label: 'LaaS', url: '/' },
          { label: 'Kredito24', url: '/' },
          { label: 'Monedo', url: '/' },
          { label: 'For developers', url: '/' }
        ]
      },
      Company: {
        color: colors.blue,
        items: [
          { label: 'About Kreditech', url: '/' },
          { label: 'Leadership', url: '/' },
          { label: 'Successful solutions', url: '/' },
          { label: 'Investors and partners', url: '/' }
        ]
      },
    },
    copyright: `Copyright ${(new Date()).getFullYear()} Kreditech Holding SSL GmbH ® | All Rights Reserved`
  }
}

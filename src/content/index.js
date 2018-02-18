import { colors } from 'styles'

import payuLogo from 'assets/investors/payu.svg'
import blumbergCapitalLogo from 'assets/investors/blumberg-capital.svg'
import kreosCapitalLogo from 'assets/investors/kreos-capital.svg'
import vardeLogo from 'assets/investors/varde.png'
import peterThielLogo from 'assets/investors/peter-thiel.png'
import hpeLogo from 'assets/investors/hpe.png'
import victoryParkLogo from 'assets/investors/victory-park.png'
import rakutenLogo from 'assets/investors/rakuten.svg'
import amadeusLogo from 'assets/investors/amadeus.png'
import image1 from 'assets/story-person_1.png'
import image2 from 'assets/story-person_2.png'

export default {
  home: {
    InvestorsSection: {
      heading: 'Our world-renowned investors share in our mission',
      investors: [
        {
          name: 'PayU',
          logo: payuLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'Blumberg Capital',
          logo: blumbergCapitalLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'IFC',
          logo: 'http://via.placeholder.com/210x70',
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'Kreos Capital',
          logo: kreosCapitalLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'Varde',
          logo: vardeLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'Peter Thiel',
          logo: peterThielLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'HPE',
          logo: hpeLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'Victory Park Capital',
          logo: victoryParkLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'Rakuten',
          logo: rakutenLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
        {
          name: 'Amadeus',
          logo: amadeusLogo,
          info: 'A member of the World Bank Group, IFC is the largest global development institution focused on the private sector.',
          url: '/'
        },
      ],
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
    stories: [
      { id: 0, text: 'My story is more than awesome', photo: image1 },
      { id: 1, text: 'My story is great', photo: image2 },
      { id: 2, text: 'My story is awesome', photo: image1 }
    ],
    copyright: `Copyright ${(new Date()).getFullYear()} Kreditech Holding SSL GmbH ® | All Rights Reserved`
  }
}

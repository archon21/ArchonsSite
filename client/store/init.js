const defaultState = {
  phone: '860.861.9140',
  company: 'Archon Tech',
  projects: [
    {
      status: 'Completed June 2018',
      type: 'In Class Project',
      name: 'Baywatch',
      tools: ['React', 'Redux', 'Stripe', 'Express', 'Node', 'PostgresQL'],
      desc:
        'Online Marketplace where users can "buy" and "sell" watches using Stripe, React, Redux, Express, Node, and PostgresQL.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%209.45.42%20AM.png?alt=media&token=57e0c050-3a00-4bcd-9cd5-359b23d7e465',
      siteLink: 'http://baywatch-rrky.herokuapp.com/home',
      codeLink: 'https://github.com/Team-4-RRKY/Grace-Shopper-Project'
    },
    {
      name: 'Dime',
      status: 'Completed September 2018',
      tools: [
        'React Native',
        'Redux',
        'Firebase Suite',
        'Keras.js',
        'Google Cloud Vision',
        'D3'
      ],
      type: 'In Class Project',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%209.53.17%20AM.png?alt=media&token=39706aa2-2e6e-4e8b-94a8-85f5fe9331ae',
      codeLink: 'https://github.com/FourCents1804/Dime',
      codeLink2: 'https://github.com/FourCents1804/Backend',
      siteLink: 'https://www.youtube.com/watch?v=CqVy-NC4AT8&feature=youtu.be',
      desc:
        'A Personal Finance Mobile Application to help users keep track of spending habits and make improvements.'
    }
  ],
  works: [
    {
      status: 'Completed October 2018',
      tools: ['React', 'Redux', 'Firebase Suite', 'SCSS'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%2010.08.27%20AM.png?alt=media&token=426136fc-aec0-4848-aec6-e1743eb1d6ff',
      codeLink: 'https://github.com/archon21/HayesDevelopers',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://hayesdevelopers.com/',

      name: 'Hayes Developers',
      desc:
        'Preeminent Commercial Developer in the New England Area with an impressive portfolio, it has been an honor working with them.'
    },

    {
      status: 'Completed December 2018',
      tools: ['React', 'Redux', 'SCSS', 'Firebase Suite'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%2010.17.57%20AM.png?alt=media&token=b4619515-d505-4d84-85f0-a290228edbda',
      codeLink: 'https://github.com/archon21/MariasPizza',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://mariaspizzapalace.com/',
      name: 'Marias Pizza',
      desc:
        'A family owned and operated restaurant serving Greek Cuisine in my hometown of Colchester, CT.'
    },
    {
      status: 'Completed March 2019',
      tools: ['HTML', 'CSS', 'Wordpress', 'jQuery'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Screen%20Shot%202019-03-29%20at%2011.08.25%20AM.png?alt=media&token=aa0c5650-313d-4361-8282-5dcfebe65cc9',
      // codeLink: 'https://github.com/archon21/MariasPizza',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://biguglyshow.com/',
      name: 'The Big Ugly Show',
      desc: 'Created for the comedy troop "Big Ugly Show", based in Boston, MA.'
    }
  ],
  currentWorks: [
    {
      status: 'Currently In Beta',
      tools: [
        'React',
        'Redux',
        'SCSS',
        'Slate.js',
        'Material-UI',
        'Material Design'
      ],
      type: 'Current Employment',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%2010.12.58%20AM.png?alt=media&token=384b02a5-433e-4e87-a3a4-f2401ba23c14',
      codeLink: 'https://gitlab.com/demilletech/isoscribe/frontend',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://isoscribe.com/',
      name: 'Isoscribe',
      desc:
        'I was hired by demilleTech to build the frontend of "Isoscribe", a community based blogging Web App. With their backend teams excellent solutions, it has been a grand time working for them.'
    },
    {
      status: 'In Development',
      tools: ['React', 'Redux', 'SCSS', 'Ytdl', 'Node', 'Firebase'],
      type: 'Personal Project',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%2010.12.58%20AM.png?alt=media&token=384b02a5-433e-4e87-a3a4-f2401ba23c14',
      codeLink: 'https://github.com/archon21/vulpes',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://vulpes-26185.web.app',
      name: 'Vulpes',
      desc:
        'I wanted a way to retrieve audio from Youtube and store files on the cloud and decided to pair that with a browser based audio player.'
    },
    {
      status: 'Planning Stages',
      tools: ['React', 'Redux', 'Firebase Suite', 'SCSS'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Screen%20Shot%202019-03-29%20at%2011.07.31%20AM.png?alt=media&token=30395148-a803-4af0-bc9e-bb63f1e4249f',
      // codeLink: 'https://github.com/FourCents1804/Dime',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      // siteLink: 'https://westchester-marketplace.firebaseapp.com/',
      name: 'Westchester Marketplace',
      desc:
        'Small town grocery store that I used to manage, currently building a small site that has buisness utility in the form of a custom sign templator.'
    }
  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

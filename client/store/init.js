const defaultState = {
  phone: '860.861.9140',
  company: 'Archon Tech',
  projects: [
    {
      status: 'Completed June 2018',
      type: 'In class Project',
      name: 'Baywatch',
      tools: ['React', 'Redux', 'Stripe', 'Express', 'Node', 'PostgresQL.'],
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
        'Firebase',
        'Keras.js',
        'Google Cloud Vision',
        'D3'
      ],
      type: 'In class Project',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%209.53.17%20AM.png?alt=media&token=39706aa2-2e6e-4e8b-94a8-85f5fe9331ae',
      codeLink: 'https://github.com/FourCents1804/Dime',
      codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://www.youtube.com/watch?v=CqVy-NC4AT8&feature=youtu.be',
      desc:
        'A Personal Finance Mobile Application to help users keep track of spending habits and make improvements using React Native, Redux, Firebase(Realtime Database, Storage, Auth), Keras.js, Google Cloud Vision & Language APIs, D3'
    },
    {
      status: 'Ongoing',
      tools: ['React', 'Redux', 'Stripe', 'Express', 'Node', 'PostgresQL.'],
      name: 'Voteanonomous',
      type: 'In class / Personal Project',
      desc:
        'React Native App where users can cast ballots by adding blocks to a blockchain and see their Representatives and Upcoming Elections using React Native, Redux, MongoDB, Mongoose.'
    }
  ],
  works: [
    {
      status: 'Completed October 2018',
      tools: ['React', 'Redux', 'Firebase', 'Sass'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%2010.08.27%20AM.png?alt=media&token=426136fc-aec0-4848-aec6-e1743eb1d6ff',
      // codeLink: 'https://github.com/FourCents1804/Dime',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://hayesdevelopers.firebaseapp.com/',

      name: 'Hayes Developers',
      desc:
        'Preeminent Commercial Developer in the New England Area with an impressive portfolio, it was an honor to have their business.'
    },

    {
      status: 'Completed December 2018',
      tools: ['React', 'Redux', 'Sass', 'Firebase'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%2010.17.57%20AM.png?alt=media&token=b4619515-d505-4d84-85f0-a290228edbda',
      // codeLink: 'https://github.com/FourCents1804/Dime',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://mariaspizza.firebaseapp.com/',
      name: 'Marias Pizza',
      desc:
        'A family owned and operated Pizza Place in my hometown of Colchester, CT.'
    },
    {
      status: 'Completed March 2019',
      tools: ['HTML', 'CSS', 'Wordpress'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Screen%20Shot%202019-03-29%20at%2011.08.25%20AM.png?alt=media&token=aa0c5650-313d-4361-8282-5dcfebe65cc9',
      // codeLink: 'https://github.com/FourCents1804/Dime',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://biguglyshow.com/',
      name: 'The Big Ugly Show',
      desc: 'Created for a comedy troop based in Boston, MA.'
    }
  ],
  currentWorks: [
    {
      status: 'In Beta March 2019',
      tools: ['React', 'Redux', 'Sass'],
      type: 'Current Employment',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/site-pics%2FScreen%20Shot%202019-03-22%20at%2010.12.58%20AM.png?alt=media&token=384b02a5-433e-4e87-a3a4-f2401ba23c14',
      // codeLink: 'https://github.com/FourCents1804/Dime',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      siteLink: 'https://isoscribe.com/',
      name: 'Isoscribe',
      desc:
        'I was hired by demilleTech to build the frontend of the new Blog site on the Block. With their backend teams professionalism and excellent practices, it has only been a grand time working for them.'
    },
    {
      status: 'In Dev March 2019',
      tools: ['HTML', 'CSS', 'Wordpress'],
      type: 'Contract for Client',
      img:
        'https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Screen%20Shot%202019-03-29%20at%2011.07.31%20AM.png?alt=media&token=30395148-a803-4af0-bc9e-bb63f1e4249f',
      // codeLink: 'https://github.com/FourCents1804/Dime',
      // codeLink2: 'https://github.com/archon21/Voteanonymous-Backend',
      // siteLink: 'https://westchester-marketplace.firebaseapp.com/',
      name: 'Westchester Marketplace',
      desc:
        'Small town grocery store that I used to manage, building a small site that has buisness utility in the form of a custom sign templator.'
    }
  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

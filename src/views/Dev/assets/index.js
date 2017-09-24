import babs from './babs.jpg'
import foodTrucks from './foodTrucks.jpg'
import frontend from './frontend.jpg'
import generative from './generative.jpg'
import helpout from './helpout.jpg'
import nycCollisions from './nycCollisions.jpg'

const assets = [
  {
    thumb: frontend,
    title: 'Frontend Scripts',
    desc: 'Scripts with more package support to be used with Facebook\'s create-react-app. Used in the creation of this website.',
    demo: 'http://frontend-scripts.surge.sh',
    source: 'https://github.com/jonlu/frontend-scripts'
  },
  {
    thumb: nycCollisions,
    title: 'Nyc Collisions Vis',
    desc: 'Visualizes collision severity and frequency in New York City. Allows filtering and sub-selection of map areas and presents graph data accordingly. ',
    demo: 'https://jonlu.github.io/NYC-Collisions-Vis/',
    source: 'https://github.com/jonlu/NYC-Collisions-Vis/'
  },
  {
    thumb: babs,
    title: 'Bay Area Bike Share Vis',
    desc: 'Visualizes bike share data in San Francisco, 2016. Allows multi-selection of points and graph scrubbing/zooming.',
    demo: 'https://jonlu.github.io/BABS-Visualization/',
    source: 'https://github.com/jonlu/BABS-Visualization'
  },
  {
    thumb: foodTrucks,
    title: 'Food Truck Vis',
    desc: 'A presentational visualization of San Francisco Food Truck Permits with a map and basic graphs. ',
    demo: 'https://jonlu.github.io/SF-Food-Truck-Vis/',
    source: 'https://github.com/jonlu/SF-Food-Truck-Vis'
  },
  {
    thumb: generative,
    title: 'Generative Interaction',
    desc: 'Procedural geometric design generation with interactive rgb lighting and camera viewing angles.',
    source: 'https://github.com/jonlu/generative-interaction'
  },
  {
    thumb: helpout,
    title: 'HelpOut',
    desc: 'A full-stack webapp to easily connect volunteers and organizations. Created during HackingEDU 2015',
    demo: 'https://jonlu.github.io/HelpOut/',
    source: 'https://github.com/jonlu/HelpOut'
  }
]

export default assets

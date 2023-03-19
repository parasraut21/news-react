import React, { Component } from "react";
import Gif from "./Gif";
import { Newsitem } from "./Newsitem";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
  static defauldProps ={
    country :'us',
    category:'general'
  }
  static propTypes ={
    country : PropTypes.string,
    category : PropTypes.string,
  }
  articles = [
    {
        "source": {
          "id": null,
          "name": "India Today"
        },
        "author": "India Today Video Desk",
        "title": "Every human cough at Mount Everest is still there - India Today - India Today",
        "description": "Everest is known for its beautiful terrains and a few highly motivated individuals who trek these terrains. These mountaineers not only leave footprints behind but also their germs. What happens to these germs? Watch the video to find out.",
        "url": "https://www.indiatoday.in/newsmo/video/every-human-cough-at-mount-everest-is-still-there-2348349-2023-03-18",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/assets/202303/IMG-20230318-WA0004-original--sixteen_nine_0-sixteen_nine.jpg?VersionId=JTtWXP8Sp0UhLuC6rJjYwXaRgZH80luh",
        "publishedAt": "2023-03-18T07:57:00Z",
        "content": "Everest is known for its beautiful terrains and a few highly motivated individuals who trek these terrains. These mountaineers not only leave footprints behind but also their germs. What happens to t… [+39 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "PTI",
        "title": "3D picture of odour molecule created, could help decipher sense of smell: Study - Indiatimes.com",
        "description": "Science News: NEW DELHI: Scientists have created the first molecular-level, 3D picture of how an odour molecule activates a human odorant receptor, a crucial step t.",
        "url": "https://timesofindia.indiatimes.com/home/science/3d-picture-of-odour-molecule-created-could-help-decipher-sense-of-smell-study/articleshow/98750819.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98750868,width-1070,height-580,imgsize-195278,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-03-18T07:13:00Z",
        "content": ""
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "Fireball in the sky: Video shows bright streaks of light soaring over CA - ABC7 News Bay Area",
        "description": null,
        "url": "https://www.youtube.com/watch?v=sL6XkVkjf7A",
        "urlToImage": null,
        "publishedAt": "2023-03-18T07:03:14Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
      },
      {
        "source": {
          "id": null,
          "name": "Voiceofsikkim.com"
        },
        "author": null,
        "title": "NASA suggests employing sweeper spacecraft and lasers to combat space junk - The Voice Of Sikkim",
        "description": "Pakyong, 18 March: NASA has released a new report that examines the use of lasers and “sweeper spacecraft” to address the issue of space junk, which could further contribute to the sense that we are living in a science fiction novel due to the involvement of …",
        "url": "https://www.voiceofsikkim.com/nasa-suggests-employing-sweeper-spacecraft-and-lasers-to-combat-space-junk/",
        "urlToImage": "https://www.voiceofsikkim.com/wp-content/uploads/2023/03/NASA-1.png",
        "publishedAt": "2023-03-18T06:53:23Z",
        "content": "Space Science\r\nNASA suggests employing sweeper spacecraft and lasers to combat space junk\r\nPakyong, 18 March: NASA has released a new report that examines the use of lasers and “sweeper spacecraft” t… [+1851 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "SpaceX launches 50 Starlink satellites; Remains of six women found in Mexico | WION Global Round-up - WION",
        "description": "In Global Round-Up by WION, we bring you news from around the world. In today's edition - SpaceX launches 50 Starlink satellites into space, Remains of six m...",
        "url": "https://www.youtube.com/watch?v=OdnuxPRRtA0",
        "urlToImage": "https://i.ytimg.com/vi/OdnuxPRRtA0/maxresdefault.jpg",
        "publishedAt": "2023-03-18T06:26:11Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "65-foot Asteroid 2023 EZ flying towards Earth today, says NASA; Will it get too close? - HT Tech",
        "description": "NASA has informed about a 65-foot asteroid named 2023 EZ which is racing towards Earth today. Will it come too close to the planet? Know speed, distance, and more here.",
        "url": "https://tech.hindustantimes.com/tech/news/65foot-asteroid-2023-ez-flying-towards-earth-today-says-nasa-will-it-get-too-close-71679118369531.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/18/1600x900/asteroid-4376113_640_1678066436475_1679118592630_1679118592630.jpg",
        "publishedAt": "2023-03-18T05:54:30Z",
        "content": "What are the threats for planet Earth? Our planet is surrounded by a huge number of near-Earth objects (NEO) in space that pose a threat to the entire planet. Asteroids fall in this category. The imp… [+1585 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Devdiscourse"
        },
        "author": "Devdiscourse News Desk",
        "title": "One or more of Uranus' moons might have hidden oceans, new study suggests | Science-Environment - Devdiscourse",
        "description": "Read more about One or more of Uranus’ moons might have hidden oceans, new study suggests on Devdiscourse",
        "url": "https://www.devdiscourse.com/article/science-environment/2384096-one-or-more-of-uranus-moons-might-have-hidden-oceans-new-study-suggests",
        "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/01_06_2022_00_58_53_235943.jpg?width=920&format=jpeg",
        "publishedAt": "2023-03-18T04:33:16Z",
        "content": "A new study suggests that one or more of Uranus' moons may have oceans beneath their icy surfaces and are actively spewing some of their material into space, possibly through plumes.\r\nFor this study,… [+2605 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Oup.com"
        },
        "author": null,
        "title": "method of photometric data extraction for asteroids from time-domain surveys - Oxford Academic",
        "description": null,
        "url": "https://academic.oup.com/mnras/advance-article/doi/10.1093/mnras/stad765/7080171",
        "urlToImage": null,
        "publishedAt": "2023-03-18T02:51:05Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "EurekAlert"
        },
        "author": null,
        "title": "Quantum sensing in outer space: New NASA-funded research will build next-gen tech to better measure climate - EurekAlert",
        "description": "Texas Engineers are leading a multi-university research team that will build technology and tools to improve measurement of important climate factors by observing atoms in outer space. \n\nThey will focus on the concept of quantum sensing, which use quantum phy…",
        "url": "https://www.eurekalert.org/news-releases/983161",
        "urlToImage": "https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/b9850279-7958-4293-b12c-321c9401d2b7/Rendition/thumbnail/Content/Public",
        "publishedAt": "2023-03-18T02:02:50Z",
        "content": "image: The Perito Moreno Glacier in Argentina is seen from the International Space Station on Feb. 21, 2012. A new NASA Space Technology Research Institute will specialize in advancing quantum sensin… [+4885 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "EurekAlert"
        },
        "author": null,
        "title": "NASA announces future launch for USU-led space weather mission - EurekAlert",
        "description": "NASA has announced that the launch of the Utah State University Space Dynamics Laboratory and College of Science-led Atmospheric Waves Experiment, or AWE, is scheduled for December 2023. The NASA-funded instrument will launch from Cape Canaveral Space Force S…",
        "url": "https://www.eurekalert.org/news-releases/983160",
        "urlToImage": "https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/4cec8ef6-9d7b-4abe-a484-7aefa9cb118c/Rendition/thumbnail/Content/Public",
        "publishedAt": "2023-03-18T02:02:50Z",
        "content": "image: Space Dynamics Laboratory Engineer and Scientist Brian Thompson, Engineering Associate Dave Griffin, and Mission Assurance Manager Russ Kirkham are pictured mounting the AWE Opto-Mechanical As… [+5801 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Dailyexcelsior.com"
        },
        "author": "Daily Excelsior",
        "title": "Low oxygen conditions on coral reefs could intensify by up to 287 pc by 2100: Study - Daily Excelsior",
        "description": "NEW DELHI, Mar 17: Scientists have projected using climate models a substantial increase in cases of hypoxia, or low oxygen conditions on coral reefs, by the year 2100 under all warming scenarios. According to them, the increase ranges from 13 to 42 per cent …",
        "url": "https://www.dailyexcelsior.com/low-oxygen-conditions-on-coral-reefs-could-intensify-by-up-to-287-pc-by-2100-study/",
        "urlToImage": "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/03/download-7-14.jpg",
        "publishedAt": "2023-03-18T00:29:11Z",
        "content": "NEW DELHI, Mar 17: Scientists have projected using climate models a substantial increase in cases of hypoxia, or low oxygen conditions on coral reefs, by the year 2100 under all warming scenarios.Acc… [+4213 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "WION"
        },
        "author": "WION Web Team",
        "title": "Aliens on distant exoplanets? Scientists say `terminator zones` could harbour life - WION",
        "description": "Aliens on distant exoplanets? Scientists say terminator zones could harbour life",
        "url": "https://www.wionews.com/science/aliens-on-distant-exoplanets-scientists-say-terminator-zones-could-harbour-life-573183",
        "urlToImage": "http://cdn.wionews.com/sites/default/files/2023/03/18/339454-aliens.png",
        "publishedAt": "2023-03-17T22:50:42Z",
        "content": "A recent study was conducted by astronomers from the University of California, Irvine in which they suggested the possibility of aliens hiding in special 'terminator zones' on distant exoplanets, whe… [+2652 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "What's Trending: Scientists discover volcanic activity on Venus - Hawaii News Now",
        "description": "Woah! Scientists have discovered volcanic activity on Venus. For more Local News from Hawaii News Now: www.hawaiinewsnow.comFor more YouTube Content: https:/...",
        "url": "https://www.youtube.com/watch?v=W0qSzFHMo_E",
        "urlToImage": "https://i.ytimg.com/vi/W0qSzFHMo_E/maxresdefault.jpg",
        "publishedAt": "2023-03-17T20:31:38Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "The President's Budget Request for the Agency on This Week @NASA – March 17, 2023 - NASA",
        "description": "The President’s Budget Request for NASA, Crew-5 is safely back on Earth, and a look at a possible Moon mission spacesuit … a few of the stories to tell you a...",
        "url": "https://www.youtube.com/watch?v=5nEnnsiHceo",
        "urlToImage": "https://i.ytimg.com/vi/5nEnnsiHceo/maxresdefault.jpg",
        "publishedAt": "2023-03-17T19:50:04Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Dailyexcelsior.com"
        },
        "author": "Daily Excelsior",
        "title": "Water in space – a 'Goldilocks' star reveals previously hidden step in how water gets to planets like Earth - Daily Excelsior",
        "description": "Charlottesville (US), Mar 17: Without water, life on Earth could not exist as it does today. Understanding the history of water in the universe is critical to understanding how planets like Earth come to be. Astronomers typically refer to the journey water ta…",
        "url": "https://www.dailyexcelsior.com/water-in-space-a-goldilocks-star-reveals-previously-hidden-step-in-how-water-gets-to-planets-like-earth/",
        "urlToImage": "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/03/download-6-14.jpg",
        "publishedAt": "2023-03-17T19:07:04Z",
        "content": "Charlottesville (US), Mar 17: Without water, life on Earth could not exist as it does today. Understanding the history of water in the universe is critical to understanding how planets like Earth com… [+6526 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Universe Today"
        },
        "author": "Evan Gough",
        "title": "The Universe Sparkles in Gamma Rays in this New NASA Animation - Universe Today",
        "description": "Most of the gamma ray sources in this animation are blazars, supermassive black holes with relativistic jets pointed at Earth.",
        "url": "https://www.universetoday.com/160597/the-universe-sparkles-in-gamma-rays-in-this-new-nasa-animation/",
        "urlToImage": "https://www.universetoday.com/wp-content/uploads/2023/03/Fermi_LAT_LCR_Still_print.jpg",
        "publishedAt": "2023-03-17T18:52:58Z",
        "content": "We’ve come a long way since gamma rays were discovered.\r\nThe late 1800s and early 1900s were a time of great scientific advancements. Scientists were just getting a handle on the different types of r… [+6083 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Phys.Org"
        },
        "author": "Andy Tomaswick",
        "title": "The best way to learn about Venus could be with a fleet of balloons - Phys.org",
        "description": "Interest in the exploration of Venus has kicked up a notch lately, especially after a contested recent discovery of phosphine, a potential biosignature, in the planet's atmosphere. Plenty of missions to Venus have been proposed, and NASA and ESA have recently…",
        "url": "https://phys.org/news/2023-03-venus-fleet-balloons.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/the-best-way-to-learn.jpg",
        "publishedAt": "2023-03-17T18:52:43Z",
        "content": "Interest in the exploration of Venus has kicked up a notch lately, especially after a contested recent discovery of phosphine, a potential biosignature, in the planet's atmosphere. Plenty of missions… [+5427 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Science.org"
        },
        "author": "Science",
        "title": "Biointerface mineralization generates ultraresistant gut microbes as oral biotherapeutics - Science",
        "description": null,
        "url": "https://www.science.org/doi/10.1126/sciadv.ade0997",
        "urlToImage": null,
        "publishedAt": "2023-03-17T18:15:16Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "ThePrint"
        },
        "author": "ANI",
        "title": "Activity deep in Earth affects the global magnetic field: Research - ThePrint",
        "description": "Leeds [UK], March 17 (ANI): Some of the issues brought on by anomalies in the Earth’s magnetic field include compass readings that do not indicate true north and interference with satellite operations. The activities that take place deep inside the Earth’s co…",
        "url": "https://theprint.in/science/activity-deep-in-earth-affects-the-global-magnetic-field-research/1452816/",
        "urlToImage": null,
        "publishedAt": "2023-03-17T18:13:27Z",
        "content": "Leeds [UK], March 17 (ANI): Some of the issues brought on by anomalies in the Earth’s magnetic field include compass readings that do not indicate true north and interference with satellite operation… [+3172 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "SciTechDaily"
        },
        "author": null,
        "title": "Ancient Proteins Offer New Clues About the Origin of Life on Earth - SciTechDaily",
        "description": "Researchers have used laboratory simulations to recreate the conditions of early Earth and have discovered that the evolution of ancient proteins into all forms of life on the planet, including plants, animals, and humans, would not have been possible without…",
        "url": "https://scitechdaily.com/?p=257312",
        "urlToImage": "https://scitechdaily.com/images/Origin-Emergence-of-Life-Concept.jpg",
        "publishedAt": "2023-03-17T17:54:50Z",
        "content": "ByJohns Hopkins UniversityMarch 17, 2023\r\nThe origin of life is a scientific mystery that has captivated researchers for centuries. While there are many theories about how life first arose on Earth, … [+6529 chars]"
      }
    
  ];
  
  constructor(props) {
    super(props);
    //console.log("Hello i am consturctor from news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
    document.title ='Science - Top Headlines';
    document.body.style.backgroundColor = "#557A95";
  }
  style={
    color:'white'
  }
 async componentDidMount(){
  this.setState({loading : true})
   // let url=" https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b28391f716ad49f2a0dfe3032cde0cc2";
 // let url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=6`;
 // let data = await fetch(url);
//   this.props.setProgress(50);
//  // let pd = await data.json();
//   this.props.setProgress(70);
  this.setState({articles : this.articles,  loading:false });

     
   }
  render() {
    
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={this.style}>News - Top Science Headlines </h2>
        {this.state.loading && <Gif/>}
        {/* !this.state.loading && */}
        <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={<Gif/>}
  >
   

  
          <div className="row">
            {  this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
             <div className="container">
                  <Newsitem
                    title={e.title?e.title:""}
                    description={e.description?e.description:""}
                    imageurl={e.urlToImage}
                    newsurl={e.url}
                    date={e.publishedAt}
                    author={e.author}
                    source={e.source.name}
                  />
                </div>
                </div>
              );
            })}
          </div>
        
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.prevclick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextclick}> Next &rarr;</button>
          </div> */}
        </div>
      </>
    );
  }
}



export default News;
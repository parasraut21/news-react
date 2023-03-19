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
          "name": "NDTV News"
        },
        "author": "Asian News International",
        "title": "\"Don't Treat Me Like A Cricketer...\": How Virat Kohli Startled Royal Challengers Bangalore Fitness C.. - NDTV Sports",
        "description": "Virat Kohli's passion for fitness is well known, but beyond the personal spectrum it has also sparked a revolution in Indian cricket",
        "url": "https://sports.ndtv.com/ipl-2023/dont-treat-me-like-a-cricketer-how-virat-kohli-startled-royal-challengers-bangalore-fitness-coach-3871902",
        "urlToImage": "https://c.ndtvimg.com/2022-05/pcn1ig4_virat-kohli-training-instagram_625x300_02_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2023-03-18T07:15:55Z",
        "content": "Virat Kohli's passion for fitness is well known, but beyond the personal spectrum it has also sparked a revolution in Indian cricket with the players embracing a new culture of fitness. While Kohli i… [+2578 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": "Madushka Balasuriya",
        "title": "Recent Match Report - New Zealand vs Sri Lanka 2nd Test 2022/23 - ESPNcricinfo",
        "description": "Henry, Doug Bracewell struck early as Sri Lanka face a stiff battle to save the game",
        "url": "https://www.espncricinfo.com/series/sri-lanka-tour-of-new-zealand-2022-23-1322351/new-zealand-vs-sri-lanka-2nd-test-1322358/match-report",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/356400/356448.6.jpg",
        "publishedAt": "2023-03-18T06:56:15Z",
        "content": "ReportHenry, Doug Bracewell struck early as Sri Lanka face a stiff battle to save the game"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "Can Umran Malik Break Shoaib Akhtar's Speed Record? Ex-Pakistan Pacer Gives Honest Verdict - NDTV Sports",
        "description": "Shoaib Akhtar guided Umran Malik to keep up with his pace and aggression even if he gets hit for runs.",
        "url": "https://sports.ndtv.com/cricket/can-umran-malik-break-shoaib-akhtars-speed-record-ex-pakistan-pacer-gives-honest-verdict-3870268",
        "urlToImage": "https://c.ndtvimg.com/2023-01/oehki42g_umran-malik-afp_625x300_12_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2023-03-18T06:52:05Z",
        "content": "Former Pakistan pacer Shoaib Akhtar said that he would be really happy if India pacer Umran Malik breaks his record of bowling the fastest delivery in international cricket. He also said that he is r… [+1274 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Crictracker.com"
        },
        "author": "CricTracker Staff",
        "title": "PSL 2023: Final, MUL vs LAH Match Prediction – Who will win today’s PSL match between MUL vs LAH? - CricTracker",
        "description": "Courtesy of a terrific run chase against Peshawar Zalmi in the second eliminator of the competition, defending champions Lahore Qalandars (LAH) once again qualified for the finals of the PSL 2023, whi",
        "url": "https://www.crictracker.com/cricket-match-predictions/psl-2023-final-mul-vs-lah-match-prediction-who-will-win-todays-psl-match-between-mul-vs-lah/",
        "urlToImage": "https://media.crictracker.com/media/attachments/1677417377658_Multan-Sulthans.jpeg",
        "publishedAt": "2023-03-18T06:45:00Z",
        "content": "Courtesy of a terrific run chase against Peshawar Zalmi in the second eliminator of the competition, defending champions Lahore Qalandars (LAH) once again qualified for the finals of the PSL 2023, wh… [+3965 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Iplt20.com"
        },
        "author": null,
        "title": "Michael Bracewell joins Royal Challengers Bangalore as a replacement for Will Jacks - IPLT20.com",
        "description": "Michael Bracewell joins Royal Challengers Bangalore as a replacement for Will Jacks",
        "url": "https://www.iplt20.com/news/3861/michael-bracewell-joins-royal-challengers-bangalore-as-a-replacement-for-will-jacks",
        "urlToImage": "https://assets.iplt20.com/bcci/articles/1679120385__AI_0460.jpg",
        "publishedAt": "2023-03-18T06:39:53Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Zoom"
        },
        "author": "TN Sports Desk",
        "title": "It's getting monotonous...: Sachin Tendulkar suggests dynamic changes to make ODI format interesting - Times Now",
        "description": "​Sachin Tendulkar has suggested a few dynamic changes to ODI cricket to make it interesting saying that the format has gotten monotonous. ODI cricket's future has come under the scanner because of T20 cricket's rise while most experts and former cricketers ha…",
        "url": "https://www.timesnownews.com/sports/cricket/its-getting-monotonous-sachin-tendulkar-suggestions-dynamic-changes-to-make-odi-format-interesting-article-98749089",
        "urlToImage": "https://static.tnn.in/thumb/msid-98749089,updatedat-1679121462524,width-1280,height-720,resizemode-75/98749089.jpg",
        "publishedAt": "2023-03-18T06:37:00Z",
        "content": "Aquarius, start exploring business ideas; daily horoscope for all zodiac signs today, March 17, 2023"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "IND vs AUS 2nd ODI: India aim to seal ODI series on Rohit Sharma's return to captaincy duties | Cricket News - Indiatimes.com",
        "description": "Cricket News:  Team India will aim to pocket series when they face Australia in the second ODI at the Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium in Visakha",
        "url": "https://timesofindia.indiatimes.com/sports/cricket/australia-in-india/ind-vs-aus-2nd-odi-india-aim-to-seal-odi-series-on-rohit-sharmas-return-to-captaincy-duties/articleshow/98749869.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98750032,width-1070,height-580,imgsize-69210,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-03-18T06:28:00Z",
        "content": "Embattled KL Rahul, Ravindra Jadeja calmed those watching from outside: Hardik PandyaHardik Pandya gave a big thumbs up to the embattled KL Rahul and Ravindra Jadeja, following India's five-wicket wi… [+183 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "India vs Australia: Wife Athiya Shetty's Post For \"Most Resilient\" KL Rahul After Striking Form Is P.. - NDTV Sports",
        "description": "KL Rahul hit an unbeaten 75 to take India to a five-wicket win over Australia in the first ODI of a three-match series at home",
        "url": "https://sports.ndtv.com/india-vs-australia-2023/wife-athiya-shettys-post-for-most-resilient-kl-rahul-after-striking-form-is-pure-love-3871802",
        "urlToImage": "https://c.ndtvimg.com/2023-03/2c2gtjv8_athiya-kl-rahul_625x300_18_March_23.jpg",
        "publishedAt": "2023-03-18T06:20:57Z",
        "content": "For KL Rahul, it was a redemption that was badly needed. The talented batter has been under fire for most part of the last one year. In all three formats, Rahul was not being able to hit big runs and… [+1515 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Barca Blaugranes"
        },
        "author": "Renato Tavares",
        "title": "How will Barcelona line up against Real Madrid in El Clásico to decide La Liga? - Barca Blaugranes",
        "description": "Barça play the biggest game of the season on Sunday",
        "url": "https://www.barcablaugranes.com/barcelona-la-liga/2023/3/18/23645625/how-will-barcelona-line-up-against-real-madrid-el-clasico-la-liga",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/U5nQl_Nf02dfX6i-EhR1cUVISS4=/0x0:4143x2169/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24517257/1471946373.jpg",
        "publishedAt": "2023-03-18T06:00:00Z",
        "content": "The biggest game of Barcelona's season is here. The leaders of La Liga take on their biggest rivals Real Madrid in the latest edition of El Clásico, and Barça can increase their lead at the top of th… [+2784 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": "ESPNcricinfo staff",
        "title": "Suryakumar Yadav, Alyssa Healy, Mehidy Hasan and Jonny Bairstow win ESPNcricinfo awards for 2022 - ESPNcricinfo",
        "description": "Six Indians, five England players and two Bangladeshis win honours",
        "url": "https://www.espncricinfo.com/story/espncricinfo-awards-2022-suryakumar-yadav-alyssa-healy-mehidy-hasan-and-jonny-bairstow-win-1356560",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/353800/353819.png",
        "publishedAt": "2023-03-18T04:46:17Z",
        "content": "Sambit Bal, Ian Bishop, Peter Borren, Peter Della Penna, Nagraj Gollapudi, Mohammad Isam, Wasim Jaffer, Raunak Kapoor, Farveez Maharoof, Andrew McGlashan, Andrew Miller, Sidharth Monga, Tom Moody, Fi… [+131 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": "Shashank Kishore",
        "title": "Giants and RCB desperately need full points and a net run-rate boost - ESPNcricinfo",
        "description": "A win will leave both teams with a chance of sneaking into the playoffs if other results go their way",
        "url": "https://www.espncricinfo.com/series/women-s-premier-league-2022-23-1348825/royal-challengers-bangalore-women-vs-gujarat-giants-women-16th-match-1358944/match-preview",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/355700/355791.6.jpg",
        "publishedAt": "2023-03-18T04:32:00Z",
        "content": "Ash Gardner: 'We've been inconsistent, but tonight was clinical'"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": "Sidharth Monga",
        "title": "ESPNcricinfo Awards 2022 Men's ODI bowling winner: Bumrah blows England's house down - ESPNcricinfo",
        "description": "The India spearhead got rid of England's top order cheap and then took another three for good measure",
        "url": "https://www.espncricinfo.com/story/espncricinfo-awards-2022-men-s-odi-bowling-winner-jasprit-bumrah-6-for-19-vs-england-1356617",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/342500/342528.6.jpg",
        "publishedAt": "2023-03-18T04:11:35Z",
        "content": "Boom go the stumps: Bumrah celebrates his first wicket, of Jason Roy, off his fourth ball of the innings  •  AFP/Getty Images"
      },
      {
        "source": {
          "id": null,
          "name": "Rediff.com"
        },
        "author": "REDIFF CRICKET",
        "title": "Rajinikanth, Ajay Devgn Cheer India - Rediff.com",
        "description": "Present at the stadium to promote Bholaa, his coming film, Ajay Devgn was seen conversing with Sanjay Manjrekar and Sunil Gavaskar.",
        "url": "https://www.rediff.com/cricket/report/rajinikanth-ajay-devgn-cheer-india/20230318.htm",
        "urlToImage": "https://im.rediff.com/cricket/2023/mar/17ajay-devgan.jpg",
        "publishedAt": "2023-03-18T03:58:48Z",
        "content": "IMAGE: Ajay Devgn was present at the Wankhede stadium to promote Bholaa, his coming film. Photograph: BCCI\r\nBollywood superstar Ajay Devgn was present at the iconic Wankhede stadium on Friday, March … [+1198 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "Shastri's interesting advice for Dravid, Rohit on Rahul's chances for WTC final - Hindustan Times",
        "description": "The discussion has now been brewing over whether India should reconsider Rahul again given his record in England and former India coach Ravi Shastri came up with an interesting suggestion for incumbent head coach Rahul Dravid and captain Rohit Sharma. | Crick…",
        "url": "https://www.hindustantimes.com/cricket/ravi-shastri-s-interesting-advice-for-rahul-dravid-rohit-sharma-on-kl-rahul-s-place-in-india-xi-for-wtc-final-101679069592046.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/17/1600x900/shastri_rahul_1677342450823_1679070967849_1679070967849.jpg",
        "publishedAt": "2023-03-18T03:52:57Z",
        "content": "Team India will be in for a selection headache when they head to London coming June for the World Test Championship final against Australia. They had dropped KL Rahul in the recently-concluded Border… [+2222 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "Prateek Kuhad performs live for RCB Women - Royal Challengers Bangalore",
        "description": "Prateek Kuhad x RCB 😎 What followed an intense practice session yesterday was a relaxing evening with @prateekkuhadmusic  jamming some of his biggest hits, ...",
        "url": "https://www.youtube.com/watch?v=T3ZN01fGjio",
        "urlToImage": "https://i.ytimg.com/vi/T3ZN01fGjio/maxresdefault.jpg",
        "publishedAt": "2023-03-18T03:50:07Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "Watch: Mohammed Shami Keeps His Cool Despite Shubman Gill Dropping Catch On His Bowling - NDTV Sports",
        "description": "Shubman Gill got a sharp catch at first slip. He jumped to his right and got to the ball in time, but failed to hold on to it. However, Mohammed Shami maintained a calm demeanour.",
        "url": "https://sports.ndtv.com/india-vs-australia-2023/mohammed-shami-keeps-his-cool-despite-shubman-gill-dropping-catch-on-his-bowling-watch-3870386",
        "urlToImage": "https://c.ndtvimg.com/2023-03/eqv6gk08_mohammed-shami-twitter_625x300_17_March_23.jpg",
        "publishedAt": "2023-03-18T03:09:26Z",
        "content": "Mohammed Shami bowled a brilliant spell on Friday as he helped India bundle out Australia for 188 runs in the first ODI of the three-match series. India's stand-in skipper Hardik Pandya won the toss … [+1506 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Ihsanullah: The boy from Swat in Pakistan who’s hit stardom at the speed of 152.65 kph - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/sports/cricket/ihsanullah-the-boy-from-swat-in-pakistan-whos-hit-stardom-at-the-speed-of-152-65-kph-8504221/",
        "urlToImage": null,
        "publishedAt": "2023-03-18T02:31:40Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Mirror Online"
        },
        "author": "Daniel Orme",
        "title": "\"It's a pity\" - Pep Guardiola reveals Vincent Kompany regret ahead of Man City reunion - The Mirror",
        "description": "Pep Guardiola is in line for a reunion with former Man City defender Vincent Kompany this weekend as his side take on Burnley in the FA Cup but the Spaniard does not reflect positively on one element of the pair’s time together",
        "url": "https://www.mirror.co.uk/sport/football/news/pep-guardiola-kompany-mancity-burnley-29489932",
        "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article29489925.ece/ALTERNATES/s1200/0_MIRRORKOMPANYPEP.jpg",
        "publishedAt": "2023-03-18T02:00:00Z",
        "content": "Manchester City boss Pep Guardiola says that it is a pity that he was not able to play legendary Vincent Kompany more as the two prepare for their emotional reunion this weekend.\r\n The former Belgian… [+2643 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "'Tendulkar used to compete with Kohli': Sehwag's freak tale of Sachin's strength - Hindustan Times",
        "description": "The world is no stranger to Sachin Tendulkar's feat as a batter, but not many are aware of the Master Blaster's incredible fitness levels. | Cricket",
        "url": "https://www.hindustantimes.com/cricket/sachin-tendulkar-used-to-compete-with-virat-kohli-sehwag-s-freak-story-of-master-blaster-s-incredible-strength-101679078626175.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/17/1600x900/sachin-virat-young-getty_1679078948233_1679078956096_1679078956096.jpg",
        "publishedAt": "2023-03-18T01:40:52Z",
        "content": "The world is no stranger to Sachin Tendulkar's feat as a batter, but not many are aware of the Master Blaster's incredible fitness levels. That Tendulkar was able to play 25 years and remained at the… [+3639 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Metro.co.uk"
        },
        "author": "Callum McAvoy",
        "title": "Man Utd face 'real fight' to finish in top four, says Jamie Carragher - Metro.co.uk",
        "description": "United are only three points away from dropping out of teh top four.",
        "url": "https://metro.co.uk/2023/03/18/man-utd-face-real-fight-to-finish-in-top-four-says-jamie-carragher-18464176/",
        "urlToImage": "https://metro.co.uk/wp-content/uploads/2023/03/Screenshot-2023-03-17-at-23.58.12-274a_1679097963.png?w=1200&h=630&crop=1",
        "publishedAt": "2023-03-18T00:05:00Z",
        "content": "Jamie Carragher thinks Newcastle can finish in the top four (Photo: Sky Sports)\r\nJamie Carragher believes Manchester United are not guaranteed to finish in the Premier League top four.\r\nUnited are cu… [+2442 chars]"
      }
    
  ];
  
  constructor(props) {
    super(props);
    //console.log("Hello i am consturctor from news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
    document.title ='Sports - Top Headlines';
    document.body.style.backgroundColor = "#05F3FF";
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
          <h2 className="text-center" style={this.style}>News - Top Sports Headlines </h2>
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


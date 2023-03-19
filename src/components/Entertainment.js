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
          "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Chiranjeevi, Ram Charan meet Amit Shah after Naatu Naatu Oscar win - Hindustan Times",
        "description": "Ram Charan and Chiranjeevi met Amit Shah in Delhi. The home minister congratulated them for RRR song Naatu Naatu's Oscar win.",
        "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/chiranjeevi-ram-charan-meet-amit-shah-after-rrr-song-naatu-naatu-wins-oscar-see-pics-101679122745697.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/18/1600x900/ram-amit_1679123304606_1679123304888_1679123304888.jpeg",
        "publishedAt": "2023-03-18T07:26:59Z",
        "content": "Actor Ram Charan was in Delhi for an event, and spoke at length about RRR, the Oscars, his acting career, and much more. Meanwhile, Ram also met home minister Amit Shah along with actor-father Chiran… [+2321 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Koimoi"
        },
        "author": "Joginder Tuteja",
        "title": "Tu Jhoothi Main Makkaar Box Office Day 10: Ranbir Kapoor & Shraddha Kapoor Starrer Keeps Going On 2nd Friday - Koimoi",
        "description": "Tu Jhoothi Main Makkaar starring Ranbir Kapoor kept on the second Friday too as it brought in 3.75 crores* Read on the details!",
        "url": "https://www.koimoi.com/box-office/tu-jhoothi-main-makkaar-box-office-day-10-ranbir-kapoor-shraddha-kapoor-starrer-keeps-going-on-2nd-friday/",
        "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/03/box-office-tu-jhoothi-main-makkaar-keeps-going-on-second-friday-too-001.jpg",
        "publishedAt": "2023-03-18T07:02:11Z",
        "content": "Box Office – Tu Jhoothi Main Makkaar keeps going on second Friday too ( Photo Credit Tu Jhoothi Main Makkaar Poster )\r\nTu Jhoothi Main Makkaar starring Ranbir Kapoor kept going on to some extent on t… [+1698 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Shah Rukh Khan dances with Gauri Khan at Alanna Panday's wedding in unseen video. Watch - Hindustan Times",
        "description": "Shah Rukh Khan and Gauri Khan danced to AP Dhillon's Dil Nu at Alanna Panday's wedding in Mumbai. They grooved alongside Alanna's mom Deanne Panday. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-dances-with-gauri-khan-at-alanna-panday-s-wedding-in-unseen-video-watch-101679121298442.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/18/1600x900/Shah_Rukh_Khan_Gauri_Khan_dance_1679121560205_1679121592967_1679121592967.jpg",
        "publishedAt": "2023-03-18T06:54:17Z",
        "content": "Alanna Panday married Ivor McCray on Thursday in the presence of family and friends in Mumbai. Many celebs such as actor Shah Rukh Khan and interior designer Gauri Khan attended the wedding of Alanna… [+2032 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Zoom"
        },
        "author": "Taru B Masand",
        "title": "Guneet Monga says 'there was shock on my face' after her acceptance speech at Oscars was cut off - Times Now",
        "description": "Guneet Monga and Kartiki Gonsalves made India proud as The Elephant Whisperers won an Oscar for Best Documentary Short Film. However, Guneet Monga's acceptance speech was cut off, which left her disheartened. Details inside!",
        "url": "https://www.timesnownews.com/entertainment-news/guneet-monga-says-there-was-shock-on-my-face-after-her-acceptance-speech-at-oscars-was-cut-off-article-98750000",
        "urlToImage": "https://static.tnn.in/thumb/msid-98750000,updatedat-1679121233880,width-1280,height-720,resizemode-75/98750000.jpg",
        "publishedAt": "2023-03-18T06:33:00Z",
        "content": "Aquarius, start exploring business ideas; daily horoscope for all zodiac signs today, March 17, 2023"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "Entertainment Desk",
        "title": "Ranbir Kapoor says he is not a fan of Uorfi Javed's fashion, calls her outfit 'bad taste' - The Indian Express",
        "description": "Ranbir Kapoor recognized Uorfi Javed by looking at her outfit and said that he is not a fan of her fashion.",
        "url": "https://indianexpress.com/article/entertainment/bollywood/ranbir-kapoor-not-a-fan-of-uorfi-javed-fashion-bad-taste-8504556/",
        "urlToImage": "https://images.indianexpress.com/2023/03/ranbir-kapoor.jpg",
        "publishedAt": "2023-03-18T06:31:12Z",
        "content": "Bollywood actor Ranbir Kapoor, who was recently seen in the film Tu Jhoothi Mai Makkaar, played fashion police and critiqued Bigg Boss OTT fame Uorfi Javed’s wardrobe choices. Uorfi is often photogra… [+1491 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "\"OG\" Raveena Tandon's Tip Tip Barsa Paani Moves But Make It Quick (Style) - NDTV Movies",
        "description": "The Norwegian dance crew is on a spree recreating some of Bollywood's most iconic dance numbers with the \"OG\" actors",
        "url": "https://www.ndtv.com/entertainment/raveena-tandon-s-dance-to-tip-tip-with-quick-style-sets-the-internet-on-fire-3871757",
        "urlToImage": "https://c.ndtvimg.com/2023-03/h148pdco_-raveena-_625x300_18_March_23.jpg",
        "publishedAt": "2023-03-18T06:11:00Z",
        "content": "Raveena Tandon in a still from the video. (courtesy: thequickstyle)\r\nNew Delhi: Raveena Tandon will perhaps be the only actress who will come to your mind when you hear the Tip Tip song. Raveena Tand… [+1697 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Koimoi"
        },
        "author": "Koimoi.com Team",
        "title": "RRR: SS Rajamouli Spent An Unbelievable 1.44 Crores To Book Seats For Ram Charan, Jr NTR & Family Members At Oscars 2023? - Koimoi",
        "description": "After the historic win of RRR, the latest we hear is that SS Rajamouli spent a lot on buying tickets to attend the Oscars 2023. Read on!",
        "url": "https://www.koimoi.com/?p=970367",
        "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/03/ss-rajamouli-spent-a-colossal-amount-to-reserve-a-seat-for-rrr-actors-family-members-at-oscars-2023-001.jpg",
        "publishedAt": "2023-03-18T05:50:18Z",
        "content": "SS Rajamouli Spent A Colossal Amount To Reserve A Seat For RRR Actors &amp; Family Members At Oscars 2023? ( Photo Credit Facebook )\r\nRRR has become a pride of India as the film has created history b… [+1849 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "ET Online",
        "title": "'Mrs Chatterjee vs Norway' box-office collection: Rani Mukerji-starrer earns Rs 1.5 cr on Day 1, likely to - Economic Times",
        "description": "In the film, Mukerji essays the role of a mother battling the state for her kids.",
        "url": "https://economictimes.indiatimes.com/magazines/panache/mrs-chatterjee-vs-norway-box-office-collection-rani-mukerji-starrer-earns-rs-1-5-cr-on-day-1-likely-to-pick-up-speed-on-weekend/articleshow/98749055.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98749102,width-1070,height-580,imgsize-33840,overlay-etpanache/photo.jpg",
        "publishedAt": "2023-03-18T05:40:00Z",
        "content": "Rani Mukerji-starrer 'Mrs Chatterjee Vs Norway' hit the silver screen on Friday (March 17) in India and by the looks of it, has opened to a good start. The film, based on true events surrounding an I… [+2276 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "DNA India"
        },
        "author": "DNA Web Team",
        "title": "Bigg Boss 16 winner MC Stan's Indore show cancelled after Bajrang Dal members 'hijack' the stage, video goes viral - DNA India",
        "description": "The Bajrang Dal members shouted the Jai Shri Ram slogans from the stage disrupting MC Stan's live concert in Indore.",
        "url": "https://www.dnaindia.com/entertainment/report-bigg-boss-16-winner-mc-stan-indore-show-cancelled-after-bajrang-dal-members-hijack-the-stage-video-goes-viral-3030682",
        "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/03/18/2579748-stan-final.jpg",
        "publishedAt": "2023-03-18T05:06:44Z",
        "content": "Reported By:| Edited By: DNA Web Team |Source: DNA Web Desk |Updated: Mar 18, 2023, 10:36 AM ISTThe popular rapper MC Stan aka Altaf Tadavi became a household name after winning Salman Khan-hosted co… [+1862 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "123telugu.com"
        },
        "author": null,
        "title": "Akkineni hero confirmed to play a key role in Megastar's Bholaa Shankar | 123telugu.com - 123telugu",
        "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
        "url": "https://www.123telugu.com/mnews/akkineni-hero-confirmed-to-play-a-key-role-in-megastars-bholaa-shankar.html",
        "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
        "publishedAt": "2023-03-18T05:00:00Z",
        "content": "Megastar Chiranjeevi delivered a massive blockbuster with his last outing Waltair Veerayya. The movie emerged as the highest-grosser among the Sankranthi Telugu releases. Up next, the actor will feat… [+1177 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "Alanna Panday And Ivor McCray's Wedding Album - Sealed With A Kiss - NDTV Movies",
        "description": "The bride and the groom wore white",
        "url": "https://www.ndtv.com/entertainment/alanna-panday-and-ivor-mccrays-wedding-album-sealed-with-a-kiss-3871647",
        "urlToImage": "https://c.ndtvimg.com/2023-03/7qv9rm5g_alanna_625x300_18_March_23.jpg",
        "publishedAt": "2023-03-18T04:44:22Z",
        "content": "Alanna Panday and Ivor McCray got married earlier this week. (courtesy: alannapanday)\r\nNew Delhi: Alanna Panday, cousin of actor Ananya Panday, married her longtime boyfriend Ivor McCray in Mumbai ea… [+1209 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Deepika Padukone returns to India from Los Angeles after presenting at the Oscars 2023; fans call her 'Qu - Indiatimes.com",
        "description": "After shining on the global platform, Bollywood diva Deepika Padukone returned to India from Los Angeles. The actre",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/deepika-padukone-returns-to-india-from-los-angeles-after-presenting-at-the-oscars-2023-fans-call-her-queen-see-photos/articleshow/98748040.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98748040,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-22808/98748040.jpg",
        "publishedAt": "2023-03-18T04:41:00Z",
        "content": "After shining on the global platform, Bollywood diva Deepika Padukone returned to India from Los Angeles. The actress was one of the presenters at the 95th Academy Awards.Dressed in an all-black outf… [+1326 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "Neha Maheshwri",
        "title": "Exclusive! Vidisha Srivastava aka Anita Bhabhi of Bhabiji Ghar Par Hai! is expecting; the baby is due in - Indiatimes.com",
        "description": "The actress, who stepped into the shoes of Nehha Pendse (she had replaced Saumya Tandon) to play the new Anita Bhab",
        "url": "https://timesofindia.indiatimes.com/tv/news/hindi/exclusive-vidisha-srivastava-aka-anita-bhabhi-of-bhabiji-ghar-par-hai-is-expecting-the-baby-is-due-in-june/articleshow/98729434.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98736007,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-54378/98736007.jpg",
        "publishedAt": "2023-03-18T04:30:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "India Today"
        },
        "author": "India Today Entertainment Desk",
        "title": "Kabzaa box office collection Day 1: Upendra, Kichcha Sudeep's fails to crack a jackpot - India Today",
        "description": "Headlined by Upendra and Kichcha Sudeep, Day 1 early box office estimate suggests that the film is heading for a slow start. It has been directed by R Chandru.",
        "url": "https://www.indiatoday.in/movies/regional-cinema/story/kabzaa-box-office-collection-day-1-upendra-kichcha-sudeeps-fails-to-crack-jackpot-2348242-2023-03-18",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/sanya-sixteen_nine.jpg?VersionId=eMOYElI5bdOZYtkr1ra5bH0DaCKGYx.u",
        "publishedAt": "2023-03-18T03:55:48Z",
        "content": "By India Today Entertainment Desk: Underworld Ka Kabzaa featuring Upendra and Kichcha Sudeep released on March 17. In spite of two big names headlining the project, Kabzaa has headed for a rather slo… [+1011 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "Neha Maheshwri",
        "title": "Sana Khan: Anas and I can’t wait to hold this bundle of joy in our arms - Indiatimes.com",
        "description": "The actress, who has featured in films like ‘Jai Ho’, ‘Halla Bol’, ‘Wajah Tum Ho’, and ‘Toilet: Ek Prem Katha’ and",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/sana-khan-anas-and-i-cant-wait-to-hold-this-bundle-of-joy-in-our-arms/articleshow/98728750.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98735644,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-63046/98735644.jpg",
        "publishedAt": "2023-03-18T03:30:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Telugu360.com"
        },
        "author": "Telugu360",
        "title": "Kamal Haasan’s biggest risk for Indian 2 - Telugu360",
        "description": null,
        "url": "https://www.telugu360.com/kamal-haasans-biggest-risk-for-indian-2/",
        "urlToImage": null,
        "publishedAt": "2023-03-18T03:02:21Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "Actor Lance Reddick, Known For 'The Wire', Dies Aged 60 - NDTV",
        "description": "Actor Lance Reddick who played steely Baltimore police lieutenant Cedric Daniels in hit TV show \"The Wire\" has died, his publicist said Friday. He was 60.",
        "url": "https://www.ndtv.com/world-news/actor-lance-reddick-known-for-the-wire-dies-aged-60-3871360",
        "urlToImage": "https://c.ndtvimg.com/2023-03/golhv1qg_lance-reddick_625x300_18_March_23.jpg",
        "publishedAt": "2023-03-18T02:56:34Z",
        "content": "Actor Lance Reddick has passed away in his Los Angeles home. (File)\r\nLos Angeles, United States: Actor Lance Reddick who played steely Baltimore police lieutenant Cedric Daniels in hit TV show \"The W… [+1488 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "‘It was love at second sight’: Ratna Pathak Shah and Naseeruddin Shah’s ‘intense’ but not ‘whirlwind’ romance - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/entertainment/bollywood/ratna-pathak-shah-naseeruddin-shah-intense-love-story-8499096/",
        "urlToImage": null,
        "publishedAt": "2023-03-18T02:55:14Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "India TV News"
        },
        "author": "Written by Ridhi Suri",
        "title": "Zwigato Box Office Collection Day 1: Kapil Sharma-Nandita Das' film FAILS to mint even a crore - India TV News",
        "description": "Zwigato Box Office Collection Day 1: According to early trade reports, Nandita Das's directorial venture starring Kapil Sharma as a delivery agent couldn't manage to earn even a crore on opening day.",
        "url": "https://www.indiatvnews.com/entertainment/bollywood/zwigato-box-office-collection-day-1-kapil-sharma-nandita-das-film-fails-to-mint-even-crore-shahana-goswami-2023-03-18-855507",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/03/zwigato-1679107973.jpg",
        "publishedAt": "2023-03-18T02:53:14Z",
        "content": "Zwigato Box Office Collection Day 1:Kapil Sharma starrer opened to rave reviews when it hit the theatre on March 17. Fans and critics lauded the slice-of-life drama that brings to focus the world whe… [+2142 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Zoom"
        },
        "author": "Sushmita Dey",
        "title": "Hansika Motwani's mother demanded Rs 5 lakh per minute from Sohael Kathuriya's family for THIS reason - Times Now",
        "description": "In the latest episode of Hansika's Love Shaadi Drama, the diva's mother Mona Motwani revealed that she demanded Rs 5 lakh per minute from groom Sohael Kathuriya's family. Read on to know the reason.",
        "url": "https://www.timesnownews.com/entertainment-news/hansika-motwanis-mother-demanded-rs-5-lakh-per-minute-from-sohael-kathuriyas-family-for-this-reason-article-98745754",
        "urlToImage": "https://static.tnn.in/thumb/msid-98745754,updatedat-1679107987753,width-1280,height-720,resizemode-75/98745754.jpg",
        "publishedAt": "2023-03-18T02:53:07Z",
        "content": "Aquarius, start exploring business ideas; daily horoscope for all zodiac signs today, March 17, 2023"
      }
    
  ];
  
  constructor(props) {
    super(props);
    //console.log("Hello i am consturctor from news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
    document.title ='Entertainment - Top Headlines';
    document.body.style.backgroundColor = "#79403A";
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
          <h2 className="text-center" style={this.style}>News - Top Entertainment Headlines </h2>
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
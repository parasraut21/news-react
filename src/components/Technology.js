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
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "The Feed",
        "title": "Oppo Find N2 Flip is now available in India; Check price, specifications and offers - The Economic Times",
        "description": "Oppos first foldable smartphone, the Oppo Find N2 Flip, was released in India earlier this week.",
        "url": "https://economictimes.indiatimes.com/news/new-updates/oppo-find-n2-flip-is-now-available-in-india-check-price-specifications-and-offers/articleshow/98750448.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98750474,width-1070,height-580,imgsize-32562,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-03-18T06:53:11Z",
        "content": "The Oppo Find N2 Flip went on sale in India on March 17, with a starting price of Rs 89,999. Oppos Find N2 Flip was unveiled globally in February as the companys first clamshell foldable smartphone.O… [+2092 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Financial Express"
        },
        "author": "The Financial Express",
        "title": "Samsung Galaxy A54 launch, ChatGPT Plus, Oppo Find N2 Flip price reveal and more l FE Tech Bytes top news of the week - The Financial Express",
        "description": null,
        "url": "https://www.financialexpress.com/life/technology-samsung-galaxy-a54-launch-chatgpt-plus-oppo-find-n2-flip-price-reveal-and-more-l-fe-tech-bytes-top-news-of-the-week-3014100/",
        "urlToImage": null,
        "publishedAt": "2023-03-18T06:41:39Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "The Tech Weekender | Top news from the world of technology this week - Moneycontrol",
        "description": "Apple CEO Tim Cook pushes for the launch of mixed reality headset, Twitter rival Koo jumps on the AI bandwagon, Microsoft announces AI Copilot for Office 365 apps and more as generative artificial intelligence war gets fierce",
        "url": "https://www.moneycontrol.com/news/photos/technology/the-tech-weekender-top-news-from-the-world-of-technology-this-week-65-10270291.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/04/Technology_Tech_software_computer_1280-770x433.jpg",
        "publishedAt": "2023-03-18T06:27:59Z",
        "content": null
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "WhatsApp adds text detection on iOS - Times of India",
        "description": "WhatsApp, which Meta owns, has recently introduced a new feature called \"picture-in-picture\" for video calls on iOS devices. Now it is working on addi",
        "url": "https://timesofindia.indiatimes.com/gadgets-news/whatsapp-adds-text-detection-on-ios/articleshow/98749876.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98749853,width-1070,height-580,imgsize-3850,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-03-18T06:17:00Z",
        "content": ""
      },
      {
        "source": {
          "id": null,
          "name": "GSMArena.com"
        },
        "author": "Sagar",
        "title": "Huawei Mate X3's display size revealed - GSMArena.com",
        "description": "It will be unveiled next week alongside the P60 series at an event in China. Huawei will unveil the Mate X3 foldable smartphone on March 23 in China at an...",
        "url": "https://www.gsmarena.com/huawei_mate_x3_display_specs-news-57947.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/03/huawei-mate-x3-display-detailed/-952x498w6/gsmarena_001.jpg",
        "publishedAt": "2023-03-18T06:15:01Z",
        "content": "Huawei will unveil the Mate X3 foldable smartphone on March 23 in China at an event that will begin at 2:30PM local time. The company hasn't divulged much about the foldable, but DSCC's CEO Ross Youn… [+796 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "DNA India"
        },
        "author": "DNA Web Team",
        "title": "Apple iPhone selling for Rs 22,999 on Flipkart; here's why it's a great offer - DNA India",
        "description": "Flipkart Apple offer: The phone has a 5.4 inch super retina XDE display. The phone has an IP68 water resistant rating.",
        "url": "https://www.dnaindia.com/business/report-apple-iphone-selling-for-rs-22999-on-flipkart-here-s-why-it-s-a-great-offer-3030695",
        "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/03/18/2579767-untitled-design-2023-03-18t112925.110.png",
        "publishedAt": "2023-03-18T05:53:00Z",
        "content": "Reported By:| Edited By: DNA Web Team |Source: DNA Web Desk |Updated: Mar 18, 2023, 11:30 AM ISTA lot of people aspire to buy an Apple iPhone but can't because of the premium prices. However, to avai… [+1367 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "Vishal Mathur",
        "title": "Beyond chatbots: AI builds productivity pitch - Hindustan Times",
        "description": "The global chatbot market size is expected to be worth as much as $3.99 billion by 2030, according to Grand View Research’s latest data",
        "url": "https://www.hindustantimes.com/business/beyond-chatbots-ai-builds-productivity-pitch-101679118461506.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/18/1600x900/Applications-will-continue-to-be-in-focus--as-conv_1679118455305.jpg",
        "publishedAt": "2023-03-18T05:47:40Z",
        "content": "Conversational AI, or artificial intelligence, can be incredible fun. ChatGPT and Microsofts chatbot Bing search, have successfully positioned AI on almost everyones radar. Yet, there is more to this… [+4815 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Twitter is taking way two-factor authentication from March 20, here’s how to secure your account - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/technology/tech-news-technology/how-to-secure-twitter-account-after-losing-2fa-8504463/",
        "urlToImage": null,
        "publishedAt": "2023-03-18T05:30:09Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "India Today"
        },
        "author": "Ankita Chakravarti",
        "title": "Carl Pei calls Pixel 6a entry-level, lists 8 reasons why Nothing Phone (1) outperforms Google's phone - India Today",
        "description": "Pei said that he finds it odd that the Nothing Phone (1) gets compared to the Pixel 6a. He calls the  Pixel 6a, an “entry-level phone” and Phone (1), a flagship phone.",
        "url": "https://www.indiatoday.in/technology/news/story/carl-pei-calls-pixel-6a-entry-level-lists-8-reasons-why-nothing-phone-1-outperforms-googles-phone-2348261-2023-03-18",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/screenshot_2023-03-18_at_10.44.13_am-sixteen_nine.png?VersionId=eztwsPRx.72ngO2mr2hz8MzLJVRt6MA5",
        "publishedAt": "2023-03-18T05:24:12Z",
        "content": "By Ankita Chakravarti: The Nothing Phone (1) and the Pixel 6a are the two popular options that crop up when we talk about phones under Rs 30,000. The phones have been subjected to multiple comparison… [+2433 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Business Standard"
        },
        "author": "IANS",
        "title": "Microsoft AI Bings new feature lets users share chat responses on Facebook - Business Standard",
        "description": "Tech giant Microsoft has introduced a new feature which allows users to share AIpowered Bing chat responses with others on Facebook Twitter Pinterest email or using a persistent link",
        "url": "https://www.business-standard.com/article/technology/microsoft-ai-bing-s-new-feature-lets-users-share-chat-responses-on-facebook-123031800157_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2019-01/24/full/1548293882-7275.jpg",
        "publishedAt": "2023-03-18T05:04:00Z",
        "content": "Tech giant Microsoft has introduced a new feature which allows users to share AI-powered Bing chat responses with others on Facebook, Twitter, Pinterest, email or using a persistent link.\r\n\"Some of y… [+1520 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Sportskeeda"
        },
        "author": "Abhishek Mallick",
        "title": "How to unlock the Wolf pet in Diablo 4 - Sportskeeda",
        "description": "With the Diablo 4 early access beta now live and the open bets on the horizon, fans of the franchise are having a great time trying everything the new entry has to offer.",
        "url": "https://www.sportskeeda.com/esports/how-unlock-wolf-pet-diablo-4",
        "urlToImage": "https://staticc.sportskeeda.com/editor/2023/03/4a307-16791137035756-1920.jpg",
        "publishedAt": "2023-03-18T05:01:03Z",
        "content": "With the Diablo 4 early access beta now live and the open bets on the horizon, fans of the franchise are having a great time trying everything the new entry has to offer.\r\nWhile the content that the … [+2231 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "World's largest mobile factory, mobile store, and software R&D center; all three of Samsung are in India: - Times of India",
        "description": "An Electronics and Communication Engineer, TiW Bangalore alumni and Samsung's first Indian employee, Dipesh Shah is the driving force behind Samsung R",
        "url": "https://timesofindia.indiatimes.com/gadgets-news/worlds-largest-mobile-factory-mobile-store-and-software-rd-center-all-three-of-samsung-are-in-india-dipesh-shah/articleshow/98748276.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98748271,width-1070,height-580,imgsize-50044,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-03-18T04:55:00Z",
        "content": ""
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Garena Free Fire Max redeem codes for March 18, 2023 now available | Mint - Mint",
        "description": "Developers of the Garena Free Fire Max game keep updating these codes daily.",
        "url": "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-for-march-18-2023-now-available-11679114853478.html",
        "urlToImage": "https://images.livemint.com/img/2023/03/18/600x338/free_fire_max_1665463568806_1679114991324_1679114991324.jpg",
        "publishedAt": "2023-03-18T04:50:18Z",
        "content": "Garena Free Fire Max redeem codes for today are now available. The 12 digit alphanumeric numbers consist of capital letters and numbers. Using these codes, one can win in-game items like weapons, dia… [+1743 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Samsung Galaxy S23 price on Flipkart vs Amazon: Save Rs. 47000 in sensational deal NOW - HT Tech",
        "description": "Want Samsung Galaxy S23 5G? You can save over Rs. 47000 on the device. Where can you grab the best deal? Flipkart or is it Amazon? Find it out here.",
        "url": "https://tech.hindustantimes.com/mobile/news/samsung-galaxy-s23-price-on-flipkart-vs-amazon-save-rs-47000-in-sensational-deal-now-71679112855311.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/18/1600x900/Samsung_Galaxy_S23_1675273532523_1679112944782_1679112944782.jpg",
        "publishedAt": "2023-03-18T04:21:06Z",
        "content": "The Samsung Galaxy S23 5G is available for purchase on almost all the ecommerce platforms including Flipkart and Amazon. The handset can be availed along with several amazing offers on these ecommerc… [+1901 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Thenationalnews.com"
        },
        "author": "Alkesh Sharma",
        "title": "Google says Samsung, Pixel and Vivo phones at risk due to vulnerable Exynos chips - The National",
        "description": "Affected devices include Samsung’s Galaxy S22 and A12 series, Google’s Pixle 6 and 7 series and Vivo’s S16 and S15 series phones",
        "url": "https://www.thenationalnews.com/business/2023/03/18/google-says-samsung-pixel-and-vivo-phones-at-risk-due-to-vulnerable-exynos-chips/",
        "urlToImage": "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/zLgdckW_hziVTzJ2JUZgFk-PpcU=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/J3FPPYK4K5H7HGDF6VP6TBI7XI.jpeg",
        "publishedAt": "2023-03-18T04:02:53Z",
        "content": "Googles Project Zero security research team has discovered 18 security concerns related to Samsungs Exynos chipsets that are used in smartphones, mobile devices, wearables and cars.\r\nFour of the 18 r… [+2393 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Statesman"
        },
        "author": "IANS",
        "title": "Qualcomm unveils new Snapdragon 7+ Gen 2 chipset with AI-enhanced experience - The Statesman",
        "description": "Chip maker Qualcomm on Friday unveiled the new Snapdragon 7+ Gen 2 Mobile Platform, a chipset that offers AI-enhanced experiences, high-speed 5G, and Wi-Fi connectivity.",
        "url": "https://www.thestatesman.com/technology/qualcomm-unveils-new-snapdragon-7-gen-2-chipset-with-ai-enhanced-experience-1503163556.html",
        "urlToImage": "https://www.thestatesman.com/wp-content/uploads/2023/03/0645508b9725cafee65f020b553a2bb6.jpg",
        "publishedAt": "2023-03-18T04:01:00Z",
        "content": "Chip maker Qualcomm on Friday unveiled the new Snapdragon 7+ Gen 2 Mobile Platform, a chipset that offers AI-enhanced experiences, high-speed 5G, and Wi-Fi connectivity.\r\nSnapdragon 7+ Gen 2 provides… [+1603 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "India TV News"
        },
        "author": "Edited by India TV Tech Desk",
        "title": "WhatsApp Update: Working on new chat attachment menu for Android beta - India TV News",
        "description": "WhatsApp has been rolling out a new feature for the Android beta which will display the profile icons within group chats rather than the initials. Now, the new chat attachment menu is under development at the time of writing and it is expected to be released …",
        "url": "https://www.indiatvnews.com/technology/news/whatsapp-update-working-on-new-chat-attachment-menu-for-android-beta-2023-03-17-855427",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/03/whatsapp-pixabay-1679060916.jpg",
        "publishedAt": "2023-03-18T02:00:01Z",
        "content": "WhatsApp, a Meta-owned messaging platform is reportedly working on a redesigned chat attachment menu which will be rolled out for Android beta users. The tweaked chat attachment menu is clearer and f… [+1782 chars]"
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": null,
        "title": "\"What a dumb f*cking game!\": Asmongold reacts to game-breaking bug in Diablo 4 as he loses character in minutes - Sportskeeda",
        "description": null,
        "url": "https://families.google.com/service-restricted",
        "urlToImage": null,
        "publishedAt": "2023-03-18T01:22:55Z",
        "content": "This service is unavailable for Google Workspace for Education users marked as under the age of 18 by their administrator. Learn more\r\nIf you have any further questions about your access, reach out t… [+37 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Sportskeeda"
        },
        "author": "Suyash Sahay",
        "title": "Top 5 cars for completing Last Dose missions in GTA Online Los Santos Drug Wars update - Sportskeeda",
        "description": "On March 16, 2023, the final update for Grand Theft Auto (GTA) Online was launched to tremendous fanfare.",
        "url": "https://www.sportskeeda.com/gta/top-5-cars-completing-last-dose-missions-gta-online-los-santos-drug-wars-update",
        "urlToImage": "https://staticc.sportskeeda.com/editor/2023/03/4e460-16790574749745-1920.jpg",
        "publishedAt": "2023-03-18T00:10:21Z",
        "content": "On March 16, 2023, the final update for Grand Theft Auto (GTA) Online was launched to tremendous fanfare. The Last Dose added five entirely new campaign missions, bringing the Los Santos Drug Wars ch… [+3818 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "gizmochina"
        },
        "author": "gizmochina",
        "title": "OnePlus 11 vs OnePlus 11R: Specs Comparison - gizmochina",
        "description": null,
        "url": "https://www.gizmochina.com/guides/oneplus-11-vs-oneplus-11r-specs-comparison/",
        "urlToImage": null,
        "publishedAt": "2023-03-17T22:59:02Z",
        "content": null
      }
    
  ];
  
  constructor(props) {
    super(props);
    //console.log("Hello i am consturctor from news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
    document.title ='Technology - Top Headlines';
    document.body.style.backgroundColor = "#2E1114";
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
          <h2 className="text-center" style={this.style}>News - Top Technology Headlines </h2>
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
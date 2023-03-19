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
        "author": null,
        "title": "Plant-based diet helps slow ageing: Gene expert David Sinclair on plant vs meat debate - India Today",
        "description": "Dr Sinclair said that what they discovered was that there are genes that control how long we live. Some people are born with the best version of those genes, he added.",
        "url": "https://www.indiatoday.in/science/story/plant-based-diet-helps-slow-ageing-gene-expert-david-sinclair-on-plant-vs-meat-debate-2348368-2023-03-18",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/david_sinclair_5_0-sixteen_nine.jpg?VersionId=owkF.QpuLQ4Ku7tfMDiCcNudmspGdYnu",
        "publishedAt": "2023-03-18T08:34:07Z",
        "content": "By India Today Science Desk: Genetics expert known for pioneering the science behind age reversal, Dr. David Sinclair said that a plant-based diet has been seen to slow aging as against a meat-based … [+1954 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "DNA India"
        },
        "author": "DNA Web Team",
        "title": "Easy cooking tips to keep your heart healthy - DNA India",
        "description": "Among all the foods required to keep the heart healthy, the ones that are eaten in far less quantity than recommended are vegetables and fruit.",
        "url": "https://www.dnaindia.com/health/report-easy-cooking-tips-to-keep-your-heart-healthy-3030719",
        "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/03/18/2579791-heart-2-1.jpg",
        "publishedAt": "2023-03-18T07:56:00Z",
        "content": "A heart-healthy diet is likely to bring to mind images of food that`s boiled and bland. On the contrary, a heart-healthy diet is one that is interesting, flavourful, and colourful as it should includ… [+3403 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Thehealthsite.com"
        },
        "author": "Kinkini Gupta",
        "title": "H3N2 Influenza Alert: States Issue Urgent Advisories On Safety And Precaution | TheHealthSite.com - TheHealthSite",
        "description": "Know all about the advisories issued by the state government on the battle against the spread of H3N2 virus. TheHealthSite.com",
        "url": "https://www.thehealthsite.com/news/h3n2-influenza-alert-states-issue-urgent-advisories-on-safety-and-precaution-962770/",
        "urlToImage": "https://st1.thehealthsite.com/wp-content/uploads/2023/03/H3N2-Viral-Infection.jpg",
        "publishedAt": "2023-03-18T06:34:00Z",
        "content": "H3N2 Influenza Alert: States Issue Urgent Advisories On Safety And Precaution \r\nKnow all about the advisories issued by the state government on the battle against the spread of H3N2 virus.\r\nThe death… [+2325 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slurrp.com"
        },
        "author": "Deepali Verma",
        "title": "Gut Friendly Foods From The Indian Food Platter - Slurrp",
        "description": "A healthy gut requires consuming foods that naturally contain probiotics.",
        "url": "https://www.slurrp.com/article/gut-friendly-foods-from-the-indian-food-platter-1679120452589",
        "urlToImage": "https://images.slurrp.com/prodarticles/han7jsgvhyh.webp",
        "publishedAt": "2023-03-18T06:28:50Z",
        "content": "A healthy gut requires consuming foods that naturally contain probiotics. Even while every substancesolid, liquid, and gasis made up of atoms, they don't have the same impact on humans as bacteria do… [+3068 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Tech Explorist"
        },
        "author": "Amit Malewar",
        "title": "Proteins responsible for activating mosquito sperm can be shut down - Tech Explorist",
        "description": "New research could help control infectious pests.",
        "url": "https://www.techexplorist.com/proteins-responsible-activating-mosquito-sperm-shut-down/57682/",
        "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/03/mosquito.jpg",
        "publishedAt": "2023-03-18T06:24:29Z",
        "content": "Sperm are usually quiescent until signals to activate motility are received. Thus, while many sperm proteins are components of the eukaryotic 9+2 axoneme that powers the sperm flagellum and constitut… [+3127 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "Kalpana Sharma",
        "title": "The use and abuse of nutritional supplements (the right way to do it) - Indiatimes.com",
        "description": "Unmonitored nutritional intake of multivitamins can lead to overdose toxicity. For example, Excess Vitamin A is tox",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/the-use-and-abuse-of-nutritional-supplements-the-right-way-to-have-supplements/articleshow/98749374.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98749349,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-31002/98749349.jpg",
        "publishedAt": "2023-03-18T05:54:00Z",
        "content": "The arbitrary use of nutritional supplements is nothing uncommon. A lot of people take multivitamins, Vitamin B, K, D, B12, biotin, zinc, magnesium, iron supplements, believing that it will make up f… [+4812 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ScienceAlert"
        },
        "author": "Rebecca Dyer",
        "title": "Scientists Identify New Schizophrenia Risk Genes in First-of-Its-Kind Study - ScienceAlert",
        "description": "Two newly discovered genes have been linked to schizophrenia while a previously known gene associated with schizophrenia risk has also been linked to autism in a massive new study.",
        "url": "https://www.sciencealert.com/scientists-identify-new-schizophrenia-risk-genes-in-first-of-its-kind-study",
        "urlToImage": "https://www.sciencealert.com/images/2023/03/GlowingLightOnDNAHelixOrangeBrown.jpg",
        "publishedAt": "2023-03-18T05:00:13Z",
        "content": "Two newly discovered genes have been linked to schizophrenia while a previously known gene associated with schizophrenia risk has also been linked to autism in a massive new study.\r\nScientists say th… [+5035 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Indiablooms.com"
        },
        "author": "Indiablooms",
        "title": "Drinking coffee may help you in weight loss, study reveals some positive results | Indiablooms - First Portal on Digital News Management - indiablooms",
        "description": "London: A high blood caffeine level may reduce the body weight a person carries and their risk of type 2 diabetes, according to research.",
        "url": "https://www.indiablooms.com/health-details/H/12474/drinking-coffee-may-help-you-in-weight-loss-study-reveals-some-positive-results.html",
        "urlToImage": "https://www.indiablooms.com/health_pic/2023/184d61095acd8fa5ed2c107be8084c2a.jpg",
        "publishedAt": "2023-03-18T04:53:43Z",
        "content": "London: A high blood caffeine level may reduce the body weight a person carries and their risk of type 2 diabetes, according to research. A new study, published in BMJ Medicine, has looked at the eff… [+3526 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Dovepress.com"
        },
        "author": "Dove Press",
        "title": "Probiotic supplement on glycaemic control in T1DM | DMSO - Dove Medical Press",
        "description": "Exploring the effects of a multispecies probiotic supplement on glycaemic control and metabolic parameters in adults with type 1 diabetes. Read more",
        "url": "https://www.dovepress.com/the-beneficial-effects-of-a-multispecies-probiotic-supplement-on-glyca-peer-reviewed-fulltext-article-DMSO",
        "urlToImage": "https://www.dovepress.com/assets/img/addon/og_logo.png",
        "publishedAt": "2023-03-18T04:50:47Z",
        "content": "Introduction\r\nType 1 diabetes mellitus (T1DM) is one of the most common autoimmune disorders in the world.1 It is characterised by the progressive destruction of insulin-producing beta (β)-cells in t… [+36756 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Rediff.com"
        },
        "author": "rediffGURU Dr KARTHIYAYANI MAHADEVAN",
        "title": "Does Protein Powder Harm Kidneys? - Rediff.com",
        "description": "'Digesting protein is hard work for the metabolic system. The more natural the protein is, the easier it is to digest,' explains Dr Karthiyayani Mahadevan.",
        "url": "https://www.rediff.com/getahead/report/rediffguru-dr-karthiyayani-mahadevan-does-protein-powder-increase-risk-of-kidney-disease/20230318.htm",
        "urlToImage": "https://im.rediff.com/getahead/2023/mar/14protein.jpg",
        "publishedAt": "2023-03-18T04:48:54Z",
        "content": "'Digesting protein is hard work for the metabolic system. The more natural the protein is, the easier it is to digest,' explains Dr Karthiyayani Mahadevan.\r\nDo you have health-related queries?\r\nOur e… [+4757 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Organiser.org"
        },
        "author": "WEB DESK",
        "title": "High sugar and fat diet can cause liver disease: Research - Organiser",
        "description": "According to a recent study from the University of Missouri School of Medicine, the main cause of chronic liver disease",
        "url": "https://organiser.org/2023/03/18/165252/health/high-sugar-and-fat-diet-can-cause-liver-disease-research/",
        "urlToImage": "https://organiser.org/wp-content/uploads/2023/03/whatsapp-image-2023-03-17-at-3.32.37-pm.jpeg",
        "publishedAt": "2023-03-18T02:30:42Z",
        "content": "According to a recent study from the University of Missouri School of Medicine, the main cause of chronic liver disease and the development of non-alcoholic fatty liver disease are both linked to hig… [+2172 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "EurekAlert"
        },
        "author": null,
        "title": "Association of warm or cold air temperatures with lung function in young infants - EurekAlert",
        "description": "About The Study: Long-term heat and cold exposure from the second trimester until four weeks after birth was associated with newborn lung volumes, especially among female newborns, in this study of 343 mother-child pairs. The findings suggest an association b…",
        "url": "https://www.eurekalert.org/news-releases/982987",
        "urlToImage": "https://www.eurekalert.org/images/EurekAlert-bluebg_Twitter_601X601.png",
        "publishedAt": "2023-03-18T02:02:50Z",
        "content": "About The Study: Long-term heat and cold exposure from the second trimester until four weeks after birth was associated with newborn lung volumes, especially among female newborns, in this study of 3… [+1553 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "IE Online",
        "title": "Should we be worrying about the latest round of H3N2 flu? Not really - The Indian Express",
        "description": "These are all weakened viruses with varying degrees of infectivity but very low rates of lethality. Besides we have the RT-PCR test and vaccines, says Dr Rajesh M Parikh, Hon Neuropsychiatrist and Director of Medical Research at Mumbai’s Jaslok Hospital & Res…",
        "url": "https://indianexpress.com/article/health-wellness/should-not-worry-h3n2-flu-8504208/",
        "urlToImage": "https://images.indianexpress.com/2023/03/flu-6.jpg",
        "publishedAt": "2023-03-18T01:17:57Z",
        "content": "These days we are barraged with a bewildering array of alphanumerics: H3N2, H2N2, H1N1 and of course the unforgettable SARS-CoV-2. These combinations are complex enough to serve as highly secure pass… [+4663 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TNN",
        "title": "'Set up genome sequencing facilities for H3N2 virus in Gujarat' - Times of India",
        "description": "Speaking during a discussion in the assembly on the increasing cases of H3N2 influenza, senior Congress leader Arjun Modhwadia on Friday demanded that",
        "url": "https://timesofindia.indiatimes.com/city/ahmedabad/set-up-genome-sequencing-facilities-for-h3n2-virus-in-gujarat/articleshow/98744562.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98744570,width-1070,height-580,imgsize-1234559,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-03-18T00:00:00Z",
        "content": ""
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "Shahid Akhter, ET HealthWorld",
        "title": "Massive funding for antiviral research is the need of the hour, not only on vaccines but also on drugs: Dr W.. - ETHealthWorld",
        "description": "There are now 8 billion human beings. We live tightly packed. Every year, there are 5 billion individual airplane rides. We fly around like bats, and we live together. And there are a lot of us. And that's perfect for microorganisms; they're adapting to us, s…",
        "url": "http://health.economictimes.indiatimes.com/news/industry/massive-funding-for-antiviral-research-is-the-need-of-the-hour-not-only-on-vaccines-but-also-on-drugs-dr-william-a-haseltine/98744139",
        "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-98744139,imgsize-983244,width-1200,height-628,overlay-ethealthworld/massive-funding-for-antiviral-research-is-the-need-of-the-hour-not-only-on-vaccines-but-also-on-drugs-dr-william-a-haseltine.jpg",
        "publishedAt": "2023-03-17T22:54:00Z",
        "content": "Shahid Akhter, editor, ETHealthworld, spoke to Dr. William A. Haseltine, Chair and President, ACCESS Health International, to identify the public health vulnerabilities and how to improve our level o… [+5750 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Greater Kashmir"
        },
        "author": "GK NEWS NETWORK",
        "title": "National Vaccination Day observed at Aryans - Greater Kashmir",
        "description": "Srinagar Mar 17: To promote the importance of vaccines and their role in improving public health, National Vaccination Day was celebrated by Aryans College of P",
        "url": "https://www.greaterkashmir.com/kashmir/national-vaccination-day-observed-at-aryans",
        "urlToImage": "https://gumlet.assettype.com/greaterkashmir%2F2023-03%2F731271fb-7ea5-4a4d-b725-f9eae7784edb%2FAryans.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
        "publishedAt": "2023-03-17T22:11:07Z",
        "content": "Dr. Suresh Kumar, Faculty, Dept. of Pharmaceutical Sciences &amp; Drug Research, Punjabi University, Patiala addressed students including B.Pharma, D. Pharma, B.Sc. Nursing, GNM, ANM etc on this year… [+432 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Nagalandpost.com"
        },
        "author": null,
        "title": "What’s the risk that H5N1 could start a pandemic? - Nagaland Post",
        "description": null,
        "url": "https://nagalandpost.com/index.php/whats-the-risk-that-h5n1-could-start-a-pandemic/",
        "urlToImage": null,
        "publishedAt": "2023-03-17T21:21:40Z",
        "content": "An outbreak of H5N1 avian influenza that started in 2021 has become the largest bird flu outbreak in history, both in the US and worldwide. In the US the virus has led to the destruction of millions … [+6303 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Science.org"
        },
        "author": null,
        "title": "Nervous system may play role in severe allergic reactions - Science",
        "description": "Mouse study finds crosstalk between immune cells and region of the brain that regulates temperature",
        "url": "https://www.science.org/content/article/nervous-system-may-play-role-severe-allergic-reactions",
        "urlToImage": "https://www.science.org/do/10.1126/science.adh8504/abs/_20230317_on_anaphylaxis_mouse.jpg",
        "publishedAt": "2023-03-17T18:05:09Z",
        "content": "Peanuts have a dark side. In some people, they can cause a dangerous and sometimes deadly allergic reaction marked by a sharp drop in body temperature and blood pressure, as well as difficulty breath… [+4227 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Finnoexpert.com"
        },
        "author": null,
        "title": "Chicago starts testing wastewater for polio virus - Finnoexpert",
        "description": "The Chicago Department of Public Health announced on Friday it has begun monitoring for the polio virus in wastewater.",
        "url": "https://finnoexpert.com/2023/03/17/chicago-starts-testing-wastewater-for-polio-virus/",
        "urlToImage": "https://www.chicagotribune.com/resizer/UoAIgZdI-ZZOF8uCB9AeyV69tGk=/1200x630/filters:format(jpg):quality(70):focal(1075x938:1085x948)/cloudfront-us-east-1.images.arcpublishing.com/tronc/2FQKTECGCFEPNAWHDWXAY4JQSY.jpg",
        "publishedAt": "2023-03-17T17:47:44Z",
        "content": "The Chicago Department of Public Health announced on Friday it has begun monitoring for the polio virus in wastewater.\r\nNo cases of polio have been identified in Chicago or Illinois, but the departme… [+1685 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slurrp.com"
        },
        "author": "Yash Lakhan",
        "title": "Top Ways To Incorporate Calcium Into Your Diet - Slurrp",
        "description": "For the growth and maintenance of strong bones, calcium-rich diets are crucial. Moreover, it is essential for preserving regular cell activity. Your body needs calcium to support appropriate hormone and blood pressure levels, muscle and neuron function, and c…",
        "url": "https://www.slurrp.com/article/top-ways-to-incorporate-calcium-into-your-diet-1679074084125",
        "urlToImage": "https://images.slurrp.com/prodarticles/o18b6qyxjgj.webp",
        "publishedAt": "2023-03-17T17:34:20Z",
        "content": "For the growth and maintenance of strong bones, calcium-rich diets are crucial. Moreover, it is essential for preserving regular cell activity. Your body needs calcium to support appropriate hormone … [+2526 chars]"
      }
  ];
  
  constructor(props) {
    super(props);
    //console.log("Hello i am consturctor from news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
    document.title ='Health - Top Headlines';
    document.body.style.backgroundColor = "#64485C";
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
          <h2 className="text-center" style={this.style}>News - Top Health Headlines </h2>
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
import React, { Component } from 'react';
import data from '../data/data.js';
import Footer from '../components/footer.js';
import List from '../components/list.js';
import Zoom from 'react-medium-image-zoom';
import ImageBox from '../components/lightbox.js';
import $ from 'jquery';

import project1 from '../images/projects/project-zerda-cover.png';
import project2 from '../images/projects/screenshot-plus-cover.png';
import project3 from '../images/projects/firefox-color-cover.png';
import project4 from '../images/projects/firefox-send-cover.png';
import project5 from '../images/projects/firefox-screenshots-cover.png';
import project6 from '../images/projects/firefoxos-tv-cover.png';

var pcover = [project1, project2, project3, project4, project5, project6];

class Pages extends Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    this.state = {
      view: params.id
    }
  }
  componentDidMount() {
    
  }
  switchView = (view) => {
    $(document).scrollTop(0);
    this.setState({
      view: view,
    });
  }
  
  render() {
    var title = this.props.match.params.id;
    const viewContainerMapping = {
      'firefox-lite': <Project01 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'screenshot-go': <Project02 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-color': <Project03 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-send': <Project04 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-screenshots': <Project05 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefoxos-tv': <Project06 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />
    }
    let container = viewContainerMapping[this.state.view];
    
    return (
      <section id={title} className="pt0-l pt4">
        {container}
      </section>
    );
  }
}

export default Pages;


/************************************************************************************************************************* 



                                                        Views



*************************************************************************************************************************/


/******************************************************* P1 *************************************************************/
class Project01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    var images = ["../images/firefox-lite/image-0.png",
                  "../images/firefox-lite/image-9.png",
                  "../images/firefox-lite/image-1.png",
                  "../images/firefox-lite/image-3.png",
                  "../images/firefox-lite/image-4.png",
                  "../images/firefox-lite/image-5.png",
                  "../images/firefox-lite/process01.png",
                  "../images/firefox-lite/process02.png",
                  "../images/firefox-lite/process03.png",
                  "../images/firefox-lite/process04.png",
                  "../images/firefox-lite/image-6.png",
    ]

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <div className="box center ph4 mt5-l mt4 pb100">
          <h5 className="small-title">overview</h5>
          <div className="cf">
            <div className="fl w-50-l w-100 mb4 mb0-l">
              <p className="f4 lh-copy fw4"><strong>Firefox Lite</strong> is a lightweight browser tailored for the emerging markets, explicitly designed for mobile-first users with different user needs. It provides a new UX with an excellent single hand browsing experience and includes major features such as full-page screenshots, turbo mode, and private browsing. <br/><br/> With the latest update in version 2.5, you can now use Awesome Bar to search faster and easier, customize your home screen with your choice of themes, and pin your preferred sites for quick access. <br/><br/>Since the end of 2019, Firefox Lite's MAU has grown from 1M to almost 1.6M in 7 months.</p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2019-2020</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Product Manager / UX Designer</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Product Strategy/Roadmap, Backlog Prioritization, Feature Requirements, Data Analysis</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4 tl-ns tc">
            <a href="https://play.google.com/store/apps/details?id=org.mozilla.rocket" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Google Play Store</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2 mb5">Firefox Lite 2.0</h2>
              <p className="f4 lh-copy fw4">
              In 2017, we launched the first version of Firefox Lite, since then we have been improving the products and adding features. When I joined the Firefox Lite team, we planned to launch a whole new 2.0 version with content and services for our target markets. Based on our research and existing users' behaviors, we believe that providing curated content through the browser is an excellent way to engage users, allowing them to use different services without downloading extra apps.
              </p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="Firefox Lite 2.0 with Content & Services."
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">Firefox Lite 2.0 with Content & Services.</p>
            </figure>
            </div>
            <h5 className="small-title">Shopping Search</h5>
<p className="f4 lh-copy fw4">
            At that time, I was in charge of the Shopping related features for the new version, working as a PM and partnering with BD, Designers, and researchers to deliver brand new features such as Shopping Search and Shopping Discovery.
</p>

<p className="f4 lh-copy fw4">
During a shopping journey on a browser, users might find something they are interested in and want to research it. That's why we provide this whole new Shopping Search experience that can help them compare prices and specs across different shopping sites. They can simply type a keyword such as backpacks in our shopping search interface, and we will use the keyword to open up all the search results from the top shopping sites. By partnering with different shopping sites, the traffics we bring to them will become our revenue sources.
</p>

<figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
              <img
                alt="Comparing products with Shopping Search."
                src={images[5]}
                width="100%"
              />
              <p className="tc f6 o-60">Comparing products with Shopping Search.</p>
            </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
            <h2 className="f2 mb5">Firefox Lite 2.5</h2>
<p className="f4 lh-copy fw4">
            Based on our product strategy and prioritization methods, we targeted two new features to launch for Firefox Lite 2.5, including Awesome Bar search enhancement and Home customization with a new onboarding process. I was mainly in charge of the Home customization's design, planning, and testing to ensure we could launch the feature to help our cross-functional team.
          </p>
          <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
              <img
                alt="Firefox Lite 2.5 promotion banner for Awesome Bar."
                src={images[2]}
                width="100%"
              />
              <p className="tc f6 o-60">Firefox Lite 2.5 promotion banner for Awesome Bar.</p>
            </figure>
          
        
          <h5 className="small-title">Home Customization</h5>
          <p className="f4 lh-copy fw4">
          For the new feature - Home Customization, we focused on three parts: first-time experience, initial customization, and topsite customization. From our data, we notice that users who customized their browsers have higher engagement and retention. We also see that in our previous design, we weren't quite friendly to the first time users, leading to confusion and a higher dropout rate. With those in mind, we created a new onboarding process with a welcome message and options to easily personalized your browser experiences, such as topics of interest and wallpaper colors. We also prompt users to set our browser as default once they finished the customization part.
          </p>
          <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
              <img
                alt="First-time experience, before and after."
                src={images[3]}
                width="100%"
              />
              <p className="tc f6 o-60">First-time experience, before and after.</p>
            </figure>
          <div className="videoWrapper mt5-l mt4 mb3">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/914nWplLBpU?controls=0&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p className="tc f6 o-60 mb5-l mb4">Full onboarding experience.</p>
          <p className="f4 lh-copy fw4">
          Topsite is one of the most used features in Firefox Lite once users finished the onboarding; it is the websites that are shown on the home page where users can easily access. With the new updates we allow users to easily remove or add websites to their home page from a list of popular websites, once we confirm the needs, we will implement new features that allow users to input their own choice of websites for their home page.
          </p>
          <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
              <img
                alt="Top site customization."
                src={images[4]}
                width="100%"
              />
              <p className="tc f6 o-60">Top site customization.</p>
            </figure>

            <h5 className="small-title">Initial Results</h5>
            <p className="f4 lh-copy fw4">
          With the updated version, we now have around 1.5M monthly active users and 19K daily active users, with an average rating of 4.3 stars and over 5M installs. We will continue to monitor the retention changes to see if updated users have more engagement with our browser.</p>
        <figure className="mv4 mh0 cp" onClick={() => this.onClick(10)}>
              <img
                alt="Rating"
                src={images[10]}
                width="100%"
              />
            </figure>
        </div>
        </div>
          <div className="box center ph4 pv100">
            <h2 className="f2 mb5">Our Process</h2>
            <p className="f4 lh-copy fw4">
            While working with another Product Manager on Firefox Lite, we defined some processes to facilitate our team's innovation process and development cycle.
  </p>

  <p className="f4 lh-copy fw4">
  Started with our product's goal, we defined strategies for achieving that goal, whether it is user acquisition, retention or revenue. We also drafted a roadmap as a communication tool for getting stakeholders on board with our plans. </p>
  <figure className="mv4 mh0 cp" onClick={() => this.onClick(6)}>
              <img
                alt="Process"
                src={images[6]}
                width="100%"
              />
            </figure>


<p className="f4 lh-copy fw4">
  Then, based on the qualitative and quantitative information we collected through different methods as our insights, we can form a backlog with new feature ideas, enhancements and bug fixes. Next step, we will prioritize the backlog items and put them onto a roadmap to help the team understand our priorities in each sprint. 
            </p>
            <figure className="mv4 mh0 cp" onClick={() => this.onClick(7)}>
              <img
                alt="Process"
                src={images[7]}
                width="100%"
              />
            </figure>
            <p className="f4 lh-copy fw4">
            After that, product managers will start working on the product requirement documents and have continuous discussions with UX designers and engineers to generate UX spec and break down the tasks into measurable tickets. At the same time, Product managers will also work with the data team to define what metrics we need to understand the features' performance.
            </p>
            <figure className="mv4 mh0 cp" onClick={() => this.onClick(8)}>
              <img
                alt="Process"
                src={images[8]}
                width="100%"
              />
            </figure>
            <p className="f4 lh-copy fw4">
            With all the tickets and specs ready, we will go into sprint planning to decide what to do in the next two weeks and track our progress afterwards with the team. Within each sprint, we also have data meeting, go-to-market meeting, product/UX meeting, UX spec review meeting, and team meeting to continually sync with the team and make sure we understand the tasks and the status of our product.
            </p>
            <figure className="mv4 mh0 cp" onClick={() => this.onClick(9)}>
              <img
                alt="Process"
                src={images[9]}
                width="100%"
              />
            </figure>
          </div>

        <div className="fade-section">
        <div className="box center ph4">
          <h2 className="f2 mb5">What's Next</h2>
            <p className="f4 lh-copy fw4">
          After the launch of version 2.5, we started to focus on existing issues related to download management. Many of our users are using download frequently, as we've seen from the data and the reviews. Hence, we believe that improving download experience could positively impact the overall retention and bridge the gap on the missing features related to downloading. Stay tuned for more updates on <a href="https://github.com/RocketScientists/Rocket" target="_blank" rel="noopener noreferrer">https://github.com/RocketScientists/Rocket</a>.
          </p>
          <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
              <img
                alt="Download Management work in progress."
                src={images[1]}
                width="100%"
              />
              <p className="tc f6 o-60">Download Management work in progress.</p>
            </figure>
        </div>
        </div>

        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
        <List prev={5} next={1}/>
        <Footer/>
      </section>
    );
  }
}
/******************************************************* P2 *************************************************************/
class Project02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 2,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    var images = ["../images/screenshot-go/image-6.png",
                  "../images/screenshot-go/image-1.png",
                  "../images/screenshot-go/image-4.png",
                  "../images/screenshot-go/image-5.png",
                  "../images/screenshot-go/image-2.png",
                  "../images/screenshot-go/image-3.png",
                  "../images/screenshot-go/image-7.gif",
                  "../images/screenshot-go/image-8.gif",
                  "../images/screenshot-go/image-0.png",
                  "../images/screenshot-go/image-9.png"
                  ]

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <div className="box center ph4 mt5-l mt4 pb100">
          <h5 className="small-title">overview</h5>
          <div className="cf">
            <div className="fl w-50-l w-100 mb4 mb0-l">
              <p className="f4 lh-copy fw4"><strong>Screenshot Go</strong> is an exploration project started by Mozilla Taipei Team, and is specifically targeting Asia markets such as Indonesia. It is a screenshot tool designed for people who use screenshots to capture information across various apps and browsers. We want to help users organize their screenshots by adding information layer to their screenshots so that it is searchable. One of the ideas is to add links to screenshots so that we can bring users back to the internet for more information about their screenshots.
</p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2018</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>UX Designer, Prototyper</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Sketch, InVision, Framer</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4 tl-ns tc">
            <a href="https://framer.cloud/woqSs" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Launch Framer Prototype</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2 mb5">The Challenge</h2>
              <p className="f4 lh-copy fw4">Our team in Taipei wanted to start an idea around online shopping in Asia market. We had our previous research reports about Indonesia market so we asked ourselves what we can do to create a better online shopping experiences for them. We started by mapping out the user journey of a typical shopping experience, and see if there's anything we can tackle. After sending out surveys and several rounds of desk research, we decided to look into the idea of "Online Wishlist" and started our high-level concept storyboarding.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="Research study in Indonesia."
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">Research study in Indonesia.</p>
            </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">Design Process</h2>
              <p className="f4 lh-copy fw4">After working closely with the engineers about additional functionalities such as "Reset", "Undo" and "Save", we delivered our design with a clear list of components users can customize, and an interactive preview section where users can click and select color. Since Firefox Color is a tool for Firefox users only, it's reasonable to promote Firefox Browser if a user accesses this tool from other browsers. Ideally with more people creating and sharing their themes, we could at the same time gain more users to try out Firefox!</p>
              
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
                <img
                alt="Our storyboards."
                src={images[1]}
                width="100%"
              />
                <p className="tc f6 o-60">Our storyboards.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
                <img
                alt="Team up with engineers to discuss concept."
                src={images[2]}
                width="100%"
              />
                <p className="tc f6 o-60">Team up with engineers to discuss concept.</p>
              </figure>
              <p className="f4 lh-copy fw4">With the survey results and our team discussions, we decided to focus on helping people organize their screenshots, and using OCR to detect keywords on the screenshots so they can be searchable. With the text information on the screenshots, we could also direct users to find more information about their screenshots on the internet. We called it "Live Screenshot". For example, if a user screenshot a pair of shoes on an e-commerce site, we can detect the text on the screenshot and potentially bring that user back to that e-commerce site for further actions. </p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
                <img
                alt="Our initial product concept."
                src={images[3]}
                width="100%"
              />
                <p className="tc f6 o-60">Our initial product concept.</p>
              </figure>
          </div>
        </div>
        <div className="box center ph4 pv100">
            <h2 className="f2 mb5">User Testing Trip</h2>
            <p className="f4 lh-copy fw4">After refining the concept with our designers and engineers, we started the prototyping process so that we can test the idea with real users. As our team's prototyper, I use Framer to create an interactive prototype where users can add collections for their screenshots, and also pretend to screenshot an item they like on a website. With the finalized prototype, our team flew to Jakarta to meet with the locals we recruited for user testing. We spent a week interviewing eight users, and at the same time iterating our prototype. (At that time we called our app "Wishot")
</p><p className="f4 lh-copy fw4">
The whole trip was very inspiring for our design team, and we've learned so much about our users, much more than our desk research. We had better ideas on how they use their mobile devices and their daily activities that involve screenshots. We also learned that data plans, internet speed, and mobile device storage could be important factors that change their mobile behaviors.</p>
             <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
                <img
                alt="User testing sessions with our participants."
                src={images[4]}
                width="100%"
              />
                <p className="tc f6 o-60">User testing sessions with our participants.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
                <img
                alt="User testing sessions with our participants."
                src={images[5]}
                width="100%"
              />
                <p className="tc f6 o-60">User testing sessions with our participants.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(6)}>
                <img
                alt="Screenshot and add to collection."
                src={images[6]}
                width="100%"
              />
                <p className="tc f6 o-60">Screenshot and add to collection.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(7)}>
                <img
                alt="View your recent screenshots."
                src={images[7]}
                width="100%"
              />
                <p className="tc f6 o-60">View your recent screenshots.</p>
              </figure>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">What's Next</h2>
              <p className="f4 lh-copy fw4">Compiling all the interview results from our research trip helps us get a better idea of what our product could be. The team continued refining the concept and create a landing page test to see if the idea is worth enough to pour in our engineering team's effort. After that, we successfully built the product with designers and engineers and had launched the product on Google Play Store, renaming to Firefox Screenshot Go. Firefox Screenshot Go now has over 100K installed, with an average rating of 4.6 stars.</p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(8)}>
                <img
                alt="Landing page website."
                src={images[8]}
                width="100%"
              />
                <p className="tc f6 o-60">Landing page website.</p>
              </figure>

              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(9)}>
                <img
                alt="Google Play Store."
                src={images[9]}
                width="100%"
              />
                <p className="tc f6 o-60">Google Play Store.</p>
              </figure>
              
          </div>
        </div>
        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
        <List prev={0} next={2}/>
        <Footer/>
      </section>
    );
  }
}
/******************************************************* P3 *************************************************************/
class Project03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 3,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    var images = ["../images/firefox-color/image-0.png",
                  "../images/firefox-color/image-1.png",
                  "../images/firefox-color/image-2.png",
                  "../images/firefox-color/image-3.png",
                  "../images/firefox-color/image-4.gif",
                  "../images/firefox-color/image-5.gif",
                  "../images/firefox-color/image-6.gif",
                  ]

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <div className="box center ph4 mt5-l mt4 pb100">
          <h5 className="small-title">overview</h5>
          <div className="cf">
            <div className="fl w-50-l w-100 mb4 mb0-l">
              <p className="f4 lh-copy fw4"><strong>Firefox Color</strong> lets you customize the look and feel of Firefox. You can change the tab color, background color, toolbar color and more, to create your own theme. You can also share your creations with your friends, or save them for yourself. It is a Test Pilot experiment that emphasis on enabling users to create their own Firefox experiences with customization.</p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2017-2018</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>UX Designer</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Sketch, InVision</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4 tl-ns tc">
            <a href="https://color.firefox.com/" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Launch Website</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2 mb5">Design Process</h2>
              <p className="f4 lh-copy fw4">We started with a <a href="https://addons.mozilla.org/en-US/firefox/addon/themr/" target="_blank" rel="noopener noreferrer">prototype (Themr)</a> our project manager John Gruen created to test out the idea of customizing the colors of Firefox components. After trying out the prototype, we started sketching out ideas to create a more intuitive tool for users to use. One of the issues we saw is that people don't know what they are customizing based on the components name, such as "Background Tab Text Color", so we want to make the preview of the Firefox browser interactive. Users can click on the parts directly if they want to change the colors.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="Themr addon's interface"
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">Themr addon's interface</p>
            </figure>

            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
                <img
                alt="Early wireframes to establish the user interactions."
                src={images[1]}
                width="100%"
              />
                <p className="tc f6 o-60">Early wireframes to establish the user interactions.</p>
              </figure>
              <p className="f4 lh-copy fw4">We made several adjustments with the UX spec, and at the same time started several visual explorations on how the interface should look and behave. One of the core value of this project is to make it a fun tool for users to play with, so we wanted to make it less tool-like and more visually intriguing. We tested out adding gradient background color on the interface based on the colors users select, and we also added some "preset" themes for people to choose from if they don't want to create their own.</p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
                <img
                alt="UX spec iterations."
                src={images[2]}
                width="100%"
              />
                <p className="tc f6 o-60">UX spec iterations.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
                <img
                alt="Exploring different visual ideas."
                src={images[3]}
                width="100%"
              />
                <p className="tc f6 o-60">Exploring different visual ideas.</p>
              </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">Final Design</h2>
              <p className="f4 lh-copy fw4">After working closely with the engineers about additional functionalities such as "Reset", "Undo" and "Save", we delivered our design with a clear list of components users can customize, and an interactive preview section where users can click and select color. Since Firefox Color is a tool for Firefox users only, it's reasonable to promote Firefox Browser if a user accesses this tool from other browsers. Ideally with more people creating and sharing their themes, we could at the same time gain more users to try out Firefox!</p>
              
              
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
                <img
                alt="Changing Colors."
                src={images[4]}
                width="100%"
              />
                <p className="tc f6 o-60">Changing Colors.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
                <img
                alt="Applying preset themes."
                src={images[5]}
                width="100%"
              />
                <p className="tc f6 o-60">Applying preset themes.</p>
              </figure>
          </div>
        </div>
        <div className="box center ph4 pv100">
            <h2 className="f2 mb5">What's Next</h2>
            <p className="f4 lh-copy fw4">Firefox Color received lots of feedback since its launch, and the team also made some major changes to the interface to make it more visual on how to interact with the tool. For the next steps, we want to integrate Firefox Color with the existing customization settings and theme related addons to make it the one true place for people to change their browser's appearance. Hopefully in the future, all the Firefox new users will recognize Firefox Color as a built-in feature on Firefox.</p>
             <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(6)}>
                <img
                alt="Firefox Color latest interactive interface."
                src={images[6]}
                width="100%"
              />
                <p className="tc f6 o-60">Firefox Color latest interactive interface.</p>
              </figure>
        </div>
        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
        <List prev={1} next={3}/>
        <Footer/>
      </section>
    );
  }
}
/******************************************************* P4 *************************************************************/
class Project04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 4,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    var images = ["../images/firefox-send/image-6.png",
                  "../images/firefox-send/image-4.png",
                  "../images/firefox-send/image-5.png",
                  "../images/firefox-send/image-7.gif",
                  "../images/firefox-send/image-8.gif",
                  "../images/firefox-send/image-3.png",
                  "../images/firefox-send/image-0.png",
                  "../images/firefox-send/image-1.png",
                  "../images/firefox-send/image-9.png",
                  ]

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <div className="box center ph4 mt5-l mt4 pb100">
          <h5 className="small-title">overview</h5>
          <div className="cf">
            <div className="fl w-50-l w-100 mb4 mb0-l">
              <p className="f4 lh-copy fw4"><strong>Firefox Send</strong> is a file transfer service that automatically deletes files from the server after one download or 24 hours. It is the first Test Pilot "Web" experiment, which means there's no need to install add-ons, and you can use it across different browsers and devices. <br/><br/> <em>*Current status: Firefox Send is currently unavailable, the team will reopen it soon once it's ready with the new security improvements.</em> </p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2017</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>UX Designer/Engineer</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Sketch, InVision, HTML/CSS, Javascript</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4 tl-ns tc">
            <a href="https://send.firefox.com/" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Launch Website</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2 mb5">Design Process</h2>
              <p className="f4 lh-copy fw4">Our user research team focused on trying to understand the problem space the experiment is intended to address during the early stage of this experiment. To help with the research, the UX team created early wireframes as a prototype to validate some hypothesis and learn from our users. This helps us determine how we are going to move forward with the UX, visual design and content strategy. Checkout the research report .</p>
<p className="f4 lh-copy fw4">
The user flow seems simple. There's only uploading and downloading files, so we put our focus on how the interface can address the simpleness of transferring files. We also have to take care of some error cases and help users make sense of the whole process so that they will feel secure and be willing to trust the service.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="Early wireframes to establish the user interactions."
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">Early wireframes to establish the user interactions.</p>
            </figure>

            <p className="f4 lh-copy fw4">After establishing the UX spec with the team, we started several visual explorations on how the interface should look and behave. We also considered the responsive design for our interfaces since Firefox Send should work across all devices and all browsers.</p>
          
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
                <img
                alt="Exploring different visual ideas."
                src={images[1]}
                width="100%"
              />
                <p className="tc f6 o-60">Exploring different visual ideas.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
                <img
                alt="Designing responsive interfaces."
                src={images[2]}
                width="100%"
              />
                <p className="tc f6 o-60">Designing responsive interfaces.</p>
              </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">Final Design</h2>
              <p className="f4 lh-copy fw4">For the final design, we focused on clarifying the steps of uploading and downloading files, and also reduced the chances of people not knowing what to do on error pages. We made a lot effort into making Firefox Send support all browsers and different operating systems, and also localized all the strings to support users in different countries (which requires us to rethink about some of the components because of the string length). Before releasing this experiment, I also jumped in to help push the pixels on the front-end part to make sure all the components have a consistent look and feel. Our visual designer did an outstanding job providing a clean and friendly look for the interfaces!</p>
              
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
                <img
                alt="Dragging files to upload."
                src={images[3]}
                width="100%"
              />
                <p className="tc f6 o-60">Dragging files to upload.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
                <img
                alt="Downloading and decrypting files through a unique link."
                src={images[4]}
                width="100%"
              />
                <p className="tc f6 o-60">Downloading and decrypting files through a unique link.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
                <img
                alt="Removing files from your history."
                src={images[5]}
                width="100%"
              />
                <p className="tc f6 o-60">Removing files from your history.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(6)}>
                <img
                alt="File expired if someone has already downloaded it."
                src={images[6]}
                width="100%"
              />
                <p className="tc f6 o-60">File expired if someone has already downloaded it.</p>
              </figure>
          </div>
        </div>
        <div className="box center ph4 pv100">
            <h2 className="f2 mb5">What's Next</h2>
            <p className="f4 lh-copy fw4">Since it's launch, we got lots of articles talking about Firefox Send. There's also a vast amount of feedback and over one thousand upvotes on . To continue improving Firefox Send, we collected all the input and compiled into a feature backlog for us to understand what our users think. We then prioritized the feature requests and brought together our design team to sketch up some ideas. One of the most requested features we implemented is to add a password to your files!</p>
             <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(7)}>
                <img
                alt="Sending files with password protection."
                src={images[7]}
                width="100%"
              />
                <p className="tc f6 o-60">Sending files with password protection.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(8)}>
                <img
                alt="Firefox Send with new branding visual treatment."
                src={images[8]}
                width="100%"
              />
                <p className="tc f6 o-60">Firefox Send with new branding visual treatment.</p>
              </figure>
        </div>
        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
        <List prev={2} next={4}/>
        <Footer/>
      </section>
    );
  }
}
/******************************************************* P5 *************************************************************/
class Project05 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      num: 5,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();

    if($("#addedScript") !== undefined) {
      $("#addedScript").remove();
    } 
    const script = document.createElement("script");
    script.setAttribute('id', 'addedScript');
    script.src = "https://production-assets.codepen.io/assets/embed/ei.js";
    script.async = true;
    document.body.appendChild(script);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    var images = ["../images/firefox-screenshots/image-1.png",
                  "../images/firefox-screenshots/image-0.png",
                  "../images/firefox-screenshots/image-2.png",
                  "../images/firefox-screenshots/image-4.png",
                  "../images/firefox-screenshots/image-8.gif",
                  "../images/firefox-screenshots/image-7.gif",
                  "../images/firefox-screenshots/image-6.png",
                  "../images/firefox-screenshots/image-5.png",
                  "../images/firefox-screenshots/image-3.png"
                  ]

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <div className="box center ph4 mt5-l mt4 pb100">
          <h5 className="small-title">overview</h5>
          <div className="cf">
            <div className="fl w-50-l w-100 mb4 mb0-l">
              <p className="f4 lh-copy fw4"><strong>Firefox Screenshots</strong> is one of the Firefox experiments created by the Test Pilot team. It is a smart screenshotting tool built right inside Firefox, letting users capture elements on a webpage easily, or even take shots of a full webpage. The images are collected in your own online library, ready to be shared.<br/><br/> <em>*Current status: There is no more screenshot library, users can only copy or download the screenshots they captured. Plus, Firefox Screenshots has already turned into a default feature in Firefox Desktop Browser instead of an extension! </em> </p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2016-2017</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>UX Designer/Engineer</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Sketch, InVision, HTML/CSS, Javascript</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4 tl-ns tc">
            <a href="https://screenshots.firefox.com/" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Launch Website</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2 mb5">The Challenge</h2>
              <p className="f4 lh-copy fw4">In 2016, I joined the Test Pilot team as one of the UX designers to drive the UX and UI design for several experiments. At that time Firefox Screenshots is called Page Shot, and it has already got a lot of active participants using screenshots in their daily workflow. The challenge here is to provide a better onboarding experience, refine some of the user flows, and apply a new design system to the interfaces.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="The original Page Shot interface."
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">The original Page Shot interface.</p>
            </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">Design Process</h2>
              <p className="f4 lh-copy fw4">To prioritize the works, we started by re-evaluating how people thought of the features in Page Shot. Over a workshop, we learned that people perceive the click-and-capture as the most significate differentiator for the overall experience. We want to address the key features through the onboarding panel and landing page, and make sure users can jump right into taking shots once that started.</p>
          </div>
          <div className="box center ph4">
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
                <img
                alt="Wireframes for landing page experience."
                src={images[1]}
                width="100%"
              />
                <p className="tc f6 o-60">Wireframes for landing page experience.</p>
              </figure>
              <p className="f4 lh-copy fw4">We mapped the user flow for the screenshots experience and pointed out some interactions that can be simplified or refined to get better user perception.</p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
                <img
                alt="Taking shots & detail page user flow."
                src={images[2]}
                width="100%"
              />
                <p className="tc f6 o-60">Taking shots & detail page user flow.</p>
              </figure>
              <p className="f4 lh-copy fw4">We also applied our new Photon Design System to give our UI design a consistent look and feel, while having the freedom to create some new icons with our own touch.</p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
                <img
                alt="Redesigning the main screens using Sketch."
                src={images[3]}
                width="100%"
              />
                <p className="tc f6 o-60">Redesigning the main screens using Sketch.</p>
              </figure>
            </div>
        </div>
        <div className="box center ph4 pv100">
          <div>
            <h2 className="f2 mb5">Mirco Interactions</h2>
            <p className="f4 lh-copy fw4">While exchanging ideas with our engineers about the UX spec, I also provided some visual interactions on different aspects of the features. I use Codepen to quickly mockup some interaction ideas for the engineers to get a better idea of how things should behave. Here are some of the examples:</p>
            <div className="mt4 mb5-ns mb4">
                <p data-height="480" data-theme-id="dark" data-slug-hash="YZQbBG" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Mouse Tracking" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/YZQbBG/">IxD Series: Mouse Tracking</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f6 o-60">Eyes will follow the mouse while users are taking shots.</p><br/>
                <p data-height="480" data-theme-id="dark" data-slug-hash="xqaxXE" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Photo Viewer" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/xqaxXE/">IxD Series: Photo Viewer</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f6 o-60">Click to zoom in the shots users took.</p><br/>
                <p data-height="480" data-theme-id="light" data-slug-hash="LyvRpR" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Search Behavior" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/LyvRpR/">IxD Series: Search Behavior</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f6 o-60">Click the magnifying glass to expand and collapse the search field.</p><br/>
              </div>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
            <h2 className="f2 mb5">The New Design</h2>
            <p className="f4 lh-copy fw4">To reach our goals for the new design, we focus on simplifying the user experience, improving user interface polish and ensuring Screenshots works across all locales. We added an introductory landing page to explain Screenshots for the new users, a new onboarding flow to help users jumpstart the experience, and a significantly refined UI including new colors, animations, transitions, layouts and icons across the application. Designers and engineers worked together to make sure we deliver a high-quality experience for our users.</p>
            
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
                <img
                alt="Onboarding experience for first time users."
                src={images[4]}
                width="100%"
              />
                <p className="tc f6 o-60">Onboarding experience for first time users.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
                <img
                alt="Taking shots in action."
                src={images[5]}
                width="100%"
              />
                <p className="tc f6 o-60">Taking shots in action.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(6)}>
                <img
                alt="Detail page for your shots with sharing panel."
                src={images[6]}
                width="100%"
              />
                <p className="tc f6 o-60">Detail page for your shots with sharing panel.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(7)}>
                <img
                alt="My Shots page with your own collection of screenshots."
                src={images[7]}
                width="100%"
              />
                <p className="tc f6 o-60">My Shots page with your own collection of screenshots.</p>
              </figure>
          </div>
        </div>
        <div className="box center ph4 pv100">
          <div>
            <h2 className="f2 mb5">What's Next</h2>
            <p className="f4 lh-copy fw4">We take our users feedback seriously. As we obtained more users to try Firefox Screenshots, we got lots of interesting requests to help improve the overall experiences. One example is to combine screenshots with Firefox Account, so that users can access their screenshots on a different device if they log in with an account. Another example is to let user annotate the shots they took. </p>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(8)}>
                <img
                alt="A work-in-progress annotation interface I was working on."
                src={images[8]}
                width="100%"
              />
                <p className="tc f6 o-60">A work-in-progress annotation interface I was working on.</p>
              </figure>
          </div>
        </div>
        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
        <List prev={3} next={5}/>
        <Footer/>
      </section>
    );
  }
}
/******************************************************* P6 *************************************************************/
class Project06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 6,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    var images = ["../images/firefoxos-tv/image-0.png", "../images/firefoxos-tv/image-1.gif", "../images/firefoxos-tv/image-2.gif", "../images/firefoxos-tv/image-3.gif", "../images/firefoxos-tv/image-4.gif", "../images/firefoxos-tv/image-1.png"]

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <div className="box center ph4 mt5-l mt4 pb100">
          <h5 className="small-title">overview</h5>
          <div className="cf">
            <div className="fl w-50-l w-100 mb4 mb0-l">
              <p className="f4 lh-copy fw4"><strong>Firefox OS TV</strong> presents a seamless Firefox web experience on a Smart TV platform, collaborating with our community to build an optimized TV experience. It is part of the effort to provide Firefox OS as an open platform choice for managing and controlling the broader range of connected devices available in the physical world. It was one of the most prominent projects running in the Mozilla Taipei office in 2015.</p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2015</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Prototyper / Front-End Development</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>HTML/CSS, Javascript, User Testing</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4 tl-ns tc">
            <a href="https://youwenliang.github.io/people/mliang/Projects/FirefoxOS_TV-Prototype/" target="_blank" rel="noopener noreferrer" className="db dib-ns mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Launch Prototype</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2 mb5">The Challenge</h2>
              <p className="f4 lh-copy fw4">This was my first project when I joined Mozilla in 2015, at that time the user interface had already well developed and defined, so the role for me is to continue driving the UX of some new features and help prototype and iterate some ideas with our users. The challenge here is to build on top of an already well-received product and continue to innovate the details. Read more about the user interface design <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS_for_TV/User_interface_animation_design" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="Wireframes for the ideas about organizing homescreen with folders."
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">Wireframes for the ideas about organizing homescreen with folders.</p>
            </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">Prototyping</h2>
              <p className="f4 lh-copy fw4">Prototyping for Smart TV is a very different experience since we have to control all the interfaces without a mouse. I made a web-based prototype that is solely controlled by keyboard and can be installed on a TV to navigate with a remote control. Users have to perform several tasks with the prototype, including rearranging the apps on the screen, filtering the view to show specific apps, creating a folder, and moving an item into that folder. The goal here is to understand how to create a better way for users to customize and organize their home screen. Here are some of the interactions we created:</p>
          </div>
          <div className="box center ph4">
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
                <img
                alt="Rearranging the apps to customize your home screen."
                src={images[1]}
                width="100%"
              />
                <p className="tc f6 o-60">Rearranging the apps to customize your home screen.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
                <img
                alt="Filtering the view to show specific apps."
                src={images[2]}
                width="100%"
              />
                <p className="tc f6 o-60">Filtering the view to show specific apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
                <img
                alt="Creating a folder with selected apps."
                src={images[3]}
                width="100%"
              />
                <p className="tc f6 o-60">Creating a folder with selected apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
                <img
                alt="Moving an app inside your folder."
                src={images[4]}
                width="100%"
              />
                <p className="tc f6 o-60">Moving an app inside your folder.</p>
              </figure>
            </div>
        </div>
        <div className="box center ph4 pv100">
          <div>
            <h2 className="f2 mb5">The Results</h2>
            <p className="f4 lh-copy fw4">The bad news is, Mozilla announced that it would no longer be developing the Firefox OS for the smartphone market in December 2015. In consequence, there's also no more Firefox OS for Smart TVs. Since Firefox OS is an open-source project, Panasonic was still able to develop its own "My Home Screen 2.0" based on the old OS. In a way, Firefox OS will continue live on in Panasonic’s 2017 TVs.</p>
          </div>
          <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
              <img
                alt="My Home Screen 2.0"
                src={images[5]}
                width="100%"
              />
              <p className="tc f6 o-60">Panasonic's "My Home Screen 2.0".</p>
            </figure>
        </div>
        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
        <List prev={4} next={0}/>
        <Footer/>
      </section>
    );
  }
}
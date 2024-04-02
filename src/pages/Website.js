import React from 'react'

const Website = () => {
  return (
    <div data-spy="scroll" data-offset="80">
	
    {/* particles */}
    <div id="particles-js"></div>	

    {/* START PRELOADER */}
    <div className="preloader">
        <div className="status">
            <div className="status-mes"></div>
        </div>
    </div>
    {/* END PRELOADER */}		

    {/* START NAVBAR */}  
    <div id="navigation" className="fixed-top navbar-light bg-faded site-navigation">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4">
                    <div className="site-logo">
                        <a className="navbar-logo" href="index.html"><img src="assets/img/logo.png" alt=""/></a>
                    </div>
                </div>{/*- END Col */}					
                <div className="col-lg-10 col-md-9 col-sm-8">
                    <div className="header_right">
                        <nav id="main-menu" className="ml-auto">
                            <ul>
                              <li><a href="#home">Home</a></li>
                              <li><a href="#about">About</a></li>
                              <li><a href="#platform">Platform</a></li>
                              <li><a href="#mvp">MVP</a></li>
                              <li><a href="#token_sale">Tokens</a></li>
                              <li><a href="#roadmap">Roadmap</a></li>								  
                              <li><a href="#contact">Contact</a></li>
                              <li><a id="modal_trigger" className="block-menu" href="#modal">Login</a></li>
                            </ul>
                        </nav>
                        <div id="mobile_menu"></div>
                    </div>
                </div>{/*- END Col */}
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </div> 	  
    {/* END NAVBAR */}
    
    {/* START HOME */}
    <section id="home" className="home_bg">
        <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="hero-text">
                    <h2>We’re reinventing the global equity blockchian.</h2>
                     <p>We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars tied up in rental deposits.</p>
                    <div className="home_btn">
                        <a href="#whitepaper" className="btn_one wow bounceIn" data-wow-delay=".6s">Whitepaper</a>
                        <a href="#token_sale" className="btn_two wow bounceIn" data-wow-delay=".8s">Token Sale</a>
                    </div>
                </div> 
              </div>{/*- END COL */}	
              <div className="col-lg-6 col-sm-12 col-xs-12 text-center">
                <div className="hero-text-img">
                    <img src="assets/img/home.png" className="item-bounce" alt="" />
                </div>
              </div>{/*- END COL */}			  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END  HOME */}	

    {/* START LIVE MARKET */}
    <section className="pgt_live_market section-padding">
        <div className="container">
            <h2 className="title_spectial">Live Market</h2>	
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="single_live_market">
                        {/* TradingView Widget BEGIN */}
                        <div className="tradingview-widget-container">
                          <div className="tradingview-widget-container__widget"></div>
                          <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span className="blue-text">BTCUSD Rates</span></a> by TradingView</div>
                          
                          
                        </div>
                        {/* TradingView Widget END */}
                    </div>			
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="single_live_market">
                        {/* TradingView Widget BEGIN */}
                        <div className="tradingview-widget-container">
                          <div className="tradingview-widget-container__widget"></div>
                          <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/ETHUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span className="blue-text">ETHUSD Rates</span></a> by TradingView</div>
                          
                         
                        </div>
                        {/* TradingView Widget END */}
                    </div>			
                </div>								 	
                <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="single_live_market">
                        {/* TradingView Widget BEGIN */}
                        <div className="tradingview-widget-container">
                          <div className="tradingview-widget-container__widget"></div>
                          <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/LTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">LTCUSDT Rates</span></a> by TradingView</div>
                          
                        </div>
                        {/* TradingView Widget END */}
                    </div>			
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="single_live_market">
                        {/* TradingView Widget BEGIN */}
                        <div className="tradingview-widget-container">
                          <div className="tradingview-widget-container__widget"></div>
                          <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/XRPUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">XRPUSDT Rates</span></a> by TradingView</div>
                         
                        </div>
                        {/* TradingView Widget END */}
                    </div>			
                </div>
            </div>
        </div>
    </section>
    {/* END LIVE MARKET */}
    
    {/* START ABOUT */}
    <section id="about" className="about_us section-padding">
        <div className="container">
            <h2 className="title_spectial">About Company</h2>							
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="about-text">
                     <h2>About the company</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars.</p> 
                     <p>We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars tied up in rental tenants deposits.</p>
                    <div className="about_btn">
                        <a href="https://www.youtube.com/watch?v=CMPebxJjE8o" className="btn_one video_btn wow bounceIn" data-wow-delay=".3s">Watch Video <span className="ti-arrow-right"></span></a>
                    </div>
                </div> 
              </div>{/*- END COL */}	
              <div className="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="about-img">
                    <img src="assets/img/about.png" className="item-bounce img-fluid" alt="" />
                </div>
              </div>{/*- END COL */}			  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END  ABOUT */}		

    {/* START PROCESS */}
    <section className="process_area section-padding">
       <div className="container">
            <h2 className="title_spectial">Why Choose Us</h2>			
            <div className="row text-center">					
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                    <div className="single_process">
                        <div className="process_num">
                            <h4>1</h4> 
                        </div> 
                        <h3>Wallet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>{/* END COL */}					
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                    <div className="single_process">
                        <div className="process_num">
                            <h4>2</h4> 
                        </div> 
                        <h3>Safe & Secure</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>{/* END COL */}					
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                    <div className="single_process">
                        <div className="process_num">
                            <h4>3</h4> 
                        </div> 
                        <h3>Buy & Sell</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>{/* END COL */}				
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
                    <div className="single_process">
                        <div className="process_num">
                            <h4>4</h4> 
                        </div> 
                        <h3>Flexibility</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>{/* END COL */}				
            </div>{/* END ROW */}
        </div>{/* END CONTAINER */}
    </section>
    {/* END PROCESS */}
    
    {/* START PLATFORM */}
    <section id="platform" className="platform_area section-padding">
        <div className="container">
            <h2 className="title_spectial">Platform</h2>					
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="platform-text">
                     <h2>Platform for our Participators</h2>
                     <p>We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental.</p>
                </div> 
                <div className="platform_list">
                    <span className="ti-cup"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="platform_list">
                    <span className="ti-target"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="platform_list">
                    <span className="ti-crown"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
              </div>{/*- END COL */}	
              <div className="col-lg-7 col-sm-12 col-xs-12 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                <div className="platform-target">
                    <img src="assets/img/platform.png" className="item-bounce img-fluid" alt="" />
                </div>
              </div>{/*- END COL */}			  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END PLATFORM */}				
     
    {/* START TRADERS */}
    <section id="traders" className="traders_area section-padding">
        <div className="container">			
            <div className="row">
              <div className="col-lg-7 col-sm-12 col-xs-12 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="platform-img">
                    <img src="assets/img/trader-img.png" className="item-bounce img-fluid" alt="" />
                </div>
              </div>{/*- END COL */}				  
              <div className="col-lg-5 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="traders-text">
                     <h2>Platform for our traders</h2>
                     <p>We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars</p>
                </div> 
                <div className="traders_list">
                    <span className="ti-target"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="traders_list">
                    <span className="ti-cup"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="traders_list">
                    <span className="ti-crown"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
              </div>{/*- END COL */}				  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END TRADERS */}				
     
    {/* START MVP */}
    <section id="mvp" className="mvp_area section-padding">
        <div className="container">
            <h2 className="title_spectial">Mvp</h2>				
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="mvp-text">
                     <h2>We’re reinventing the global equity blockchian</h2>
                     <h4>Automatic matching of buyers & sellers via unique artificial intelligence approach.</h4>
                </div> 
                <div className="mvp_list">
                    <span className="ti-check"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
                <div className="mvp_list">
                    <span className="ti-check"></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
              </div>{/*- END COL */}	
              <div className="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="mvp-img">
                    <img src="assets/img/iconimg3.png" className="item-bounce img-fluid" alt="" />
                </div>
              </div>{/*- END COL */}			  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END MVP */}

    {/* START TOKEN SALE */}
    <section id="token_sale" className="token_sale_area section-padding">
        <div className="container">				
            <h2 className="title_spectial">Token Sale</h2>	
            <div className="row">
             <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                <div className="token_sale_bg">
                    <div className="ca-starts-in">
                        <div className="timer-area">
                            <div data-countdown="2024/12/23"></div>
                        </div>
                    </div>
                    <div className="cs-recived">
                        <div className="progress-box">
                            <p className="info"><span className="left">$10m</span><span className="right">$1000m</span></p>
                            <div className="box w-40 b-10"></div>
                            <p className="info"><span className="left">Softcap</span><span className="right">Hardcap</span></p>
                        </div>
                        <div className="buy-icons">
                            <a href="#" className="btn_one">Buy token now</a>
                            <img src="assets/img/token-icons.png" alt=""/>
                        </div>
                    </div>
                </div>
              </div>{/*- END COL */}
             <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="pre_sale_area">
                    <div className="single_presale">
                        <h5>Private Pre-Sale</h5>
                        <p>Sep 20, 2024</p>
                    </div>
                    <div className="single_presale">
                        <h5>Pre-Sale</h5>
                        <p>Oct 21, 2024</p>
                    </div>
                    <div className="single_presale">
                        <h5>Crowdsale</h5>
                        <p>Nov 22, 2024</p>
                    </div>
                </div>
             </div>{/*- END COL */}				
             <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                <div className="pre_sale_area">
                    <div className="single_presale">
                        <h5>Low - High 14h</h5>
                        <p>$ 3,155.63 - $ 5,124.62</p>
                    </div>
                    <div className="single_presale">
                        <h5>Total Token Sale</h5>
                        <p>412,573 BCC (4.2%)</p>
                    </div>
                    <div className="single_presale">
                        <h5>Acceptable Currency </h5>
                        <p>BTC, ETH, LTC</p>
                    </div>
                </div>
             </div>	{/*- END COL */}			  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END TOKEN SALE */}
    
    {/* START TOKEN IMAGE AREA */}
    <section className="token_img_area section-padding">
        <div className="container">				
            <div className="row text-center">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="token-img">
                    <h4>Token Distribution</h4>
                    <img src="assets/img/02-Chat.png" className="img-fluid" alt="" />
                </div>
              </div>{/*- END COL */}	
              <div className="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="fund-img">
                    <h4>Fund Distribution</h4>
                    <img src="assets/img/01-Chat.png" className="img-fluid" alt="" />
                </div>
              </div>{/*- END COL */}			  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END TOKEN IMAGE AREA */}

    {/* START ROADMAP  */}
    <section id="roadmap" className="our_roadmap section-padding">
        <div className="container">
            <h2 className="title_spectial">Roadmap</h2>		
            <div className="row text-center">
                <div className="col-lg-12">
                    <div id="roadmap-slider" className="owl-carousel">
                        <div className="roadmap roadmap_color">
                            <span></span>
                            <h5>Jan 2024</h5>
                            <p>Crypto Ico platform</p>
                        </div>
                        <div className="roadmap roadmap_color">
                            <span></span>
                            <h5>Feb 2024</h5>
                            <p>Project Concepts</p>
                        </div>
                        <div className="roadmap">
                            <span></span>
                            <h5>Mar 2024</h5>
                            <p>Ico begins</p>
                        </div>
                        <div className="roadmap">
                            <span></span>
                            <h5>Apr 2024</h5>
                            <p>Software Development Kit</p>
                        </div>
                        <div className="roadmap">
                            <span></span>
                            <h5>May 2024</h5>
                            <p>Beta version of Ico</p>
                        </div>
                        <div className="roadmap">
                            <span></span>
                            <h5>June 2024</h5>
                            <p>Beta version of Ico</p>
                        </div>
                        <div className="roadmap">
                            <span></span>
                            <h5>July 2024</h5>
                            <p>Beta version of Ico</p>
                        </div>
                        <div className="roadmap">
                            <span></span>
                            <h5>Aug 2024</h5>
                            <p>Beta version of Ico</p>
                        </div>
                    </div>
                </div>{/*END  COL  */}
            </div>{/*END  ROW  */}
        </div>{/* END CONTAINER  */}
    </section>
    {/* END ROADMAP */}
    
    {/* START DOCUMENT */}
    <section id="whitepaper" className="whitepaper_area section-padding">
        <div className="container">
            <h2 className="title_spectial">Documents</h2>		
            <div className="row">			
                <div className="col-md-5 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                    <div className="whitepaper_img">
                        <img src="assets/img/whitepaper.png" className="img-fluid" alt="" />
                    </div>
                </div>{/*- END COL */}
                <div className="col-md-7 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                    <div className="whitepaper_content">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything therefore always embarrassing hidden in the middle of text.</p>
                        
                        <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>	
                        
                        <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>	
                    </div>
                </div>{/*- END COL */}
            </div>{/*- END ROW */}			
        </div>{/*- END CONTAINER */}	
    </section>
    {/* END DOCUMENT */}	
    
    {/* START TEAM MEMBERS */}
    <section id="team" className="team_area section-padding">
        <div className="container">								
            <h2 className="title_spectial">Meet creative team</h2>	
            <div className="row text-center">
                <div className="col-lg-2 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                    <div className="our-team">
                        <div className="single-team">
                            <img src="assets/img/team/1.jpg" className="img-fluid" alt="" />
                            <h3>Gary Hunt</h3>
                            <p>Marketer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook facebook"></a></li>
                            <li><a href="#" className="ti-twitter twitter"></a></li>
                            <li><a href="#" className="ti-google google"></a></li>
                        </ul>						
                    </div>{/*- END OUR TEAM */}	
                </div>{/*- END COL */}	
                <div className="col-lg-2 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                    <div className="our-team">
                        <div className="single-team">
                            <img src="assets/img/team/2.jpg" className="img-fluid" alt="" />
                            <h3>Ayoub Fennouni</h3>
                            <p>Manager</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook facebook"></a></li>
                            <li><a href="#" className="ti-twitter twitter"></a></li>
                            <li><a href="#" className="ti-google google"></a></li>
                        </ul>						
                    </div>{/*- END OUR TEAM */}	
                </div>{/*- END COL */}	
                <div className="col-lg-2 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                    <div className="our-team">
                        <div className="single-team">
                            <img src="assets/img/team/3.jpg" className="img-fluid" alt="" />
                            <h3>Mark Linomit</h3>
                            <p>Python Developer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook facebook"></a></li>
                            <li><a href="#" className="ti-twitter twitter"></a></li>
                            <li><a href="#" className="ti-google google"></a></li>
                        </ul>						
                    </div>{/*- END OUR TEAM */}	
                </div>{/*- END COL */}
                <div className="col-lg-2 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
                    <div className="our-team">
                        <div className="single-team">
                            <img src="assets/img/team/4.jpg" className="img-fluid" alt="" />
                            <h3>Thompson Luis</h3>
                            <p>Developer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook facebook"></a></li>
                            <li><a href="#" className="ti-twitter twitter"></a></li>
                            <li><a href="#" className="ti-google google"></a></li>
                        </ul>						
                    </div>{/*- END OUR TEAM */}	
                </div>{/*- END COL */}
                <div className="col-lg-2 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset="0">
                    <div className="our-team">
                        <div className="single-team">
                            <img src="assets/img/team/5.jpg" className="img-fluid" alt="" />
                            <h3>Amira Yerden</h3>
                            <p>UI/UX Designer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook facebook"></a></li>
                            <li><a href="#" className="ti-twitter twitter"></a></li>
                            <li><a href="#" className="ti-google google"></a></li>
                        </ul>						
                    </div>{/*- END OUR TEAM */}	
                </div>{/*- END COL */}
                <div className="col-lg-2 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" data-wow-offset="0">
                    <div className="our-team">
                        <div className="single-team">
                            <img src="assets/img/team/6.jpg" className="img-fluid" alt="" />
                            <h3>Martha Valdes</h3>
                            <p>React Developer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook facebook"></a></li>
                            <li><a href="#" className="ti-twitter twitter"></a></li>
                            <li><a href="#" className="ti-google google"></a></li>
                        </ul>						
                    </div>{/*- END OUR TEAM */}	
                </div>{/*- END COL */}		  
            </div>{/*- END ROW */}			
        </div>{/*- END CONTAINER */}
    </section>
    {/* END TEAM MEMBERS */}
    
    {/* START BOARD OF DIRECTORS */}
    <section id="bod" className="bod_area">
        <div className="container">								
            <h2 className="title_spectial">Board of directors</h2>
            <div className="row text-center">
                <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                    <div className="our-bod">
                        <div className="single-bod">
                            <img src="assets/img/bod/1.jpg" className="img-fluid" alt="" />
                            <h3>Gary Hunt</h3>
                            <p>Marketer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook"></a></li>
                            <li><a href="#" className="ti-twitter"></a></li>
                            <li><a href="#" className="ti-google"></a></li>
                        </ul>						
                    </div>{/*- END OUR BOARD OF DIRECTORS */}	
                </div>{/*- END COL */}	
                <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                    <div className="our-bod">
                        <div className="single-bod">
                            <img src="assets/img/bod/2.jpg" className="img-fluid" alt="" />
                            <h3>Ayoub Fennouni</h3>
                            <p>Manager</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook"></a></li>
                            <li><a href="#" className="ti-twitter"></a></li>
                            <li><a href="#" className="ti-google"></a></li>
                        </ul>						
                    </div>{/*- END OUR BOARD OF DIRECTORS */}	
                </div>{/*- END COL */}	
                <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                    <div className="our-bod">
                        <div className="single-bod">
                            <img src="assets/img/bod/3.jpg" className="img-fluid" alt="" />
                            <h3>Mark Linomit</h3>
                            <p>Python Developer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook"></a></li>
                            <li><a href="#" className="ti-twitter"></a></li>
                            <li><a href="#" className="ti-google"></a></li>
                        </ul>						
                    </div>{/*- END OUR BOARD OF DIRECTORS */}	
                </div>{/*- END COL */}
                <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
                    <div className="our-bod">
                        <div className="single-bod">
                            <img src="assets/img/bod/4.jpg" className="img-fluid" alt="" />
                            <h3>Thompson Luis</h3>
                            <p>Developer</p>
                        </div>	
                        <ul className="social">
                            <li><a href="#" className="ti-facebook"></a></li>
                            <li><a href="#" className="ti-twitter"></a></li>
                            <li><a href="#" className="ti-google"></a></li>
                        </ul>						
                    </div>{/*- END OUR BOARD OF DIRECTORS */}	
                </div>{/*- END COL */}	  
            </div>{/*- END ROW */}			
        </div>{/*- END CONTAINER */}
    </section>
    {/* END BOARD OF DIRECTORS */}	

    {/* START APP DOWNLOAD */}
    <section id="app-download" className="app_area section-padding">
        <div className="container">
            <h2 className="title_spectial">Mobile app</h2>							
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div className="app-img">
                    <img src="assets/img/download-banner.png" className="item-bounce img-fluid" alt="" />
                </div>
              </div>{/*- END COL */}					 
             <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                <div className="app-text">
                     <h2>Download the app today</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p> 
                     <ul>
                         <li><span className="ti-user"></span>Create Profile</li>
                         <li><span className="ti-download"></span>Download It for Free</li>
                         <li><span className="ti-cup"></span>Enjoy this app</li>
                     </ul>
                    <div className="home_btn">
                        <a href="#" className="btn_one wow bounceIn" data-wow-delay=".3s"><i className="fa fa-apple"></i>App Store</a>
                        <a href="#" className="btn_two wow bounceIn" data-wow-delay=".4s"><i className="fa fa-play"></i>Google Play</a>
                    </div>
                </div> 
              </div>{/*- END COL */}			  
            </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
    </section>
    {/* END  APP DOWNLOAD */}			

    {/* START FAQ */}
    <section id="faq" className="faq1-area">
        <div className="container">
            <h2 className="title_spectial">Frequently Asked Questions</h2>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-12">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is cryptocurrency?
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            Cryptocurrency refers to a digital or virtual currency that uses cryptography to secure and verify transactions as well as to control the creation of new units. Cryptocurrencies operate independently of a central bank and are decentralized, meaning they are not controlled by any government or financial institution.
                          </div>
                        </div>
                      </div>{/* END ACCORDION ITEM  */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What are the best cryptocurrency for buy?
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            That being said, some of the most popular and well-established cryptocurrencies, in terms of market capitalization and adoption, include Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Cardano (ADA), and Dogecoin (DOGE). However, keep in mind that the cryptocurrency market is highly volatile and unpredictable, and there are many other factors to consider before making any investment decisions.
                          </div>
                        </div>
                      </div>{/* END ACCORDION ITEM  */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How to buy cryptocurrency?
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            Buying cryptocurrency can vary depending on the country you're in and the specific cryptocurrency you want to buy. However, here are some general steps you can follow: <br /> <br />
                                <ul>
                                    <li><strong>Choose a cryptocurrency exchange:</strong> You'll need to find a reputable exchange that supports the cryptocurrency you want to buy. Some popular exchanges include Coinbase, Binance, Kraken, and Gemini.</li>
                                    <li><strong>Create an account:</strong> Once you've chosen an exchange, you'll need to create an account by providing your personal information, including your name, email address, and government-issued identification.</li>
                                    <li><strong>Fund your account:</strong> You can typically fund your account by linking a bank account, debit card, or credit card. Be aware that different payment methods may have different fees and processing times.</li>
                                    <li><strong>Place an order:</strong> Once your account is funded, you can place an order to buy the cryptocurrency you want. You'll typically need to specify the amount of cryptocurrency you want to buy and the price you're willing to pay.</li>
                                    <li><strong>Store your cryptocurrency:</strong> After your order is filled, your cryptocurrency will be deposited into your exchange account. It's generally recommended that you transfer your cryptocurrency to a secure wallet that you control, such as a hardware wallet, to protect your investment.</li>
                                </ul>
                                <br />
                            Again, these are general steps and the process may vary depending on the exchange and cryptocurrency you choose. It's important to do your own research and understand the potential risks before buying cryptocurrency.
                          </div>
                        </div>
                      </div>{/* END ACCORDION ITEM  */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How to sell cryptocurrency?
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            Selling cryptocurrency is similar to buying it, and the specific process can vary depending on the exchange or wallet you're using. However, here are some general steps you can follow: <br /> <br />
                            <ul>
                                <li><strong>Choose an exchange or wallet:</strong> You'll need to find a reputable exchange or wallet that supports the cryptocurrency you want to sell. Some popular options include Coinbase, Binance, Kraken, and Gemini.</li>
                                <li><strong>Log into your account:</strong> Once you've chosen an exchange or wallet, log into your account using your username and password.</li>
                                <li><strong>Select the cryptocurrency you want to sell:</strong> From your account dashboard, select the cryptocurrency you want to sell and the amount you want to sell.</li>
                                <li><strong>Choose your selling method:</strong> Depending on the exchange or wallet you're using, you may have the option to sell your cryptocurrency for fiat currency, such as USD or EUR, or for another cryptocurrency.</li>
                                <li><strong>Confirm your transaction:</strong> After you've chosen your selling method and entered the relevant information, you'll need to confirm your transaction. Be sure to review the details carefully before confirming the transaction.</li>
                                <li><strong>Transfer the funds to your bank account:</strong> Once the transaction is complete, the funds from your sale will typically be deposited into your exchange or wallet account. You can then transfer the funds to your linked bank account.</li>
                            </ul>
                             <br />
                            Again, these are general steps and the specific process can vary depending on the exchange or wallet you're using. It's important to do your own research and understand the potential risks before selling cryptocurrency.
                          </div>
                        </div>
                      </div>{/* END ACCORDION ITEM  */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What is the refund policy?
                          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            Most reputable companies and organizations will have a clear and transparent refund policy that outlines the circumstances under which refunds are offered, the time frame in which refunds can be requested, and any applicable fees or restrictions. If you have any questions about a refund policy or need to request a refund, it's best to contact the company or organization directly for assistance.
                          </div>
                        </div>
                      </div>{/* END ACCORDION ITEM  */}		
                    </div>						
                </div>{/* END COL  */}					
            </div>{/*END  ROW  */}
        </div>{/* END CONTAINER  */}
    </section>
    {/* END FAQ */}

    {/* START CONTACT */}
    <section id="contact" className="contact_us section-padding">
        <div className="container">
            <h2 className="title_spectial">Contact Us</h2>
            <div className="row contact_us_bg">
                <div className="col-lg-5 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">	
                    <div className="address_title">
                        <h4>How can we help you?</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="single_address">
                        <span className="ti-mobile"></span>
                        <p>+512 513 96324</p>
                    </div>	
                    <div className="single_address">
                        <span className="ti-email"></span>
                        <p><a href="https://bestwpware.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9df4f3fbf2dde4f2e8eff0fcf4f1b3fef2f0">[email&#160;protected]</a></p>
                    </div>	
                    <div className="single_address">
                        <span className="ti-location-pin"></span>
                        <p>3481 Melrose Place, Beverly Hills</p>
                    </div>	
                </div>{/* END COL  */}						
                <div className="col-lg-7 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                    <div className="contact">
                        <form className="form" name="enq" method="post" action="https://bestwpware.com/html/tf/kaniz-demo/kaniz/contact.php" onsubmit="return validation();">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input type="text" name="name" className="form-control" placeholder="Name" required="required"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" name="email" className="form-control" placeholder="Email" required="required"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" name="subject" className="form-control" placeholder="Subject" required="required"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea rows="6" name="message" className="form-control" placeholder="Your Message" required="required"></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-lg btn_one" title="Submit Your Message!">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>{/* END COL  */}					
            </div>{/* END ROW */}
        </div>{/* END CONTAINER */}
    </section>
    {/* END CONTACT */}

    {/* START COMPANY PARTNER LOGO  */}
    <div className="partner-logo section-padding">
        <div className="container">
            <h2 className="title_spectial">Our Partners</h2>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="partner">
                        <a href="#"><img src="assets/img/partner/1.png" alt="image"/></a>
                        <a href="#"><img src="assets/img/partner/2.png" alt="image"/></a>
                        <a href="#"><img src="assets/img/partner/3.png" alt="image"/></a>
                        <a href="#"><img src="assets/img/partner/4.png" alt="image"/></a>
                        <a href="#"><img src="assets/img/partner/5.png" alt="image"/></a>
                        <a href="#"><img src="assets/img/partner/6.png" alt="image"/></a>
                        <a href="#"><img src="assets/img/partner/2.png" alt="image"/></a>
                        <a href="#"><img src="assets/img/partner/1.png" alt="image"/></a>
                    </div>
                </div>{/* END COL  */}
            </div>{/*END  ROW  */}
        </div>{/* END CONTAINER  */}
    </div>
    {/* END COMPANY PARTNER LOGO */}
    
    {/* START FOOTER */}
    <div className="footer">
        <div className="container">		
            <div className="row">						
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
                    <div className="footer_logo">
                        <img src="assets/img/logo.png" alt="Footer-logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p>
                    </div>
                    <div className="footer_profile">
                        <ul>
                            <li><a href="#" className="s_facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="s_twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="s_instagram"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="s_linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>								
                </div>{/*- END COL */}						
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                    <div className="single_footer">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Communications</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                </div>{/*- END COL */}	
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                    <div className="single_footer">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Licenses</a></li>
                            <li><a href="#">market API</a></li>
                            <li><a href="#">Careers and job</a></li>
                            <li><a href="#">Referral Program</a></li>
                            <li><a href="#">Jobs in Kaniz</a></li>						
                        </ul>
                    </div>
                </div>{/*- END COL */}
                <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
                    <div className="newsletter-form">
                        <h4>Subscribe for get updates</h4>
                        <form action="#" className="subscribe">
                            <input type="text" className="subscribe__input" placeholder="Email Address"/>
                            <button type="button" className="btn_one">Subscribe</button>
                        </form>
                    </div>
                </div>{/*- END COL */}		
            </div>{/*- END ROW */}		
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer_copyright">
                        <p>&copy; 2024 Kaniz. All Rights Reserved.</p>
                    </div>
                </div>
            </div>				
        </div>{/*- END CONTAINER */}
    </div>
    {/* END FOOTER */}	

    {/* START LOGIN */}	
    <div id="modal" className="popupContainer" style={{ display: 'none' }}>
        <header className="popupHeader">
            <span className="header_title">Login</span>
            <span className="modal_close"><i className="fa fa-times"></i></span>
        </header>
        
        <section className="popupBody">
            {/* Social Login */}
            <div className="social_login">
                <div className="">
                    <a href="#" className="social_box fb">
                        <span className="icon"><i className="fa fa-facebook"></i></span>
                        <span className="icon_title">Connect with Facebook</span>
                        
                    </a>

                    <a href="#" className="social_box google">
                        <span className="icon"><i className="fa fa-google-plus"></i></span>
                        <span className="icon_title">Connect with Google</span>
                    </a>
                </div>

                <div className="centeredText">
                    <span>Or use your Email address</span>
                </div>

                <div className="action_btns">
                    <div className="one_half"><a href="#" id="login_form" className="abtn">Login</a></div>
                    <div className="one_half last"><a href="#" id="register_form" className="abtn">Sign up</a></div>
                </div>
            </div>

            {/* Username & Password Login form */}
            <div className="user_login">
                <form>
                    <label>Email / Username</label>
                    <input type="text" />
                    <br />

                    <label>Password</label>
                    <input type="password" />
                    <br />

                    <div className="checkbox">
                        <input id="remember" type="checkbox" />
                        <label for="remember">Remember me on this computer</label>
                    </div>

                    <div className="action_btns">
                        <div className="one_half"><a href="#" className="abtn back_btn"><i className="fa fa-angle-double-left"></i> Back</a></div>
                        <div className="one_half last"><a href="#" className="abtn">Login</a></div>
                    </div>
                </form>

                <a href="#" className="forgot_password">Forgot password?</a>
            </div>

            {/* Register Form */}
            <div className="user_register">
                <form>
                    <label>Full Name</label>
                    <input type="text" />
                    <br />

                    <label>Email Address</label>
                    <input type="email" />
                    <br />

                    <label>Password</label>
                    <input type="password" />
                    <br />

                    <div className="checkbox">
                        <input id="send_updates" type="checkbox" />
                        <label for="send_updates">Send me occasional email updates</label>
                    </div>

                    <div className="action_btns">
                        <div className="one_half"><a href="#" className="abtn back_btn"><i className="fa fa-angle-double-left"></i> Back</a></div>
                        <div className="one_half last"><a href="#" className="abtn">Register</a></div>
                    </div>
                </form>
            </div>
        </section>
    </div>
    {/* END LOGIN */}	


    {/* Latest jQuery */}
        
</div>
  )
}

export default Website
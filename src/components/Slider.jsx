import React, { useState } from 'react'

function Slider() {
    const[test, settest]=useState()
  return (
    <section class="main-slider">
			<div class="parallax-scene parallax-scene-2 parallax-icon">
                <span data-depth="0.40" class="parallax-layer icon icon-1"></span>
                <span data-depth="0.50" class="parallax-layer icon icon-2"></span>
            </div>
			<div class="container">
				<div class="row clearfix">
					<div class="col-lg-7 col-md-12 col-sm-12">
						<div class="banner-style">
							<h1 class="banner-title">Professional Customer <span>Service</span></h1>
							<p>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
								porro <br/> quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
							</p>
						</div>
						<div class="banner-btn">
							<a class="link-btn" href="contact.html">Get In Touch</a>
                            <button className='btn' onClick={() => settest('hello')}><a class="link-btn" href="#">Hello</a></button>
                            <button className='btn' onClick={() => settest('click')}><a class="link-btn" href="#">click</a></button>
                            <button className='btn' onClick={() => settest('link')}><a class="link-btn" href="#">link</a></button>
                            <h1>{test}</h1>
    
                        </div>
					</div>
					<div class="col-lg-5 col-md-12 col-sm-12">
						<div class="banner-image">
							<img src="images/main-slider/banner-bg-image.png" alt=""/>
						</div>
					</div>
				</div>	
			</div>
			<div class="bg-shape-image">
				<img src="images/background/bg-slider-shape1.png" alt=""/>
			</div>
		</section>
  )
}

export default Slider
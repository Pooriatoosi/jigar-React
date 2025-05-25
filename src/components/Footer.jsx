import React from 'react'

function Footer() {
  return (
    <footer class="main-footer">
			<div class="container">
				{/* <!--Widgets Section--> */}
				<div class="widgets-section">
					<div class="row clearfix">
						{/* <!--big column--> */}
						<div class="big-column col-lg-6 col-md-12 col-sm-12">
							<div class="row clearfix">
								{/* <!--Footer Column--> */}
								<div class="footer-column col-lg-6 col-md-6 col-sm-12">
									<div class="footer-widget">
										<div class="logo-four">
											<a href="index.html"><img src="images/footer-logo.png" alt="" title=""/></a>
										</div>
										<div class="text">Duis dapibus elit ut elit interdum, non <br/> tempus ipsum blandit. Suspendisse quis <br/> nibh et lorem dignissim semper.</div>
										<ul class="footer-awards-list">
											<li><img src="images/award-1.png" alt=""/></li>
											<li><img src="images/award-2.png" alt=""/></li>
											<li><img src="images/award-3.png" alt=""/></li>
										</ul>
									</div>
								</div>
								{/* <!--Footer Column--> */}
								<div class="footer-column col-lg-6 col-md-6 col-sm-12">
									<div class="footer-widget_four">
										<h4 class="list-heading">Services</h4>
										<ul class="footer-service-list">
											<li><a href="#"> <span class="flaticon-right-arrow"></span> Construction Places</a></li>
											<li><a href="#"><span class="flaticon-right-arrow"></span> Commercial Spaces</a></li>
											<li><a href="#"><span class="flaticon-right-arrow"></span> Residential Areas</a></li>
											<li><a href="#"><span class="flaticon-right-arrow"></span> Laundry Service</a></li>
											<li><a href="#"><span class="flaticon-right-arrow"></span> Carpet Cleaning</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* <!--big column--> */}
						<div class="big-column col-lg-6 col-md-12 col-sm-12">
							<div class="row clearfix">
								{/* <!--Footer Column--> */}
								<div class="footer-column col-lg-7 col-md-6 col-sm-12">
									<div class="footer-widget_four">
										<h4 class="list-heading">Information</h4>
										{/* <!--News Widget Block--> */}
										<div class="usefull-widget-block">
											<div class="widget-inner">
												<ul class="footer-usefull-link">
													<li><a href="#"><span class="flaticon-right-arrow"></span> Services</a></li>
													<li><a href="#"><span class="flaticon-right-arrow"></span> Blog</a></li>
													<li><a href="#"><span class="flaticon-right-arrow"></span> Contacts</a></li>
													<li><a href="#"><span class="flaticon-right-arrow"></span> Site Map</a></li>
													<li><a href="#"><span class="flaticon-right-arrow"></span> Privacy Policy</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								{/* <!--Footer Column--> */}
								<div class="footer-column col-lg-5 col-md-6 col-sm-12">
									<div class="footer-widget_four">
										<h4 class="list-heading">Contact us</h4>
										<ul class="contact-list">
											<li class="location-number"><span class="icon fa fa-map-marker-alt"></span>
												<div class="contact-text">1901 Avenue of the Stars Suite 200
												San Diego, CA 90067</div>
											</li>											
											<li><img src="images/icons/talephone-img.png" alt=""/><a href="tel:88657524332">123 - 4567 - 89 00</a></li>
											<li><img src="images/icons/ant-design_mail-outlined.png" alt=""/> <a href="mailto:Inof@yourmail.org">Inof@yourmail.org</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Bottom --> */}
				<div class="footer-bottom">
					<div class="clearfix">
						<div class="footer-bottom_center">
							<div class="copyright">Copyright By &copy; <a href="index.html"><span>Cleaner</span></a> - 2023 </div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer
import React from 'react'
import ChooseItem from './ChooseItem';
const chooselist = [
  {
    id: 1,
    img: "images/resource/Commercial-Cleaning.png",
    title: "Commercial Cleaning",
    description: "Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
  },
  {
    id: 2,
    img: "images/resource/window-cleaner.png",
    title: "Window Cleaning",
    description: "Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
  },
  {
    id: 3,
    img: "images/resource/Residental-Cleaning.png",
    title: "Residental Cleaning",
    description: "Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
  },
  {
    id: 4,
    img: "images/resource/Kitchen-Cleaning.png",
    title: "Kitchen Cleaning",
    description: "Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
  },
];

function Choose() {
  return (
    <section className="choose-section">
      <div className="container">
        <div className="sub-section">
          <div className="sub-logo">
            <img src="images/icons/cleaner-icon-img.png" alt="" />
          </div>
          <div className="sub-title_sec">
            <p>What We Do</p>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="choose-sec-heading">
              <h2>Why will <span>you choose</span></h2>
              <h4 className="choose_sub-title">Duis dapibus elit ut elit interdum, non tempus ipsum <br /> blandit...</h4>
              <p>Duis dapibus elit ut elit interdum, non tempus ipsum blandit... (متن کوتاه‌شده)</p>
              <div className="list-content">
                <ul className="list-content_one">
                  <li><img src="images/icons/check-icon-img.png" alt="" /> Building a hospital</li>
                  <li><img src="images/icons/check-icon-img.png" alt="" /> Charity For Medical</li>
                </ul>
                <ul className="list-content_two">
                  <li><img src="images/icons/check-icon-img.png" alt="" /> Hospice construction</li>
                  <li><img src="images/icons/check-icon-img.png" alt="" /> Charity For Education</li>
                </ul>
              </div>
            </div>
            <div className="link-btn-two">
              <a className="theme-btn-two" href="service.html">View Our Services <span className="flaticon-right-arrow"></span></a>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="choose_inner-box">
              <div className="row clearfix">
                {chooselist.map((item, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column" key={index}>
                    <ChooseItem 
                      img={item.img} 
                      title={item.title} 
                      description={item.description} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Choose;
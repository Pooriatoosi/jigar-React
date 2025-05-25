import React from 'react'
// const chooselist = [
//     {
//     id:1,
//     img:"images/resource/Commercial-Cleaning.png",
//     title:"Commercial Cleaning",
//     description:"Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
//     },
//     {
//     id:1,
//     img:"images/resource/window-cleaner.png",
//     title:"Window Cleaning",
//     description:"Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
//     },
//     {
//     id:1,
//     img:"images/resource/Residental-Cleaning.png",
//     title:"Residental Cleaning",
//     description:"Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
//     },
//     {
//     id:1,
//     img:"images/resource/Kitchen-Cleaning.png",
//     title:"Kitchen Cleaning",
//     description:"Duis dapibus elit ut elit interdum, non tempus ipsum blandit.",
//     },
// ]
function ChooseItem({ img, title, description }) {
  return (
    <>
    <div className="single-item">
      <div className="icon-img-box">
        <img src={img} alt={title} />
      </div>
      <h4 className="single-item-title">{title}</h4>
      <p className="choose_sub-title">{description}</p>
      <a href="#"><span className="flaticon-right-arrow"></span></a>
    </div>
    </>
  )
}

export default ChooseItem
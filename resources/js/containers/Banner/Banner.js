import React from "react"

const Banner = () => (
    <div id={"carouselExampleInterval"} className={"carousel slide"} data-ride={"carousel"}>
        <div className={"carousel-inner"}>
            <div className={"carousel-item active"} data-interval={"10000"}>
                <img src={"https://dummyimage.com/600x100/03f2ba/fff"} className={"d-block w-100"} alt={"..."}/>
            </div>
            <div className={"carousel-item"} data-interval={"2000"}>
                <img src={"https://dummyimage.com/600x100/03f2ba/fff"} className="d-block w-100" alt={"..."}/>
            </div>
            <div className={"carousel-item"}>
                <img src={"https://dummyimage.com/600x100/03f2ba/fff"} className={"d-block w-100"} alt={"..."}/>
            </div>
            <div className={"carousel-item"}>
                <img src={"https://dummyimage.com/600x100/ffdde1/fff"} className={"d-block w-100"} alt={"..."}/>
            </div>
            <div className={"carousel-item"}>
                <img src={"https://dummyimage.com/600x100/3b8d99/fff"} className={"d-block w-100"} alt={"..."}/>
            </div>
            <div className={"carousel-item"}>
                <img src={"https://dummyimage.com/600x100/03f2ba/fff"} className={"d-block w-100"} alt={"..."}/>
            </div>
        </div>
        <a className={"carousel-control-prev"} href="#carouselExampleInterval" role={"button"} data-slide={"prev"}>
            <span className={"carousel-control-prev-icon"} aria-hidden={"true"}/>
            <span className={"sr-only"}>Previous</span>
        </a>
        <a className={"carousel-control-next"} href="#carouselExampleInterval" role={"button"} data-slide={"next"}>
            <span className={"carousel-control-next-icon"} aria-hidden={"true"}/>
            <span className={"sr-only"}>Next</span>
        </a>
    </div>
);

export default Banner;
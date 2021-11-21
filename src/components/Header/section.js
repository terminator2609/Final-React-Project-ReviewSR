function Section() {
    return (
        <section className="slider_section">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="container">
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="text-bg">
                                            <span>ALL PRODUCTS</span>
                                            <h1>ON ONE PLACE</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="logo">
                                <img src="./images/logo.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
const Home = function () {
    return (
        <div>
            <div className="colorlib-loader"></div>
            <div id="page">
                <nav className="colorlib-nav" role="navigation">
                    <div className="upper-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6 col-md-push-2 text-right">
                                    <div className="about-desc animate-box">
                                        <h1>Добро пожаловать в виртуальную лабораторию.</h1>
                                        <div className="line-height: 2;"></div>
                                        <div className="fancy-collapse-panel">

                                            <p className="btn-apply">Знание - главное достижение человечества.</p>
                                            <div className="image-container">
                                                <img src="/photo/titul1.jpg" alt="Описание фото"/>
                                                    <div className="text-overlay">Виртуальная лаборатория</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-menu">
                                <div className="container">
                                    <div className="row">
                                    </div>
                                </div>
                            </div>
                            <h1>Комплект 2</h1>
                            <li><a href="/laborator1">Измерение жесткости пружины</a></li>
                            <li><a href="/laborator2">Исследование зависимости силы упругости, возникающей в пружине
                                от
                                степени деформации</a></li>
                            <li><a href="/laborator3">Измерение коэффицента трения скольжения</a></li>
                            <li><a href="/laborator4">Измерение рботы силы трения скольжения</a></li>
                            <li><a href="/laborator5">Иследование зависимости силы трения скольжения от силы
                                кориального
                                давления</a></li>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Home
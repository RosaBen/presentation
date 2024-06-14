const Slide = ({index, currentSlide, content}) =>
    {
        const isVisible = index === currentSlide;
        return ( 
            <div className={`slide ${isVisible? "visible" : ""}`}>
                <h1>{content}</h1>

            </div>
        )
    }


    export default Slide;
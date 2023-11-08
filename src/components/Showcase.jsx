import '../styles/showcase.css';

const Showcase = ({ heading, children }) => {
    return (
        <div className="showcase">
            <div className="top">
                <h4> {heading} </h4>
                <p> View all </p>
            </div>

            <div className="main_content" >
                {children}
            </div>
        </div>
    )
}

export { Showcase }

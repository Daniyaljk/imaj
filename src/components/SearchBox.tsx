import "./search-box.css"

export default function SearchBox() {


    return (
        <div className={"search-container"}>

            <div className={"search-box"}>
                <input
                    placeholder={"search ..."}
                    type={"text"}
                    className={"search-input"}
                />



                <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Search</span>
                </button>

            </div>

        </div>
    )
}

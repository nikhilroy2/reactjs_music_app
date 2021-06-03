function Musicinfo(props) {
    return (
        <div className="Musicinfo h-100">
            <StationViewer></StationViewer>
        </div>
    );
}

const StationViewer = () => (
    <div className="StationViewer p-3 h-100 align-items-center d-flex ps-5 mt-n5">
        <div className="col-12">
            <h1 className="text-white">
                Pick a Station
    </h1>
            <p className="my-4" style={{ maxWidth: '300px' }}>
                <strong className="text_str">
                This is a music streaming player for the channels provided by
                SomaFM.com. just pick a station from the sidebar to the right
                to start listening.
                </strong>
    </p>

            <button className="btn btn-danger rounded-pill">
                <i className="fas fa-music    "></i> View Stations
    </button>
        </div>

    </div>
)

export default Musicinfo;
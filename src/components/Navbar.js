function Navbar(props) {
    return (
        <div className="Navbar d-flex justify-content-between p-2 px-3">
            <h3 className="text-danger">
               <i className="fas fa-music text-danger   "></i> Soma FM Player
            </h3>
            <button onClick={()=> document.querySelector('.MusicPanel').classList.remove('MusicPanelHide')} className="btn btn-muted text-white">
                <i className="fas fa-bars fa-2x   "></i>
            </button>

        </div>
    );
}

export default Navbar;
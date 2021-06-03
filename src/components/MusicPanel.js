import { useState } from 'react';
import jsonData from '../json/musics.json'
function MusicPanel(props) {
    const [toggle, setToggle] = useState(false);
    const [inputValue, setInputValue] = useState('')

    function changeHandler(event) {
        const inputVal = event.target.value;
        // console.log(inputVal)
        setInputValue(inputVal)
    }
    return (
        <>
            <div className="Navbar d-flex justify-content-between p-2 px-3">
                <h3 className="text-danger">
                    <i className="fas fa-music text-danger   "></i> Soma FM Player
            </h3>
                <button onClick={() => setToggle(false)} className="btn btn-muted text-white">
                    <i className="fas fa-bars fa-2x   "></i>
                </button>
            </div>
            <div className={toggle ? 'MusicPanel MusicPanelHide' : 'MusicPanel'}>
                <div className="SearchStation">
                    <div className="d-flex align-items-center p-2 shadow-1-strong">
                        <i className="fas fa-search text-white   "></i>
                        <input onChange={changeHandler} className="form-control flex-grow-1 text-white bg_transparent border-0 outline-0  me-3" type="text" placeholder="Search Station..." />
                        <button onClick={() => setToggle(true)} className="btn btn-muted text-white">
                            <i className="fas fa-times  text-white fa-2x   "></i>
                        </button>
                    </div>
                </div>
                <SortListing inputValue={inputValue}></SortListing>
            </div>
        </>

    );
}

const SortListing = (props) => {
    const [sortName, setSortName] = useState('Listeners Counter');
    const [data, setData] = useState(jsonData.music)
    function sortHandler(val, sort) {
       // const sortText = sort
        //console.log(val)
        setSortName(val)
        // const types = {
        //     count: 'count',
        //     title: 'title',
        // };
        //const sortProperty = types[sortText];
        const sorted = jsonData.music.sort((a, b) => a.title.localeCompare(b.title));
        //console.log(sorted)
        //console.log(sorted);
        setData(sorted);
    }
    return (
        <div className="sortWrapper h-100">
            <MusicListing inputValue={props.inputValue} sortInput={sortName} sort={data}></MusicListing>
            <div className="SortListing d-flex p-2 shadow-3-strong align-items-center px-3">
                <span className="text-white">Sort:</span>
                <div className="dropdown">
                    <button
                        className="btn btn-muted text-white"
                        type="button"  onClick={e => sortHandler(e.target.innerText, 'title')}
                       >
                        Music title
                    </button>
                    <ul className="dropdown-menu d-none" aria-labelledby="dropdownMenuButton">
                        <li><button  onClick={e => sortHandler(e.target.innerText, 'title')} className="dropdown-item btn btn-muted text-black shadow-0 w-100"> Music Title</button></li>
                        {/* <li><button  onClick={e => sortHandler(e.target.innerText, 'title')} className="dropdown-item btn btn-muted text-black shadow-0 w-100"> Listeners Counter</button></li> */}
                        {/* <li><button  onClick={e => sortHandler(e.target.innerText, 'title')} className="dropdown-item btn btn-muted text-black shadow-0 w-100"> Music Genre</button></li> */}
                    </ul>
                </div>

            </div>

        </div>
    )
}
const MusicListing = (props) => {
    //const [sortArr, setSortArr] = useState(jsonData.music);
    //const [activeClass, setActiveClass] = useState(false)

    function playMusic(val,s) {
        let audioPlay = document.getElementById('audioPlay');
        audioPlay.src = s;
        audioPlay.play()
        //val.className+= ' list_active_bg';
    }
    // console.log(props.sort)

    return (
        <div className="musicPanel_wrapper">
            <ul className="list-group MusicListing">

                {props.sort.map((val,id) => {
                    return (
                        (
                            <li onClick={(e) => playMusic(e.target,`${val.path}`)} key={id} className={`list-group-item bg_transparent p-4 cup ${val.title.toLowerCase().indexOf(props.inputValue.toLowerCase()) !== -1 ? 'd-block': 'd-none'}`}>
                                <div className="d-flex">
                                    <img src="https://api.somafm.com/logos/256/groovesalad256.png" className="music_logo" alt="music_logo" />
                                    <div className="content text-white ms-3 flex-grow-1">
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <h4>
                                                {val.title}
                                            </h4>
                                            <small className=" text_corn h5">
                                                <i className="fas fa-headphones me-1    "></i> {val.count}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )

                    )
                })}
            </ul>
        </div>
    )
}

export default MusicPanel;
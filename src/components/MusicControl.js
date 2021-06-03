import { useRef } from 'react'
function MusicControl(props) {
    let music_drop = useRef(null)
    function dropdownHandle() {
        music_drop.current.className = 'dropdown-menu'
    }
    return (
        <div className="MusicControl">
            <div className="d-flex justify-content-between flex-wrap text-white">
                <div className="music_main_control d-flex align-items-center">
                    {/* <button className="btn btn-muted text-white me-1">
                        <i className="fas fa-play  fa-2x   "></i>
                    </button> */}
                    <audio id="audioPlay" controls src="" ></audio>
                    {/* <input type="range" className="ms-2" name="" id="" /> */}
                    {/* <div className="audio_timer text-white-50 ms-2">
                        00:00:00
                    </div> */}
                </div>
                <div className={`music_uploader dropdown`} >
                    <button className="btn btn-muted text-white dropdown-toggle" id="upload_dropdown" data-mdb-toggle="dropdown">
                        <i className="fas fa-upload fa-2x   "></i>
                    </button>

                    <div className="dropdown-menu" ref={music_drop} onClick={e => e.stopPropagation()} aria-labelledby="upload_dropdown" style={{ minWidth: '25rem' }}>
                        <form action="" className="p-3 bg-black text-white">
                            <div className="form-group bg_transparent mb-3">
                                <label className="mb-1" htmlFor="">Title</label>
                                <input type="text" className="form-control text-white  bg_corn border-0 outline-0 form_control_focus " aria-describedby="helpId" placeholder="" />
                            </div>
                            <div className="form-group bg_transparent mb-3">
                                <label className="mb-1" htmlFor="">Upload file</label>
                                <input type="file" name="file" accept=".mp3" className="form-control  bg_corn border-0 outline-0 form_control_focus" />
                            </div>
                            <div className="form-group bg_transparent mb-3">
                                <button onClick={e => dropdownHandle()} className="btn btn-sm btn-danger me-3" data-mdb-dismiss="dropdown">
                                    Cancel
                                </button>
                                <button onClick={e => dropdownHandle()} type="submit" className="btn btn-sm btn-success" data-mdb-dismiss="dropdown">
                                    Ok
                                </button>
                            </div>
                        </form>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default MusicControl;
import React from 'react';
import {Link} from '@reach/router';

const Header = props => {

    const style = {
        bigDiv : {
            backgroundColor : "silver",
            padding : "20px",
        },
        header : {
            display : "flex",
            padding : "0 500px",
        },
        nav : {
            display : "flex",
            padding : "0 500px",
            backgroundColor : "white",
        },
        body : {
            backgroundColor : "white",
            textAlign : "center",
        }

    }
    
    return (
        <>
            <div style={style.bigDiv}>
                <div style={style.header}>
                    <Link to="/players/list">Manage Players</Link>
                    <hr/>
                    <Link to="status/game">Manage Player</Link>
                </div>
                <div style={style.body}>
                    <div style={style.nav}>
                        <Link to="/players/list">List</Link>
                        <hr/>
                        <Link to="/players/addplayer">Add Player</Link>
                    </div>
                    <div>
                        {
                            props.children
                        }
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header

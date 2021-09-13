import PropTypes from 'prop-types';
import React from 'react';
import AlbumItem from '../AlbumItem';
import './style.scss';
AlbumList.propTypes = {
    albumList: PropTypes.array,
};

function AlbumList({albumList}) {
    return (
        <ul className="albumList">
            {albumList.map(itemSong => (
                <li key={itemSong.id}>
                    <AlbumItem albumItem={itemSong}/>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;
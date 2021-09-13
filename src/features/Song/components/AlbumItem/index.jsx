import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
AlbumItem.propTypes = {
    albumItem: PropTypes.object.isRequired,
};

function AlbumItem({albumItem}) {
    return (
        <div className="album">
            <div>
                <img src={albumItem.thumbnail} alt="" />
            </div>
            <p className="albumName">{albumItem.name}</p>
        </div>
        
    );
}

export default AlbumItem;
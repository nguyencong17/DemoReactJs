import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'
AlbumFeatures.propTypes = {
    
};

function AlbumFeatures(props) {
    const albumList = [
        {
            id:1,
            name:'Beast Mode Hip Hop',
            thumbnail:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/7/b/3/37b399152caaa40571278cda7adf2af8.jpg'
        },
        {
            id:2,
            name:'Chill Cùng Rap Việt',
            thumbnail:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/2/f/5/82f55da7d8e87167d6edcf66013455aa.jpg'
        },
        {
            id:3,
            name:'Hip-Hop Drive',
            thumbnail:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/1/f/4/51f46215a19e197dd9c2ee8cd866e292.jpg'
        },
        {
            id:4,
            name:'Rap Việt Tạo Động Lực',
            thumbnail:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/9/1/1/5911ca608c3bf3ebe553cdc8452f1973.jpg'
        }

    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeatures;
/**
 * This function is primarily used to get cropped images from https://api.rawg.io/. This normal images downloaded are HUGE and are 
 * not necessary for this app as we only displauing a small image on the Game Card. If the internet connection is slow it will take a
 * while to download all the images. To speed the process the API supports the downloading cropped images, by inserting 
 * 'cropped/600/400/' inthe normal URL. See how it is done in here...
 * Example: 
 *      Normal Url: 'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg' 
 *      Cropped Url: 'https://media.rawg.io/media/ + cropped/600/400 + games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg'
 */

import React from 'react';
import NoImageUrl from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {

    if (!url)  return NoImageUrl;
    
    const index = url.indexOf('media/') + 'media/'.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageUrl 
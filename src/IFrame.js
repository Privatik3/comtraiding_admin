import React from 'react';

export default function IFrame({url, height, width}) {
    return (
        <iframe src={url} height={height} width={width} title="Iframe Example"></iframe>
    );
}

import React from 'react';

import Link from './Link';

import linkNames from '../data/linkNames.json';

const Links = () => {
    return linkNames.map((linkName, idx) => {
        return <Link content={linkName} key={idx} />;
    })
}

export default Links;
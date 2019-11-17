import React, { Fragment } from 'react';

// import Link from './LinkComp/_index';
import LinkComp from './LinkComp/';
import LinkCompData from './LinkComp/_index';

import linkNames from '../data/linkNames.json';

const Links = () => {
    return (
        <Fragment>
            <LinkComp />
            {linkNames.map((linkName, idx) => {
                return <LinkCompData content={linkName} key={idx} />;
            })}
        </Fragment>
    )
}

export default Links;
import React from 'react';
import Auxx from '../../hoc/Auxx';

const Layout = props => (
    <Auxx>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxx>
);

export default Layout;
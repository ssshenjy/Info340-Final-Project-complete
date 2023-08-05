import React from 'react'; //import React Component
import { Nav } from './Nav';

import {Routes, Route, Navigate, Link} from 'react-router-dom';

function App(props) {

    return(
        
        <div>

             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Nav />
                </div>
            </nav>



        </div>

    );
}
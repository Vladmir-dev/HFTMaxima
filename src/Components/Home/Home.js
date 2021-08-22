import React from 'react';
import Main from '../../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Home(){
    return(
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    )
}
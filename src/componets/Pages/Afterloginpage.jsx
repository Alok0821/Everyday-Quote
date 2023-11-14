import React, { useEffect } from 'react'
import Welcome from '../welcomeuser/Welcome';
// import Lifequote from '../collections_of_cards/Life-Quote/Lifequote';
import { Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

const Afterloginpage = () => {

    return (
        <>
            <Welcome />

            <div class="Afterloginpage-container">
                <div class="row">
                    <div class="col-sm bg-info  text-white ">
                        <b><a href="/life-quotations" >Life Quotes</a></b>
                    </div>
                    <div class="col-sm  bg-info text-white">
                        <b><a href="/wisdom-quotations">Wisdom Quotes</a></b>
                    </div>
                    <div class="col-sm  bg-info text-white">
                        <b><a href="/motivational-quotations">Motivation Quotes</a></b>
                    </div>
                    <div class="col-sm  bg-info text-white">
                        <b><a href="/miscellaneous-quotations">Miscellaneous Quotes</a></b>
                    </div>
                </div>
               
            </div>




        </>
    )
}

export default Afterloginpage;

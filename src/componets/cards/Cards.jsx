import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    let navigate= useNavigate()
    const routeHandle=(e)=>{
        e.preventDefault()
        navigate("/signin")
    }
    return (
        <>
            <div className="card_container">

                <div className="card_1-container">
                    <Card style={{ width: "17.5rem" ,}}>
                        <Card.Img variant='top' src='Images/N1.jpg'/>
                        <Card.Body>
                            <Card.Title>Life Quotes</Card.Title>
                            <Card.Text >"The only thing we have to fear is fear itself. 
                                -Franklin D. Roosevelt .</Card.Text>
                            <button className="btn btn-primary" onClick={routeHandle}>Read more</button>
                        </Card.Body>
                    </Card>

                </div>
                <div className="card_2-container">
                    <Card style={{ width: "17.5rem" }}>
                        <Card.Img variant='top' src='Images/A1.jpg'/>
                        <Card.Body>
                            <Card.Title>Wisdom Quotes</Card.Title>
                            <Card.Text>“Knowing yourself is the beginning of all wisdom.”
                                ― Aristotle</Card.Text>
                            <button className="btn btn-primary" onClick={routeHandle}>Read more</button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card_3-container">
                    <Card style={{ width: "17.5rem" }}>
                        <Card.Img variant='top' src='Images/Arthur.jpg' />
                        <Card.Body>
                            <Card.Title>Motivation Quotes</Card.Title>
                            <Card.Text>"Start where you are. Use what you have. Do what you can."
                                 — Arthur Ashe</Card.Text>
                            <button className="btn btn-primary" onClick={routeHandle}>Read more</button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card_4-container">
                    <Card style={{ width: "17.5rem" }}>
                        <Card.Img variant='top' src='Images/Stephen.jpg'/>
                        <Card.Body>
                            <Card.Title>Miscellaneous Quotes</Card.Title>
                            <Card.Text>“I am not a product of my circumstances. I am a product of my decisions.”
                                 —Stephen Covey</Card.Text>
                            <button className="btn btn-primary" onClick={routeHandle}>Read more</button>
                        </Card.Body>
                    </Card>
                </div>

            </div>


        </>
    );
}

export default Cards

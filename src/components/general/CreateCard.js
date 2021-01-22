import React, { Component } from 'react'
import "../../css/createCard.css"

const CreateCard = (props) => {
    return (
        <div className={`createCard ${props.playerColor}Player`}>
            <h1>Set Up Phase</h1>
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <label>Total Starting Credits:</label>
                <input type="text" name="corporateCredits" value={props.creditData.corporateCredits} onChange={(e) => props.handleCreditChange(e)}/>
                <label>How Many Cards Are You Buying?</label>
                <input type="number" name="cardsBought"  value={props.creditData.cardsBought} onChange={(e) => props.handleCreditChange(e)} />

                <label>Starting Credits:</label><span>{props.creditData.startingCredits}</span>
                <input type="submit" value="Start Game" />
            </form>
        </div>
    )
}

export default CreateCard

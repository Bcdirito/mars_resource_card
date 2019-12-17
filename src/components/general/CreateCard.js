import React, { Component } from 'react'

export default class CreateCard extends Component {
    state = {
        corporateCredits: 0,
        cardsBought: 0
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state
        })
    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <div>
                <h1>Set Up Phase</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Total Starting Credits:</label>
                    <input type="text" name="corporateCredits" value={this.state.corporateCredits} onChange={(e) => this.handleChange(e)}/>
                    <label>How Many Cards Are You Buying?</label>

                    <label>Starting Credits: {this.subtractCreditAmounts()}</label>
                </form>
            </div>
        )
    }
}

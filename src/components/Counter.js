import React from 'react'

const Counter = () => {
    return (
        <div>
            Clicked: 0 times <br />
            <button>+</button> {' '}
            <button>-</button> <br />
            <button>Increment if Odd</button> <br />
            <button>Increment if Async</button> <br />
        </div>
    )
}

export default Counter
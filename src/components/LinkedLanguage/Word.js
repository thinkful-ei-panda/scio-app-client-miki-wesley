import React from 'react';

function Word(props) {
    const {original, translation, correct_count, incorrect_count} = props
    return (
        <div className="word-group">
            <h3 className="word">{original}</h3>
            <p className="word">{translation}</p>
            <p className="word">Correct: {correct_count}</p>
            <p className="word">Incorrect: {incorrect_count}</p>
        </div>
    )
}

export default Word
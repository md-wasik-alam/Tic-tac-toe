
import { useEffect, useState } from 'react'
import SquareComponent from './SquareComponent'

const initValues = ["", "", "", "", "", "", "", "", ""]
const Square = () => {
    const [tttState, setTttState] = useState(initValues)
    const [isPlayer1Chance, setIsPlayer1Chance] = useState(false)

    const onBoxClickHandle = (index) => {
        let str = Array.from(tttState);
        str[index] = isPlayer1Chance ? "X" : "O";
        setTttState(str)
        setIsPlayer1Chance(!isPlayer1Chance)
    }

    useEffect(() => {
        let winner = checkGameWinner();
        if (winner) {
            alert(` testedm  ${winner} won the `)
        }
    }, [tttState])

    const checkGameWinner = () => {
        const winnerArrayList = [
            [0, 1, 2],
            [1, 4, 7],
            [0, 3, 6],
            [0, 4, 8],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [2, 4, 6]
        ]

        for (let x = 0; x < winnerArrayList.length; x++) {
            const [a, b, c] = winnerArrayList[x];
            if (tttState[a] && tttState[a] === tttState[b] && tttState[b] === tttState[c]) {
                return tttState[a];
            }
        }
        return null

    }
    return (<>
        <div className="App-header">
            <h1 className="heading">Tic-tac-toe</h1>

            <div className="row">
                <SquareComponent value={tttState[0]} handleClick={() => onBoxClickHandle(0)} className="border-bottom-right" />
                <SquareComponent value={tttState[1]} handleClick={() => onBoxClickHandle(1)} className="border-bottom-right" />
                <SquareComponent value={tttState[2]} handleClick={() => onBoxClickHandle(2)} className="border-bottom" />
            </div>
            <div className="row ">
                <SquareComponent value={tttState[3]} handleClick={() => onBoxClickHandle(3)} className="border-bottom-right" />
                <SquareComponent value={tttState[4]} handleClick={() => onBoxClickHandle(4)} className="border-bottom-right" />
                <SquareComponent value={tttState[5]} handleClick={() => onBoxClickHandle(5)} className="border-bottom" />

            </div>
            <div className="row">
                <SquareComponent value={tttState[6]} handleClick={() => onBoxClickHandle(6)} className="border-right" />
                <SquareComponent value={tttState[7]} handleClick={() => onBoxClickHandle(7)} className="border-right" />

                <SquareComponent value={tttState[8]} handleClick={() => onBoxClickHandle(8)} />
            </div>

            <div className="button mt-12 text-3xl bg-red-800 rounded-md p-1 hover:bg-red-900">
                <button className=''>End Game</button>
            </div>


        </div>
    </>)
}

export default Square

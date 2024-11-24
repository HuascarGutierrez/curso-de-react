import {useState} from 'react'
import confetti from 'canvas-confetti'
import Square from './Square'
import { turns, WINNER_COMBOS } from './components'

import './App.css'

function App() {

  const updateBoard = (index) => {
    if(board[index] === null && winner===null)
    {
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)

      const newTurn = turn === turns.X ? turns.O : turns.X
      setTurn(newTurn)

      //almacenar en el local storage los datos de la partida
      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn', JSON.stringify(newTurn))

      const newWinner = checkWinner(newBoard)
      if (newWinner || newWinner === false) {
        if(newWinner !== false) confetti()
        setWinner(newWinner)
        //console.log(`${newWinner} wins. WINNER WINNER CHICKEN DINNER`)
        //como los setters en react son asincornos, no impiden la ejecucion del resto del codigo mientras se cambia el valor de la variable 
      }
    }
  } 

  const checkWinner = (boardToCheck) => {
    const playCount = plays + 1
    setPlays(playCount)
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) return boardToCheck[a]
    }
    if (playCount === 9 ) return false
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    setPlays(0)
  }

const [board, setBoard] = useState(Array(9).fill(null))
const [turn, setTurn] = useState(turns.X)
const [winner, setWinner] = useState(null) //para este caso, null = no winner, false = draw
const [plays,setPlays] = useState(0)

  return (
    <>
    <main className='board'>

      <h1>TIC-TAC-TOE</h1>
      <button onClick={resetGame}>Reset game!</button>
      <section className='game'>
        {board.map((_,index)=>{
          return ( 
            <Square updateBoard={updateBoard} key = {index} index= {index}>
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>

      </section>

      <section>
        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false ?
                      'EMPATE':
                      'THIS GUY IS THE WINNER'
                  }
                </h2>

                <header>
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Start again</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
    </>
  )
}

export default App
import React from 'react'

 const QuotesBox = ({randomQuotes,randomColors,getRandomAll}) => {
 console.log(randomColors);
 const objStyle = {color:randomColors}
 const objBTStyle ={backgroundColor:randomColors}
 



  return (
    <div className='quotes' style={objStyle}>
      <h3 >{randomQuotes.quote}</h3>
      <p className='quotes_item'>{randomQuotes.author}</p>
      <div className='btn'>
      <button onClick={getRandomAll} className='quotes_btn' style={objBTStyle} >&gt;</button>
      </div>
    </div>
  )
}
export default QuotesBox
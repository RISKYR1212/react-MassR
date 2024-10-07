import React from 'react'

const Tombol = ({pesanTombol,warna}) => {
  return (
  <>
  <button className={`btn btn-${warna}`}>{pesanTombol}</button>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis illo doloremque amet natus, officia nostrum atque alias dolorum provident commodi suscipit, sapiente libero cum! Temporibus incidunt debitis sit harum?</p>
  <br/>
  </>
  )
}

export default Tombol
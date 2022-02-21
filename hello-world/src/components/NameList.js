import React from 'react'

function NameList() {
    const names = ["a","ab","abc","abcd","asdasdasd"]
    const nameList = names.map(name => <h2>{name}</h2>)
  return (
      <div>
    <div>{nameList}</div>
    {/* <button>click</button> */}
      </div>
  )
}

export default NameList

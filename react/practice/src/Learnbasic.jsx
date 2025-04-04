import React from 'react'
import { act } from 'react'

const Learnbasic = () => {
    const x = "dell"
    const price = 4500
    const arr = ["ross", 'rachel']
    const active = false

    const obj = { name: "ethan", age: 25 }
    return <>
        <div>Learnbasic</div>
        <h1>{x}</h1>
        <h1>sale price is {price}</h1>
        <h1>{arr}</h1>
        <h1>{active ? "Yes" : "No"}</h1>
        <h1>my name is {obj.name} and my age is {obj.age}</h1>

        {
            arr.map(item => <h1>{item}</h1>)
        }
    </>

}

export default Learnbasic
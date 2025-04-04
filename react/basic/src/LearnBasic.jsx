const LearnBasic = () => {
    // useState()
    // useEffect()
    const x = "dell"
    const price = 499
    const active = true
    const arr = ["ross", "kate", "john"]
    const obj = { name: "ethan", age: 25 }
    let count = 0
    const test = () => {
        console.log("test fn")
    }
    const inc = () => {
        count++
        console.log(count)
    }
    return <div>
        <h1>basic page</h1>
        <h1>{x}</h1>
        <h1>{price}</h1>
        <h1>{active ? "Yes" : "No"}</h1>
        <h1>{arr}</h1>
        <h1>{obj.name}</h1>
        <h1>{obj.age}</h1>
        <button onClick={test}>click me</button>
        <button onClick={() => console.log("again......")}>click</button>

        <h1>{count}</h1>
        <button onClick={inc}>increement</button>

    </div>
}
export default LearnBasic
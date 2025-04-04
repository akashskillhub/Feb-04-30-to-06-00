import React from 'react'

const LearnProps = () => {
    // prop drilling   context
    const subjects = ["web", "data science", "dev ops"]
    return <>
        <div>LearnProps</div>
        <Test kahihi={500} data={subjects}></Test>
    </>
}
export default LearnProps

const Test = (props) => {
    console.log(props)
    return <>
        <div>Test</div>
        <h1>{props.kahihi}</h1>
        <Demo brand="lenovo" sub={props.data}></Demo>
    </>
}

const Demo = ({ brand, sub }) => {
    return <>
        <div>Demo</div>
        <h1>{brand}</h1>
        {/* <h1>{sub}</h1> */}
        <ol>
            {sub.map(item => <li>{item}</li>)}
        </ol>
    </>
}
// useState
// useEffect
import MyHead from '../components/Myhead';
import Nav from '../components/Nav';
import React from 'react'

/*export async function getStaticsProps(ctx) {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}*/

const test = () => {
    return (
        <>
            <MyHead />
            <Nav statusTest={'text-warning'} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-primary my-5">Test</h1>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default test
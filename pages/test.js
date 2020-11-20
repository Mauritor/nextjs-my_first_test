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

const test = ({data}) => {
    //console.log(data);
    return (
        <>
            <MyHead />
            <Nav statusTest={'text-warning'} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-primary my-5">Test</h1>
                        {
                             data.map(user => (
                             <p key={user.id}>{user.username}</p>
                             ))
                         }
                    </div>
                </div>
            </div>
        </>
    )
}

test.getInitialProps = async (ctx) => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {data}
 }

export default test
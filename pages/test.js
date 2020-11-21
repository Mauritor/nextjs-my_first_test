import MyHead from '../components/Myhead';
import Nav from '../components/Nav';
import Layout from '../components/Layout'
import Link from 'next/link';



const test = ({ data }) => {
    console.log(data);
    return (
        <>
            <MyHead />
            <Nav statusTest={'text-primary'} />
            <Layout >
                <h1 className="text-primary my-5">Test</h1>
                {
                    data.map(item => (
                        <p key={item.id} >
                            {item.username}
                        </p>

                    ))
                }
            </Layout>
        </>

    )
}

test.getInitialProps = async (ctx) => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return { data }
}

export default test
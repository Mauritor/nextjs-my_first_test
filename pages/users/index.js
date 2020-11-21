import MyHead from '../../components/Myhead';
import Nav from '../../components/Nav';
import Layout from '../../components/Layout'
import Link from 'next/link';



const Users = ({ data }) => {
    console.log(data);
    return (
        <>
            <MyHead />
            <Nav statusUsers={'text-primary'} />
            <Layout >
                <h1 className="text-primary my-5">Users</h1>
                {
                    data.map(item => {
                        //console.log(item.id);
                        return (

                            <Link key={item.id} href={`/users/[id]`} as={`/users/${item.id}`}>
                                <a>
                                    <div className="card bg-dark mb-1">
                                        <div className="card-header text-center">
                                            {item.username}
                                        </div>
                                    </div>
                                </a>
                            </Link>

                        )
                    }


                    )
                }
                <style jsx>
                    {`
                    .card-header:hover{
                        background-color: lightgreen;
                    }
                    `}
                </style>
            </Layout>
        </>

    )
}

export default Users

export async function getServerSideProps() {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}
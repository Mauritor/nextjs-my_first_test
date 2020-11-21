import Myhead from '../../components/Myhead';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';

const user = ({ usuario }) => {
    console.log(usuario);

    return (
        <>
            <Myhead />
            <Nav statusUsers={'text-primary'}/>
            <Layout>
                <div className="card mt-5 bg-dark" key={usuario.id}>
                    <div className="card-header d-flex justify-content-around">
                        <h4>Nickname: <span className="text-primary">{usuario.username}</span></h4>
                        <p>id: <span className="text-success">{usuario.id}</span></p>
                    </div>
                    <div className="card-body">
                        <h4 className="text-center mb-4">Name: <span className="text-primary">{usuario.name}</span></h4>
                        <div className="d-flex justify-content-around">
                            <p>Phone: <span className="text-success">{usuario.phone}</span></p>
                            <a href={usuario.website}>Web: {usuario.website}</a>
                        </div>
                    </div>
                </div>
            </Layout>
            <style jsx>
                {`
            .card{
                border-radius: 8px;
            }
            `}
            </style>
        </>
    )
}

export default user

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`)
    const usuario = await res.json();

    return {
        props: {
            usuario
        }
    }
}
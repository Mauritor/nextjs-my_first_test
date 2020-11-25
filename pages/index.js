//import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import MyHead from '../components/Myhead';
import Nav from '../components/Nav'
import Form from '../components/Form'

export default function Home() {
  return (
    <>
      <MyHead />
      <Nav statusHome={'text-primary'} />
      <Layout>
        <h1 className="text-primary my-5">Home</h1>
        <p className="blockquote">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium fugit itaque assumenda, eaque blanditiis velit, ratione iste culpa quas ex et quasi. Ad, ipsum expedita explicabo eveniet modi delectus!</p>

       <Form />

        <style jsx>
          {`
          p{
            color: grey;
          }
          p:hover{
            color: white;
          }
            `
          }
        </style>
      </Layout>
    </>
  )
}

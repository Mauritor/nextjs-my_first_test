//import styles from '../styles/Home.module.css'
import MyHead from '../components/Myhead';
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <MyHead />
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-primary my-5">Home</h1>
          </div>
        </div>
      </div>
    </>
  )
}

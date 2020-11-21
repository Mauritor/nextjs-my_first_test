import { useRouter } from 'next/router';
import Myhead from '../../components/Myhead'

const user = () => { 
    const router = useRouter();
    return(
        <>
        <Myhead />
        <h3>User details: <span className="text-info">{router.query.user}</span> </h3>
        </>
    )
}

export default user
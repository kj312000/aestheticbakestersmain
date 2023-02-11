import React , {useState , useEffect} from 'react'
import Swipper from '../components/Swipper'
import useFirestore from '../hooks/useFirestore';
import Loader from '../components/Loader'
import './Pages.css'

const Cakes = () => {
  const { docs } = useFirestore('cakes');
  const [Loading, setLoading] = useState(true);
  const cakesArr = [];

  docs.forEach((e)=>{
    cakesArr.push(e.url)
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
      <h2 className='cakesheader'>Cakes</h2>
      {Loading?<Loader/>:<Swipper arrImg={cakesArr}/>}
    </div>
  )
}

export default Cakes
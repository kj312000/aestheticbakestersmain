import React , {useState , useEffect} from 'react'
import useFirestore from '../hooks/useFirestore';
import Loader from '../components/Loader'
import Swipper from '../components/Swipper'
import './Pages.css'

const Cupcakes = () => {
  const { docs } = useFirestore('cupcakes');
  const [Loading, setLoading] = useState(true);
  const cupcakesArr = [];

  docs.forEach((e)=>{
    cupcakesArr.push(e.url)
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
      <h2 className='cakesheader'>Cup Cakes</h2>
      {Loading?<Loader/>:<Swipper arrImg={cupcakesArr}/>}
    </div>
  )
}

export default Cupcakes
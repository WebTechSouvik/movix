import react,{useState} from "react"
import useFetch from "../../../hooks/useFetch.js"
import Swtchingtabs from "../../../components/swtchinhtabs/Swtchingtabs.jsx"
import Carosal from "../../../components/carosal/Carosal.jsx"
import "./toprated.css"

const Toprated = () => {

		const [end, setend] = useState("movie")
	const {data,loading}=useFetch(`/${end}/top_rated`)
	const tabChange=(type)=>{
		setend(type)
		console.log(data)
	}
	return (
		<div className="Toprated">
			<Swtchingtabs buttonType={["movie","tv"]} heading={"Toprated"} tabChange={tabChange}/>
			<Carosal data={data} loading={loading} end={end}/>
		</div>
	)
}

export default Toprated
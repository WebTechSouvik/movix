import { useState, useEffect } from "react";
import { getDataFromApi } from "../api/Api.js";

const useFetch = (url) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState();

	const api_data = async (url) => {
		const api_data = await getDataFromApi(url);
		setLoading(false);
		setData(api_data);
	};

	useEffect(() => {
		setLoading(true);
		setData(null);
		api_data(url);

		// getDataFromApi(url).then((res)=>{
		// 	setLoading(false)
		// 	setData(res)
		// }
		// 	).catch((err)=>{
		// 		console.log(err)
		// 	})
		// console.log(getDataFromApi)
	}, [url]);

	return { data, loading };
};
export default useFetch;

import { useCurrentUser } from "./useCurrentUser";
import { useUser } from "./useUser";
import { useResource } from "./useResource";
import { useDataSource } from "./useDataSource";
import axios from 'axios';


//function to create variations of asyncronous functions
const serverResource = (resourceUrl) => async() => {
	const response = await axios.get(resourceUrl);
	return response.data;
}

const localStorageResource = key => () => {
	return localStorage.getItem(key);
}

export const UserInfo = ({userId}) => {
	//const user = useCurrentUser();  //this makes the component less flexible
	//const user = useUser(userId);  //a bit more flexible
	//const user = useResource(`/users/${userId}`); //reusable and flexible. useResource is a good stopping point in reality (no need to do everything so generic like useDataSource hook)
	
	/*
	//before adding a function that creates variations of asyncronous functions
	const user = useDataSource(async () => {
		const response = await axios.get(`/users/${userId}`);
		return response.data;
	});
	*/

	//this is more simple and mor configurable
	const user = useDataSource(serverResource(`/users/${userId}`));

	const message = useDataSource(localStorageResource('message'));


	//also need to add a default value here, otherwise got type error
	const { name, age, hairColor, hobbies } = user || {};

	return user ? (
		<>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	) : <p>Loading...</p>;
}
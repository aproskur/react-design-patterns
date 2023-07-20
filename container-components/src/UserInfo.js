//needs to check if users exists , if not exisist - do smth else (e.g. loading), otherwise 
//there will be a type error, becuse user is null when first rendering


//This user loader component is very restricted in what is capable of dooing (loads just a single user)
export const UserInfo = ({ user }) => {

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
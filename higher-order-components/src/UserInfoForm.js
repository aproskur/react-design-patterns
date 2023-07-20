import { withEditableUser } from "./withEditableUser";
import { withEditableResource } from "./withEditableResource";


//The user info form component allows users to edit each piece of data in the higher-order component.
// It also has an "on save user" and "on reset user" button to save or reset changes.

export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
	const { name, age, hairColor } = user || {};

	return user ? (
		<>
		<label>
			Name:
			<input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
		</label>
		<label>
			Age:
			<input type="number" value={age} onChange={e => onChangeUser({ age: Number(e.target.value) })} />
		</label>
		<label>
			Hair Color:
			<input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
		</label>
		<button onClick={onResetUser}>Reset</button>
		<button onClick={onSaveUser}>Save Changes</button>
		</>
	) : <p>Loading...</p>;
}, '/users/123', 'user');
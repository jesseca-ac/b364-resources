import { Navigate } from 'react-router-dom'
import UserContext from '../UserContext'
import { useContext, useEffect } from 'react';

export default function Logout() {

	const { unsetUser, setUser } = useContext(UserContext);

	unsetUser();

	useEffect(() => {
		// Set the user state back to it's original value
		setUser({
			id: null,
			isAdmin: null
		})
	}, [])

	return (
		<Navigate to='/login'/>
	)
}
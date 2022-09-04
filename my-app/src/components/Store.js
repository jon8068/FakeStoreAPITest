import React from 'react';
import AddData from './AddData'

export default function Store(){
  const [usersData, setUserData] = React.useState([]);
  const [isAddButtonClicked, setAddButton] = React.useState(false);

  React.useEffect(() => {
    getAllUsers()
  }, []);

  async function getAllUsers(){

    const response = await fetch('https://fakestoreapi.com/users')
    const jsonData = await response.json();    
    
    setUserData(jsonData);
  }

    const styles = {
        backgroundColor: '#d4c2fc',
        maxWidth: 400,
    };

    const deleteData = (id) => {
        setUserData(prevUserData => {
            const newArray = prevUserData.filter(prevUser => prevUser.id !== id)
            return newArray;
        });
    }

    const addNewUser = () => {
        setAddButton(true);
    }


    const newData = () => usersData.map(user => {
        console.log(user);
        return (
            <div style={styles} key={user.id} id={user.id} class="user-data">
                <h1>{user.name.firstname} {user.name.lastname}</h1>
                <h4>Phone: {user.phone}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Address: {user.address.number} {user.address.street}, {user.address.city}</h4>
                <button>Edit Data</button>
                <button onClick={() => deleteData(user.id)}>Delete Data</button>
            </div>
        )
    })

    return(
        <div>
            <h1>Fake Store API Users</h1>
            <button onClick={addNewUser}>Add Data</button>
            {isAddButtonClicked && <AddData />}
            {newData()}
        </div>
    )
}
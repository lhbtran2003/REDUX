import React from 'react'
import { useSelector } from 'react-redux';
import { StoreInterface } from '../store';

export const ArrayUser = () => {

     const arrayUser = useSelector(
       (store: StoreInterface) => store.arrayUserStore
     );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arrayUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.sex ? "nam" : "nữ"}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

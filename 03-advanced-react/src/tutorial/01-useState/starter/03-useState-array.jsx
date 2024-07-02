import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log(id);
    let newPeople = [ ...people ];
    newPeople = newPeople.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>Remove {name}</button>
          </div>
        )
      })}
      <p />
      <button className="btn" onClick={() => setPeople([])}>Clear items</button>
    </>
  )
};

export default UseStateArray;

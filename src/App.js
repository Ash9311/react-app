
import './App.css';
import { useState } from 'react';

const user = {
  name: "Ashutosh",
  imageUrl: 'https://media.licdn.com/dms/image/D5603AQG1rUwy22YWhQ/profile-displayphoto-shrink_800_800/0/1685295925814?e=1694649600&v=beta&t=i5MJngGZwGf-X2LNx6T_5iti_s2TgmyjMarqbEH-Gb8',
  imageSize: 90
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


const listItems = products.map(product =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
);


function MyButton({ count, onClick }) {

  return (
    <button onClick={onClick}>Clicked {count} times</button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className='main-container'>
      <h1>{user.name}</h1>
      <img className='avatar' src={user.imageUrl} alt={'photo of ' + user.name} style={{ width: user.imageSize, height: user.imageSize }}></img>
      <ul>{listItems}</ul>
      <h1>counter that updates</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

    </div>

  );
}

export default App;

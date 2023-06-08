import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import useJoke from './hooks/useJoke';
import Button from './components/Button';
import Input from './components/Input';
import Todo from './components/Todo';
import { useRef, useState } from 'react';

export default function App() {
  const nameRef = useRef();
  const [name, setName] = useState('Alex');
  const joke = useJoke(name);

  const generateJoke = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
  };
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Joke</Card.Title>
        <Card.Body>
          <p className={'mb-4'}>{joke.value}</p>
          <Input ref={nameRef} />
        </Card.Body>
        <Card.Footer>
          <Button onClick={generateJoke}>Generate a joke</Button>
        </Card.Footer>
      </Card>
      <Todo />
    </PlaceContentCenter>
  );
}

import { useEffect } from 'react';
import cuteSloth from '../cuteSloth.jpg';

export default function Surprise() {
  const unmount = () => alert('Now I must go');
  useEffect(() => unmount);

  return (
    <div style={{ margin: "20px" }}>
      <img style={{ height: "200px", width: "300px" }} src={cuteSloth} alt="Sloth" />
    </div>
  );
}

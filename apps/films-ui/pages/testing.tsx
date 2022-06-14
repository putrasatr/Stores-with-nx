import 'alpinejs';
import { useEffect } from 'react';

const Testing = () => {
  useEffect(() => {
    if (window)
      window.counter = function () {
        return {
          count: 0,
          inc() {
            this.count += 1;
          },
        };
      };
  }, []);
  const alpineTemplate = `<div x-data="counter()">
  <button @click="inc()">Increment</button>
  <p x-text="count"></p>
</div>`;
  return <div dangerouslySetInnerHTML={{ __html: alpineTemplate }} />;
};
declare global {
  interface CounterProps {
    count: number;
    inc: () => void;
  }
  interface Window {
    counter: () => CounterProps;
  }
}
export default Testing;

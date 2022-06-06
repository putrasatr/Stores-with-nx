import './app.css';
import LoginSvelte from './Login.svelte';

const app = new LoginSvelte({
  target: document.body,
  props: {
    name: 'Disana',
  },
});

export default app;

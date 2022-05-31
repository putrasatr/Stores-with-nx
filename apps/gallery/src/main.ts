import App from './App.svelte';
import LoginSvelte from './Login.svelte';

const app = new LoginSvelte({
  target: document.body,
  props: {
    name: 'Disana',
  },
});

export default app;

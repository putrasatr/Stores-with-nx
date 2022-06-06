<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import './app.css';
  export let name: string;
  export const onSubmit = () => {
    console.log('Submit');
  };
  export const handleUsername = (
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  };
</script>

<Tailwind />
<main>
  <h1 class="text-red-100">Create Accounts {name}!</h1>
  <form action="" on:submit|preventDefault={onSubmit}>
    <input
      placeholder="Masukan Username"
      name="username"
      on:change={handleUsername}
    />
    <input placeholder="Masukan Password" type="password" autocomplete="off" />
    <button type="submit">Submit</button>
  </form>
</main>

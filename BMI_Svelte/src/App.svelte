<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  let name = string;
  let weight = number;
  let height = number;
  let resp = string;

  const calcularBMI = () => {
    let bmi = (Number(weight)/Number(height * height))
    resp = `BMI: ${bmi.toFixed(1)}`;
  }
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <header>BMI Calculator</header>
  
    <div class="card">
      <div class="form">
        <label for="name">Name</label>
        <input type="text" bind:value={name}>
      </div>
      <div>
        <label for="weight">Weight</label>
        <input type="text" bind:value={weight}>
      </div>
      <div>
        <label for="height">Height</label>
        <input type="text" bind:value={height}>
      </div>
    </div>
    <button on:click={calcularBMI}>Calcular</button>
    <div id="result"></div>
  </main>

  <style>
    .card {
      display:flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(218, 153, 218)
    }

    .form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: rgb(80, 128, 128);
      border-radius: 40px;
    }

    .form header {
      font-family: 'Times New Roman', Times, serif;
      font-size: 3rem;
      margin: 1rem;
    }

    .form input {
      align-items: center;
      max-width: 40rem;
      height: 4rem;
      font-size: 2rem;
      font-family: 'Times New Roman', Times, serif;
      background-color: rgb(49, 46, 46);
      color: gray;
    }

    .form button {
      width: 30rem;
      height: 4rem;
      font-size: 2rem;
      margin: 2rem;
      font-family: 'Times New Roman', Times, serif;
      background-color:  rgb(49, 46, 46);
      color: gray;
    }
  </style>
  
  

  
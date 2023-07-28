<template>
    <div class="container">
      <h1>FRASES PROVERBIALES</h1>
      <div class="search-container">
    <input v-model="busqueda" type="text" placeholder="Buscar informacion" @input="realizarBusqueda">
  </div>
      <div class="word-container">
        <ul class="word-list">
          <li v-for="frase in frases" :key="frase.frase" class="word-item">
            <div class="word-box">
              <p class="word-text">{{ frase.frase }}</p>
              <div class="ver-mas-container">
                <button @click="verMas(frase)" class="ver-mas-btn">{{ mostrarSignificado === frase.significado ? 'Ver menos' : 'Ver más' }}</button>
              </div>
              <div v-if="mostrarSignificado === frase.significado" class="significado">
                <p class="significado-text">Significado: {{ frase.significado }}</p>
                <img v-if="frase.imagen" :src="getImageUrl(frase.imagen, frase.formato)" :alt="frase.frase" class="imagen">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-top: 4%;
  
  }
  
  .word-container {
    width: 80%;
    max-height: 80vh;
    overflow-y: scroll;
    border: 1px solid #ccc;
    padding: 20px;
  }
  
  .word-list {
    list-style-type: none;
    padding: 0;
  }
  
  .word-item {
    margin-bottom: 20px;
  }
  
  .word-box {
    background-color: #f0f0f0;
    padding: 10px;
    position: relative;
    border: 1px solid rgb(151, 98, 0);
    border-radius: 20px;
  }
  
  .word-text {
    font-weight: bold;
  }
  
  .ver-mas-container {
    position: absolute;
    top: 1%;
    right: 10px;
    transform: translateY(-50%);
  }
  
  .ver-mas-btn {
    background-color:rgb(151, 98, 0);
    color: rgb(255, 255, 255);
    font-weight: bold;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-container input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 400px;
  }
  
  /* Estilos para dispositivos móviles */
  @media (max-width: 600px) {
    .ver-mas-btn {
      padding: 3px 8px;
      font-size: 12px;
    }
    .container {
    margin-top: 12%;
  }
  }
  
  .significado {
    margin-top: 10px;
  }
  
  .significado-text {
    font-style: italic;
  }

  .imagen {
  width: 400px; 
  height: auto; 
}
  </style>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        frases: [],
        mostrarSignificado: '',
        busqueda: '',
        frasesOriginal: ''
      };
    },
    name: 'frasesC',
    mounted() {
      this.obtenerFrases();
    },
    methods: {
        obtenerFrases() {
        axios.get('https://cuentaapi.pythonanywhere.com/apie/frases')
          .then(response => {
            this.frases = response.data;
            this.frasesOriginal= [...response.data];
          })
          .catch(error => { 
            console.error(error);
          });
      },
      verMas(frase) {
    if (this.mostrarSignificado === frase.significado) {
      this.mostrarSignificado = '';
    } else {
      this.mostrarSignificado = frase.significado;
    }
  },
      getImageUrl(imagenBase64, formato) {
        return `data:image/${formato};base64,${imagenBase64}`;
      },
      realizarBusqueda() {
        if (this.busqueda) {
        this.frases = this.frases.filter(frase => frase.frase.toLowerCase().includes(this.busqueda.toLowerCase()));
      } else {
        this.frases = [...this.frasesOriginal];
    } 
  }, 
      resetearBusqueda() {
        this.busqueda= '',
        this.realizarBusqueda()
  
      },
    }
  };
  </script>
  
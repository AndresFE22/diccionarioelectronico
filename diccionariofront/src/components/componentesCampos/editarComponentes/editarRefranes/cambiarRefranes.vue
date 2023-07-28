
<template>
    <div class="campos">
      <h1>EDITAR REFRANES</h1>
      <div class="form-container">
        <v-text-field v-model="nuevoRefran" label="Digite su refran" class="text"></v-text-field>
        <v-text-field v-model="nuevoSignificado" label="Digite su significado" class="text"></v-text-field>
        <v-btn @click="editarRefran">Editar información</v-btn>
        <br>
        <router-link to="/Campos/editar-refranes"><v-btn>Regresar</v-btn></router-link>
        <br>
          <br>
          <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>  
    </div>
    </div>
  </template>
  
  <style scoped>

.mensaje {
    background-color: rgb(13, 126, 255);
    color: white;
    padding: 10px;
    border-radius: 20px;

    }
  .campos {
    margin-top: 15px;
  }
  
  .form-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-container .text {
    width: 50%;
  }
  
  @media (max-width: 600px) {
    .form-container .text {
      width: 70%;
    }
  }
  </style>
      
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nuevoRefran: '',
        nuevoSignificado: '',
        mensaje: ""

      };
    },
    
    methods: {
        editarRefran() {
        const id = this.$route.params.id;
  
        const datos = {
          oracion: this.nuevoRefran,
          significado: this.nuevoSignificado
        };
  
        axios.put(`https://cuentaapi.pythonanywhere.com/apie/refranes/${id}`, datos)
          .then(response => {
            console.log(response.data);
            this.mensaje = response.data.message;
          setTimeout(() => {
            this.mensaje = "";
          }, 3000
         )
            this.nuevoRefran = '';
            this.nuevoSignificado = '';
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  
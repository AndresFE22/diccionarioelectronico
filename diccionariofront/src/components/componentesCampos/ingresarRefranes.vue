<template>
    <div class="campos">
      <h1>Ingresar refranes</h1>
        <div class="form-container">
          <v-text-field v-model="refran" :rules="[[v => !!v || 'Este campo es requerido']]" :error-messages="getErrorMessages(refran)" label="Digite su refran" class="text"></v-text-field>
          <v-text-field v-model="significado" :rules="[[v => !!v || 'Este campo es requerido']]" :error-messages="getErrorMessages(significado)" label="Digite su significado" class="text"></v-text-field>
          <v-file-input v-model="imagen" :rules="[[v => !!v || 'Este campo es requerido']]" :error-messages="getErrorMessages(imagen)" label="Agregue una imagen" accept="image/*"></v-file-input>
          <div class="buttons">
            <v-btn color="green" dark @click="GuardarDatos" class="b1">Guardar</v-btn>          
          <v-btn color="primary" @click="EditarRefranes" class="b2" >Editar</v-btn>
          </div>
          <br>
            <br>
          <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
          
        </div>
    </div>
  </template>
  <style scoped>
  
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

  
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .buttons .b1 {
    margin-right: 3%;
  }

  .buttons .b2 {
    margin-left: 3%;
  }
  
  .mensaje {
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 20px;

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
        refran: '',
        significado: '',
        imagen: null,
        mensaje: "",
      };
    },
    name: 'refraO',
    methods: {

      GuardarDatos() {
        const formData = new FormData();
        formData.append('refran', this.refran);
        formData.append('significado', this.significado);
        formData.append('imagen', this.imagen);
        
        axios.post('https://cuentaapi.pythonanywhere.com/apie/guardarrefran', formData)
        .then(response => {
            console.log(response.data);
            this.mensaje = response.data.message;
            setTimeout(() => {
                this.mensaje = "";
            }, 3000)
            this.refran = '';
            this.significado = '';
            this.imagen = null;
        })
        .catch(error => {
            console.error(error)
        })
    },

    EditarRefranes() {
      this.$router.push('/Campos/editar-refranes')
    },

    getErrorMessages(value) {
      return !value ? ['Este campo es requerido'] : [];
    }
  }
  };
    
    </script>
    
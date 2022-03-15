<template>
<div>
  <h1>{{ Titulo }}</h1>

  <ul>
    <li v-for="foto of fotos">
      <img :src="foto.url" :alt="foto.titulo">
      </li>
  </ul>
</div>
</template>
<script>
export default {

     data(){
     
      return{
        Titulo: "Alurapic",

        fotos: [
          {
            url: 'https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/11/Design-sem-nome-22.png',
            titulo: 'cachorro cururu'
          },
          {
            url: 'https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/11/Design-sem-nome-22.png',
            titulo: 'cururu cachorro'
          }
        ]
     }
  }
}
</script>
 
<style>

</style>

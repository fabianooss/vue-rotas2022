<template>
  <div>
    <h1>Marcas</h1>
    <table>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th></th>
        </tr>
        <tr v-for="m in marcas" :key="m.id">
            <td>{{m.id}}</td>
            <td>{{m.nome}}</td>
            <td><a href="javascript:void(0)" @click="editar(m)">Editar</a></td>
        </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            marcas: []
        }
    },
    mounted() {
        axios
            .get('https://carros-app-example.herokuapp.com/marca')
            .then(resp => {
                this.marcas = resp.data
                console.log('1')
            })
        console.log('2')    
    },
    methods: {
        editar(marca) {
            this.$router.push(`/marca-form/${marca.id}`)
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
    <h1>Marcas</h1>
    <button @click="novo()">Novo</button>
    <table>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th></th>
            <th></th>
        </tr>
        <tr v-for="m in marcas" :key="m.id">
            <td>{{m.id}}</td>
            <td>{{m.nome}}</td>
            <td><a href="javascript:void(0)" @click="editar(m)">Editar</a></td>
            <td><a href="javascript:void(0)" @click="excluir(m)">Excluir</a></td>
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
        this.load()
        
    },
    methods: {
        editar(marca) {
            this.$router.push(`/marca-form/${marca.id}`)
        },
        novo() {
            this.$router.push('/marca-form/')
        },
        excluir(marca) {
            const id = marca.id
            axios
                .delete(`https://carros-app-example.herokuapp.com/marca/${id}`)
                .then(this.load())
                .catch(error => alert(error))
        },
        load() {
            axios
            .get('https://carros-app-example.herokuapp.com/marca')
            .then(resp => {
                this.marcas = resp.data
            })
        }
    }
}
</script>

<style>

</style>
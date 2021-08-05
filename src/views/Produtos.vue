<template>
  <div>
    <v-row>
      <v-col>
        <h1>Produtos</h1>
        <p>Aqui você pode adicionar, editar ou consultar seus produtos</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile> Filtros </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="produtos"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Produto",
          align: "start",
          sortable: false,
          value: "nome",
        },
        { text: "Descrição", value: "descricao" },
        { text: "Valor", value: "valor" },
        { text: "Categoria", value: "categoria" },
        { text: "Qtd Disponivel", value: "qtdDisponivel" },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      
      produtos: [
        {
          nome: "Hot-Dog Simplão",
          descricao: "Pão, Hamburguer, Queijo, Batata Palha",
          valor: 15.95,
          categoria: "Lanche",
          qtdDisponivel: 4,
        },
      ],

    
    };
  },
};
</script>

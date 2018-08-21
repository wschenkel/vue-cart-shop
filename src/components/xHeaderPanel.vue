<template>
  <div>
    <div class="container content-header">
      <div class="columns">
        <div class="column">
          <h1 class="title title-panel">{{ titlePanel }}</h1>
        </div>
        <div class="column">
          <form id="formFilterProducts" name="formFilterProducts">
            <div class="select">
              <select @change="filterProducts(selectedCategory)" v-model="selectedCategory" name="sel-categories">
                <option value="1">Mais populares</option>
                <option value="2">Preço</option>
                <option value="3">Ordem alfabética</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xHeaderPanel',
  props: {
    titlePanel: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedCategory: 1
    }
  },
  methods: {
    filterProducts (idCategory) {
      this.$emit('filteredProducts', idCategory);
    }
  }
}
</script>

<style scoped>

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #423B3B;
}

.content-header {
  clear: both;
  display: table;
  width: 100%;
  margin-bottom: 45px;
}

.title-panel {
  font-size: 46px;
  color:#333;
  margin: 0;
  float: left;
}

form {
  float: right;
  margin-top: 12px;
  width: 270px;
}

form .select {
  width: 100%;
  height: 40px;
}

.select select {
  width: 100%;
  height: 100%;
}
</style>

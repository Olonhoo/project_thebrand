Vue.component('ProductGridComp', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },

    template: `
        <section class="product-grid">
            <div class="fetured_items">
                <p class="header_items">Fetured Items</p>
                <p class="pg_items">Shop for items based on what we featured in this week</p>
            </div>
            <div class="content">
                <product-single-comp v-for="product of filtered" :key="product.id_product" :product="product"></product-single-comp>
            </div>
            <div class="view_catalog">
                <a href="catalog.html" class="browse_catalog">Browse All Product</a>
            </div>
        </section>
               `
});
Vue.component('ProductSingleComp', {
    props: ['product'],
    template: `
    <div class="article">
    <div class="article_overlay">
        <button type="button" class="article_overlay_add" @click="$root.$refs.cart.addProduct(product)">
            <img class="article_overlay_add_click" src="img/cart_add.svg" alt="add">
            <span class="article_overlay_add_click">Add to Cart</span>
        </button>
    </div>
    <img :src="product.imgProduct" alt="">
    <p class="name_article">{{ product.product_name }}</p>
    <p class="pg_article">{{product.description}}</p>
    <p class="price_article">{{product.price}}</p>
</div>
    `
});
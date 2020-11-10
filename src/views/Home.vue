<template lang="pug">
  #home
    b-row
      b-col(cols="12" md="6" lg="3" v-for="(item, index) in items" :key="index")
        b-card(:title="item.name" :img-src="item.img" :sub-title="'$'+item.price" img-top)
          b-button(variant="primary" @click="addCart(item)")
            font-awesome-icon(:icon="['fas', 'shopping-cart']")
            | &nbsp;加入購物車
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          img: 'https://c.ecimg.tw/items/DYAJCHA900A54SY/000002_1604373347.png',
          name: 'Apple原廠AirPods',
          price: '4090'
        },
        {
          img: 'https://b.ecimg.tw/items/DHAFKJA900ANC79/000002_1596715202.jpg',
          name: 'ASUS VivoBook X413FA-0051K10210U 酷玩黑 (i5-10210U/8G/512G PCIe/W10/FHD/14)',
          price: '20900'
        },
        {
          img: 'https://f.ecimg.tw/items/DYAN70A900AUPA5/000002_1599102543.jpg',
          name: '小米手環5',
          price: '845'
        },
        {
          img: 'https://c.ecimg.tw/items/DCAI2UA900ADBTL/000002_1595317202.jpg',
          name: 'EDIFIER C3X',
          price: '3999'
        }
      ]
    }
  },
  methods: {
    addCart (item) {
      this.$store.commit('addCart', item)
    }
  }
}
</script>

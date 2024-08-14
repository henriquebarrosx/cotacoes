<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { pids } from './pids';
import { Noticia } from './entities/noticia';
import { Observable } from './entities/observable';
import Notice from './components/Notice/index.vue';
import { wssForexProsService } from './service/forex-pros-service';
import { ForexProsConnectionState } from './service/forex-pros-service/types';

const news = ref<Noticia[]>([]);

onMounted(() => {
  wssForexProsService.register(
    new Observable(ForexProsConnectionState.ESTABLISHED, () => {
      pids.forEach((pid) => {
        wssForexProsService.subscribe(pid, (cota) => {
          console.log({ cota })
        })
      })
    })
  );
});

</script>

<template>

  <section class="container">
    <ul class="noticias-container">
      <h1>Notícias do dia 🔥</h1>

      <li v-for="notice in news" :class="{ 'is-read': !notice.isRead }">
        <Notice :notice="notice" />
      </li>
    </ul>
  </section>

</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;

  ul {
    list-style: none;

    h1 {
      padding: 0 40px;
    }
  }
}

.noticias-container {
  width: 50vw;

  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 4px;
  padding: 20px 0;

  color: #FFFFFF;
  background-color: #272c34;

  li {
    gap: 16px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-bottom: 1px solid #434953;

    .is-read {
      background-color: #434953;
    }
  }

  li.is-read {
    background-color: #434953;
  }
}
</style>
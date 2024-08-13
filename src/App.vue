<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { pids } from './pids';
import Notice from './components/Notice/index.vue'

function connectionFactory() {
  var options = {
    protocols_whitelist: ['websocket', 'xdr-streaming', 'xhr-streaming', 'iframe-eventsource', 'xdr-polling', 'xhr-polling'],
    debug: true,
    jsessionid: false,
    server_heartbeat_interval: 4000,
    heartbeatTimeout: 2000
  };

  const stream = 'https://streaming.forexpros.com'
  const sock = new SockJS(stream + '/echo', null, options);

  sock.onopen = () => {
    var TimeZoneID = 12;

    for (const pid of pids) {
      sock.send(JSON.stringify({
        _event: "subscribe",
        tzID: TimeZoneID,
        message: pid
      }));
    }
  };

  sock.onmessage = function (event) {
    try {
      const content = JSON.parse(event.data);
      const serializedMsg = content.message.split('::');
      const serializedObj = JSON.parse(serializedMsg[1]);
      console.log({ serializedObj });
    }

    catch (err) {
      console.error('Houve um problema ao serializar a mensagem: ' + err.message + event.data);
      sock.close();
    }
  };

  sock.onclose = function () {
    console.log('Closing websocket...');
  }
}

const news = ref([
  {
    title: 'Lorem Ipsum',
    org: 'Bloomberg',
    createdAt: '2024-08-12T23:00:10',
    lide: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    isRead: false,
    score: 5
  },
  {
    title: 'Lorem Ipsum',
    org: 'BDM',
    createdAt: '2024-08-12T23:00:10',
    lide: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    isRead: true,
    score: 3
  },
  {
    title: 'Lorem Ipsum',
    org: 'Financial Juice',
    createdAt: '2024-08-12T23:00:10',
    lide: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    isRead: true,
    score: 1
  },
  {
    title: 'Lorem Ipsum',
    org: 'BDM',
    createdAt: '2024-08-12T23:00:10',
    lide: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    isRead: true,
    score: 3
  },
  {
    title: 'Lorem Ipsum',
    org: 'BDM',
    createdAt: '2024-08-12T23:00:10',
    lide: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    isRead: true,
    score: 3
  },
  {
    title: 'Lorem Ipsum',
    org: 'BDM',
    createdAt: '2024-08-12T23:00:10',
    lide: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    isRead: true,
    score: 1
  },
]);

onMounted(() => {
  connectionFactory();
})

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
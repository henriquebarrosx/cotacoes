<script setup lang="ts">
import { localDate } from '../../adapter/local-date'
import { LocalDateFormat } from '../../adapter/local-date/gateway.ts'

const props = defineProps(['notice'])

function getStarsByScore(score: number): string {
  return new Array(score).fill('⭐').join('');
}

function getFormattedDateTime(datetime: string): string {
  return localDate.format(datetime, LocalDateFormat.DATETIME)
}

</script>

<template>
  <div class="titulo">
    <section>
      <h3>{{ props.notice.title }}</h3>
      <small>{{ props.notice.org }}</small>
    </section>

    <span>{{ getStarsByScore(props.notice.score) }}</span>
  </div>

  <span>{{ props.notice.lide }}</span>

  <div class="acoes">
    <small>{{ getFormattedDateTime(props.notice.createdAt) }}</small>

    <div>
      <button v-if="!props.notice.isRead" type="button" title="Marcar como lida">
        Marcar como lida
      </button>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  display: flex;
  justify-content: space-between;

  section {
    height: 70px;
    display: flex;
    flex-direction: column;

    h3 {
      height: 10px;
    }

    small {
      color: #b0b0b0;
    }
  }
}

.acoes {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 14px;
    color: #FFF;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #a72bf9;

    &:hover {
      transition: ease-in-out 200ms;
      opacity: 0.8;
    }
  }
}
</style>
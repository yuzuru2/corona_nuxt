<style scoped>
main {
  width: 300px;
  margin: 0 auto;
}
</style>

<template>
  <div>
    <h1 class="text-center">東京２３区 コロナ対策給付金支給チェッカー</h1>
    <br /><br />
    <main>
      <div class="form-group">
        <label>あなたの家庭の世帯主は誰ですか？</label>
        <div className="col-xs-3">
          <select class="form-control" v-model="household">
            <option value="0">自分</option>
            <option value="1">妻</option>
            <option value="2">夫</option>
            <option value="3">その他</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label
          >{{ your }}のコロナ感染拡大前の月収を入力してください。<br />
          ※2020年1月以前</label
        >
        <input
          type="number"
          class="form-control"
          v-model="money1"
          placeholder=""
        />
      </div>

      <div class="form-group">
        <label
          >{{ your }}のコロナ感染拡大前の月収を入力してください。<br />
          ※2020年2月以降で最も低い月収です</label
        >
        <input
          type="number"
          class="form-control"
          v-model="money2"
          placeholder=""
        />
      </div>

      <div class="form-group">
        <label>世帯（家族）の人数を入力してください。</label>
        <div className="col-xs-3">
          <select class="form-control" v-model="family">
            <option value="0">単身</option>
            <option value="1">扶養1人</option>
            <option value="2">扶養2人</option>
            <option value="3">扶養3人</option>
          </select>
        </div>
      </div>

      <button type="button" class="btn btn-primary" @click="check">
        チェック
      </button>

      <br /><br />
      <div>
        ※このチェッカーは簡易版です。<br />正確な判定は政府からの詳細をお待ち下さい。<br />
        ※住民税非課税の算定基準は東京２３区の数字を使っています。
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { HomeStore } from '~/store';
import { submitCoronaForm } from '~/utils/gurujowa2';

export default {
  computed: {
    your: {
      get: () => {
        const _kind = ['あなた', '妻', '夫', '世帯主'];
        return _kind[Number(HomeStore.household)];
      },
      set: () => {},
    },
    household: {
      get: () => {
        return HomeStore.household;
      },

      set: (value: string) => {
        HomeStore.set_household(value);
      },
    },
    family: {
      get: () => {
        return HomeStore.family;
      },
      set: (value: string) => {
        HomeStore.set_family(value);
      },
    },
    money1: {
      get: () => {
        return HomeStore.money1;
      },

      set: (value: number) => {
        HomeStore.set_money1(value);
      },
    },
    money2: {
      get: () => {
        return HomeStore.money2;
      },

      set: (value: number) => {
        HomeStore.set_money2(value);
      },
    },
  },

  methods: {
    check() {
      submitCoronaForm(HomeStore.money1, HomeStore.money2, HomeStore.family);
    },
  },
};
</script>

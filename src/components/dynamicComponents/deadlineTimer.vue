<template>
  <q-item class="q-pa-none">
    <q-item-section avatar>
      <q-icon name="timer" color="grey-8"></q-icon>
    </q-item-section>
    <q-item-section>
      {{ day > 1 ? `${day} days` : day > 0 ? `1 day` : null }}
      {{ hour > 1 ? `${hour} hours` : hour > 0 ? `1 hour` : null }}
      {{ minute > 1 ? `${minute} minutes` : minute > 0 ? `1 minute` : null }}
      {{
        second > 1 ? `${second} seconds` : second > 0 ? `1 second` : `0 second`
      }}
    </q-item-section>
  </q-item>
</template>

<script>
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
export default {
  props: { timestamp: Number },
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  methods: {
    timeSet() {
      const timeLeft = this.timestamp - new Date().getTime();
      this.day = Math.floor(timeLeft / day);
      this.hour = Math.floor((timeLeft % day) / hour);
      this.minute = Math.floor((timeLeft % hour) / minute);
      this.second = Math.floor((timeLeft % minute) / second);
    },
    countDownTimer() {
      if (this.day + this.hour + this.minute + this.second == 0) {
      } else {
        this.timeSet();
        setTimeout(() => {
          this.countDownTimer();
        }, 1000);
      }
    },
  },
  created() {
    this.timeSet();
    this.countDownTimer();
  },
};
</script>

<style></style>

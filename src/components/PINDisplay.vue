<template>
  <table style="border:2px solid #000000">
    <tbody>
      <tr>
        <td class="pin scancardium">
          {{ pin }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PINDisplay",

  props: {
    pin: {
      type: String
    }
  }
}
</script>

<style scoped>
.pin {
  color:#000000!important;
  font-size:18px;
  line-height:19px;
  margin-top:0;
  margin-left:0;
  margin-right:0;
  margin-bottom:0!important;
  font-weight:normal;
  letter-spacing:2px;
  padding:12px 20px;
  max-width:400px;
}
</style>

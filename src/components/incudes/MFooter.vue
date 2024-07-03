<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 mFootter firstCard">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info"
          >About <i class="fa fa-angle-up"></i
        ></b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ul class="list-unstyled f_list">
            <li>
              <router-link to="/idlc-at-a-glance">About IDLC</router-link>
            </li>

          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mFootter">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info"
          >Quick Links <i class="fa fa-angle-up"></i
        ></b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ul class="list-unstyled f_list">

            <li><router-link to="/deposit-products">Deposit Products</router-link></li>

            <li>
              <router-link to="/financing-products/consumer">Financing Products (Consumer)</router-link>
            </li>
            <li>
              <router-link to="/financing-products/business">Financing Products (Business)</router-link>
            </li>
            <li><router-link to="/shariah-supervisory-committee">Shariah Supervisory Committee</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
            <li><router-link to="/content-repository">Content Repository</router-link></li>
            <li>
              <router-link to="/news-and-events">News & Events</router-link>
            </li>
            <li>
              <router-link to="/shariah-supervisory-committee">Shariah Supervisory Committee</router-link>
            </li>

          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info"
          >Location Map <i class="fa fa-angle-up"></i
        ></b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div
            id="map"
            class=""
            style="position: relative; overflow: hidden; border: 1px solid #bebbbb; border-radius: 7px;"
          >
            <a
              href="https://www.google.com/maps/place/IDLC+Head+Office/@23.78232,90.41637,12z/data=!4m5!3m4!1s0x0:0x249d3e7f09dd6e20!8m2!3d23.7823198!4d90.4163699?hl=en"
            >
              <img src="~@/assets/img/map.jpg" alt="" width="100%" />
            </a>
          </div>
          <ul class="list-unstyled social  address_text">
            <li>
              <a
                class="f-title  t_color f_size_18"
                style="font-size: 12px; color: #000"
              >
                <span class="" style="font-weight: bold;"
                  >IDLC Finance PLC Corporate Head Office</span
                >
                <br />
                Bay’s Galleria (1st Floor), 57 Gulshan Avenue, Dhaka 1212,
                Bangladesh</a
              >
            </li>
          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="" scoped>
.card {
  background: transparent !important;
  border: none !important;
  border-bottom: 1px solid #33333351 !important;
  border-radius: 0;
}
.card:first-child {
  border-top: 1px solid #33333351 !important;
}
.card-header {
  background-color: transparent !important;
  border-color: none;
}
.card-body {
  padding: 0.25rem !important;
  border: none !important;
}
.btn-info {
  color: #000;
  background-color: transparent !important;
  border-color: transparent !important;
  position: relative;
}
.btn-info i {
  position: absolute;
  right: 5px;
  transition: all 0.3s;
}
.btn-info.collapsed i {
  transform: rotate(180deg);
}
.card-header:not(:disabled):not(.disabled):active,
.card-header:not(:disabled):not(.disabled).active,
.show > .card-header.dropdown-toggle {
  background-color: transparent !important;
  border-color: red !important;
  color: #000;
  box-shadow: none !important;
  border: none !important;
}
.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle,
.btn-info:focus {
  background-color: transparent !important;
  border-color: transparent !important;
  color: #000;
  box-shadow: none !important;
  border: none !important;
}
.btn-info:focus,
.btn-info:active,
.btn-info:visited {
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}
.mFootter ul {
  color: #000;
}
.mFootter ul li {
  padding: 5px 10px;
}
.mFootter a {
  color: #000;
  font-size: 12px;
}
.p-1 {
  padding: 0 !important;
}
.mb-1,
.my-1 {
  margin-bottom: 0rem !important;
}
.accordion > .card > .card-header {
  border-color: transparent;
}
</style>

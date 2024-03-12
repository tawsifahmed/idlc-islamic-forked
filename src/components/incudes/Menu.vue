<template>
  <vsm-menu
    :menu="menu"
    :base-width="380"
    :base-height="400"
    :screen-offset="10"
    element="header"
    handler="hover"
    @open-dropdown="onOpenDropdown"
    @close-dropdown="onCloseDropdown"
  >
  <template featuresDropdown>
      
    <div class="feature-dropdown">
      <div class="dropdown--section_title">Design</div>
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1">
          <slideshow-svg />
          <span>Design1111</span>
        </a>
        <a href="#" class="dropdown-wrap__content type1">
          <slideshow-svg />
          <span>Design2</span>
        </a>
      </div>
      <div class="dropdown--section_title">Prototyping</div>
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1">
          <file-svg />
          <span>Prototype1</span>
        </a>
        <a href="#" class="dropdown-wrap__content type1">
          <file-svg />
          <span>Prototype2</span>
        </a>
      </div>
    </div> 
      
      
      
      
  </template>
    <template #default="{ item }">
      <!--Dropdown Content-->
      <!--You can replace it with a separate component if each menu item has its own style-->
      <!--Dynamic Component Example: https://codepen.io/Alexeykhr/pen/YzPKxpX-->
      <div class="wrap-content">
        <div class="wrap-content__block">
          Header: {{ item.title }}
        </div>
        <div class="dropdownContent">
                    <div class="linkGroup">
                        <ul
                            class="productsGroup productsGroupCustom"
                            style=""
                        >
                            <div style="align-self: center" class="productsmenu">
                                <!-- <h5 style="padding: 15px 0 5px 13px; color: #808182">
                                    <a href="#" style="color: #808182">Consumer</a>
                                </h5> -->
                                <li>
                                    <a class="linkContainer item-payments" href="./home-loan.php">
                                        <div class="consumer_icon consumer_icon_1"></div>
                                        <div class="productLinkContent">
                                            <h3 class="linkTitle">Home Loan</h3>
                                            <p class="linkSub">
                                                Live in the freedom of your own home.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="linkContainer item-subscriptions" href="#">
                                        <div class="consumer_icon consumer_icon_2"></div>
                                        <div class="productLinkContent">
                                            <h3 class="linkTitle">Car Loan</h3>
                                            <p class="linkSub">
                                                Fuel the journey of your dream car.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="linkContainer item-connect" href="#">
                                        <div class="consumer_icon consumer_icon_3"></div>
                                        <div class="productLinkContent">
                                            <h3 class="linkTitle">Personal Loan</h3>
                                            <p class="linkSub">
                                                Have the freedom to explore your desires.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div style="" class="productsmenu productsmenuRed productsmenuVideo">
                                <h6>Rubana Huq Inspirational Video</h6>
                                <a href="https://www.youtube.com/watch?v=cTEDEgUxiGM">
                                    <!-- <img src="./img/menuImage/Thumbnile 01.jpg" alt=""> -->
                                </a>
                                <p>PURNOTA (WOMEN ENTREPRENEUR LOAN)</p>
                                <p>Take the Challenge to move the worldTake the Challenge to move the world</p>
                            </div>
                         
                        </ul>
                    </div>
                </div>
      </div>
    </template>
    <template #before-nav>
      <!--Image or svg of website logo-->
      <li class="vsm-section logo-section">
        <img
          src="https://vuejs.org/images/logo.png"
          alt="My Logo"
        >
      </li>
    </template>
    <template #title="data">
      <!--Display menu items through slots-->
      {{ data.item.title }}
    </template>
    <template #after-nav>
      <!--Mobile Burger, buttons, etc-->
      <!--For the same styles - add the vsm-section-->
      <li class="vsm-section vsm-mob-hide">
        <button>My Button</button>
      </li>
      <!--Display when user media screen below from $vsm-media (scss)-->
      <vsm-mob>Mobile Content</vsm-mob>
    </template>
  </vsm-menu>
</template>
 
<script>
/* eslint-disable */
/*
 * This is an example of possible settings, you can also control
 * scss variables, and also you need to add a little style.
 * So copy and delete what you don’t need.
 *
 * After #after-nav and #before-nav it is recommended to use
 * to maintain the correct HTML structure:
 *   <li class="vsm-section">
 */
 
export default {
  data() {
    return {
      menu: [
        { title: 'Features', dropdown: 'features', content: 'featuresDropdown' },
        { title: 'Enterprise', dropdown: 'enterprise', content: 'enterpriseDropdownTop', secondaryContent: 'enterpriseDropdownBottom' },
        { title: 'Customers', attributes: { href: '#' } },
        { title: 'Github', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu', target: '_blank' } },
        { title: 'Login', attributes: { href: '#' } }
      ]
    }
  },
  methods: {
    onOpenDropdown() {
      console.log('onOpenDropdown')
    },
    onCloseDropdown() {
      console.log('onCloseDropdown')
    }
  }
}
</script>
 
<style lang="css">
.vsm-menu {
  margin: 10px;
}
.vsm-menu ul {
  max-width: 1024px;
  margin: 0 auto;
}
.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-section {
  flex: 1 1 auto;
}
.logo-section img {
  user-select: none;
  max-width: 40px;
}
.vsm-section_menu > * {
  padding: 0 25px;
  font-weight: 500;
  font-family: inherit;
}
.wrap-content {
  /* padding: 30px; */
  width: 400px;
}
.wrap-content__block {
  font-weight: bold;
}
.wrap-content__item {
  font-style: italic;
  font-size: 0.8rem;
}

</style>
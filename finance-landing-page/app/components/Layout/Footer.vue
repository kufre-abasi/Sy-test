<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// import {
//   ArrowUpIcon,
//   ChevronRightIcon
// } from '@heroicons/vue/24/outline'

const scrollProgress = ref(0);
const showButton = ref(false);
const disclaimerSection = ref(null);
const disclaimerHeight = ref(0);

// Logic for Back to Top progress border
const updateScroll = () => {
  const pixelsCustom = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (pixelsCustom / docHeight) * 100;
  showButton.value = pixelsCustom > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const updateDisclaimerHeight = () => {
  if (disclaimerSection.value) {
    disclaimerHeight.value = disclaimerSection.value.offsetHeight;
  }
};

let resizeObserver = null;

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
  if (disclaimerSection.value) {
    resizeObserver = new ResizeObserver(updateDisclaimerHeight);
    resizeObserver.observe(disclaimerSection.value);
    updateDisclaimerHeight();
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
  if (resizeObserver) resizeObserver.disconnect();
});

const footerLinks = {
  products: [
    "HR Management",
    "Invoice System",
    "Email Marketing",
    "Web Services",
    "Digital Marketing",
  ],
  whyChoose: ["Customers", "Why Staco?", "Book a demo"],
  resources: ["Latest Blog", "Supports", "Knowledgebase", "FAQs"],
  company: ["About", "What we do", "Contact us", "Careers"],
};
</script>

<template>
  <div class="relative min-h-screen">
    <!-- footer -->
    <div
      class="relative z-5 bg-slate-50"
      :style="{ marginBottom: `${disclaimerHeight}px` }"
    >
      <footer
        class="bg-[#1A1F2D] text-white rounded-[30px] pt-20 lg:mx-6 pb-10 lg:px-10 px-0 relative z-5"
      >
        <div class="">
          <div
            class="grid grid-cols-1 container md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20"
          >
            <div class="lg:col-span-2">
              <div class="flex items-center gap-3 mb-3">
                <a class="navbar-brand header-logo" href="/">
                  <img
                    src="https://staco-react.vercel.app/assets/finance-logo-CcnUpYEH.svg"
                    alt="logo"
                    class="logo-light"
                  />
                </a>
              </div>
              <p class="text-[#ffffffb2] leading-relaxed mb-8">
                Staco is the dedicated platform for performance management that helps to
                grow your startup quickly.
              </p>
              <div class="flex gap-3">
                <div
                  class="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M4.67742%2010.2581H5.77419C5.87097%2010.2581%205.96774%2010.3548%205.96774%2010.4516V17.3548C5.96774%2017.7097%206.25806%2018%206.6129%2018H9.12903C9.48387%2018%209.77419%2017.7097%209.77419%2017.3548V10.4516C9.77419%2010.3548%209.87097%2010.2581%209.96774%2010.2581H11.7742C12.0968%2010.2581%2012.3871%2010.0323%2012.4194%209.70968L12.8387%207.19355C12.9032%206.80645%2012.5806%206.41935%2012.1935%206.41935H10.0645C9.90323%206.41935%209.77419%206.29032%209.77419%206.12903V4.51613C9.77419%204.09677%2010%203.87097%2010.4194%203.87097H12.3226C12.6774%203.87097%2012.9677%203.58064%2012.9677%203.22581V0.645161C12.9677%200.290323%2012.6774%200%2012.3226%200H10.0323C5.83871%200%205.93548%203.3871%205.93548%203.87097V6.22581C5.93548%206.32258%205.83871%206.41935%205.74194%206.41935H4.64516C4.29032%206.41935%204%206.70968%204%207.06452V9.58065C4.03226%209.96774%204.32258%2010.2581%204.67742%2010.2581Z'%20fill='white'/%3e%3c/svg%3e"
                    alt="facebook"
                  />
                </div>
                <div
                  class="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M5.26673%200C5.40364%205.72895e-05%205.53908%200.0282242%205.66465%200.0827561C5.79023%200.137288%205.90328%200.217023%205.99678%200.317023L6.07279%200.409029L10.3471%206.23745L16.2935%200.293021C16.4735%200.11366%2016.715%200.00952721%2016.969%200.00177205C17.2229%20-0.0059831%2017.4703%200.0832212%2017.6609%200.251267C17.8515%200.419313%2017.971%200.653599%2017.995%200.90654C18.0191%201.15948%2017.9461%201.41211%2017.7906%201.61312L17.7076%201.70712L11.5442%207.86957L17.8066%2016.4102C17.9103%2016.5517%2017.975%2016.718%2017.9941%2016.8924C18.0132%2017.0669%2017.986%2017.2432%2017.9154%2017.4038C17.8448%2017.5644%2017.7331%2017.7036%2017.5917%2017.8075C17.4502%2017.9113%2017.284%2017.9761%2017.1096%2017.9953L17.0006%2018.0013H12.7333C12.5964%2018.0012%2012.4609%2017.9731%2012.3353%2017.9185C12.2098%2017.864%2012.0967%2017.7843%2012.0032%2017.6843L11.9272%2017.5923L7.6509%2011.7628L1.70647%2017.7083C1.5265%2017.8876%201.28501%2017.9918%201.03104%2017.9995C0.777073%2018.0073%200.529676%2017.9181%200.339096%2017.75C0.148517%2017.582%200.0290475%2017.3477%200.0049521%2017.0948C-0.0191433%2016.8418%200.0539427%2016.5892%200.209366%2016.3882L0.292372%2016.2942L6.45382%2010.1307L0.193365%201.59111C0.0896665%201.44959%200.0250275%201.28327%200.00593756%201.10885C-0.0131524%200.934443%200.0139786%200.758078%200.0846063%200.597468C0.155234%200.436858%200.266873%200.297656%200.408314%200.193838C0.549755%200.0900194%200.71602%200.0252389%200.890415%200.00600047L0.999423%200H5.26673Z'%20fill='white'/%3e%3c/svg%3e"
                    alt="twitter"
                  />
                </div>
                <div
                  class="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%3e%3cpath%20d='M0.238808%205.85448H4.27473V17.9999H0.238808V5.85448ZM2.28379%20-0.00012207C0.902457%20-0.00012207%200%200.90673%200%202.097C0%203.26279%200.876047%204.19601%202.23097%204.19601H2.2567C3.66444%204.19601%204.54112%203.26275%204.54112%202.097C4.51471%200.90673%203.66449%20-0.00012207%202.28379%20-0.00012207ZM14.1841%205.56918C12.0417%205.56918%2011.082%206.74752%2010.5466%207.57389V5.85448H6.50942C6.56287%206.99387%206.50942%2017.9999%206.50942%2017.9999H10.5466V11.217C10.5466%2010.8538%2010.573%2010.4918%2010.6792%2010.2316C10.9715%209.50637%2011.6357%208.75538%2012.7499%208.75538C14.2117%208.75538%2014.7955%209.86965%2014.7955%2011.5016V17.9998H18.832V11.0354C18.832%207.30495%2016.8411%205.56918%2014.1841%205.56918Z'%20fill='white'/%3e%3c/svg%3e"
                    alt="Linkdin"
                  />
                </div>
                <div
                  class="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.8842%204.19583C14.8842%204.79236%2014.4006%205.27583%2013.8042%205.27583C13.2078%205.27583%2012.7242%204.79236%2012.7242%204.19583C12.7242%203.5993%2013.2078%203.11583%2013.8042%203.11583C14.4007%203.11583%2014.8842%203.5993%2014.8842%204.19583ZM9%2012C7.34316%2012%206.00005%2010.6568%206.00005%209C6.00005%207.34316%207.34316%206.00005%209%206.00005C10.6568%206.00005%2012%207.34316%2012%209C12%2010.6568%2010.6568%2012%209%2012ZM9%204.37836C6.44752%204.37836%204.37836%206.44752%204.37836%209C4.37836%2011.5525%206.44752%2013.6216%209%2013.6216C11.5525%2013.6216%2013.6216%2011.5525%2013.6216%209C13.6216%206.44752%2011.5525%204.37836%209%204.37836ZM9%201.62169C11.4031%201.62169%2011.6878%201.63083%2012.6367%201.67414C13.5142%201.71422%2013.9908%201.86075%2014.3079%201.98408C14.7279%202.14734%2015.0277%202.34239%2015.3427%202.65739C15.6577%202.97225%2015.8528%203.27206%2016.0161%203.69225C16.1392%204.00936%2016.2859%204.48594%2016.326%205.36344C16.3693%206.31252%2016.3785%206.59714%2016.3785%209.00028C16.3785%2011.4034%2016.3693%2011.688%2016.326%2012.637C16.2859%2013.5145%2016.1394%2013.9911%2016.0161%2014.3082C15.8528%2014.7282%2015.6577%2015.028%2015.3427%2015.343C15.0279%2015.658%2014.7281%2015.8531%2014.3079%2016.0163C13.9908%2016.1395%2013.5142%2016.2862%2012.6367%2016.3263C11.6878%2016.3696%2011.4031%2016.3787%209%2016.3787C6.59672%2016.3787%206.31209%2016.3696%205.36316%2016.3263C4.48566%2016.2862%204.00908%2016.1397%203.69197%2016.0163C3.27192%2015.8531%202.97211%2015.658%202.65711%2015.343C2.34225%2015.0282%202.14706%2014.7284%201.9838%2014.3082C1.86061%2013.9911%201.71394%2013.5145%201.67386%2012.637C1.63055%2011.6879%201.62141%2011.4033%201.62141%209.00028C1.62141%206.59714%201.63055%206.31252%201.67386%205.36344C1.71394%204.48594%201.86047%204.00936%201.9838%203.69225C2.14706%203.2722%202.34211%202.97239%202.65711%202.65739C2.97197%202.34239%203.27178%202.14734%203.69197%201.98408C4.00908%201.86089%204.48566%201.71422%205.36316%201.67414C6.31223%201.63083%206.59686%201.62169%209%201.62169ZM9%200C6.5558%200%206.24923%200.0104063%205.28933%200.0541406C4.33139%200.097875%203.67706%200.250031%203.10472%200.4725C2.51283%200.702422%202.01094%201.01025%201.51059%201.51059C1.01025%202.01094%200.702422%202.51283%200.4725%203.10472C0.250031%203.6772%200.097875%204.33139%200.0541406%205.28933C0.0104063%206.24923%200%206.5558%200%209C0%2011.4442%200.0104063%2011.7508%200.0541406%2012.7107C0.097875%2013.6686%200.250031%2014.3228%200.4725%2014.8953C0.702422%2015.4872%201.01025%2015.9891%201.51059%2016.4894C2.01094%2016.9898%202.51283%2017.2974%203.10472%2017.5275C3.6772%2017.75%204.33139%2017.9021%205.28933%2017.9459C6.24923%2017.9896%206.5558%2018%209%2018C11.4442%2018%2011.7508%2017.9896%2012.7107%2017.9459C13.6686%2017.9021%2014.3228%2017.75%2014.8953%2017.5275C15.4872%2017.2974%2015.9891%2016.9898%2016.4894%2016.4894C16.9898%2015.9891%2017.2974%2015.4872%2017.5275%2014.8953C17.75%2014.3228%2017.9021%2013.6686%2017.9459%2012.7107C17.9896%2011.7508%2018%2011.4442%2018%209C18%206.5558%2017.9896%206.24923%2017.9459%205.28933C17.9021%204.33139%2017.75%203.6772%2017.5275%203.10472C17.2974%202.51283%2016.9898%202.01094%2016.4894%201.51059C15.9891%201.01025%2015.4872%200.702562%2014.8953%200.4725C14.3228%200.250031%2013.6686%200.097875%2012.7107%200.0541406C11.7508%200.0104063%2011.4442%200%209%200Z'%20fill='white'/%3e%3c/svg%3e"
                    alt="instagram"
                  />
                </div>
                <div
                  class="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%3e%3cpath%20d='M18.8099%206.02108C18.8099%206.02108%2018.6246%204.6485%2018.055%204.04417C17.3322%203.252%2016.5227%203.24733%2016.1515%203.20242C13.4924%203%209.50416%203%209.50416%203H9.49525C9.49525%203%205.50697%203%202.84852%203.20242C2.47731%203.24733%201.66837%203.252%200.944952%204.04417C0.375961%204.6485%200.190059%206.02108%200.190059%206.02108C0.190059%206.02108%200%207.63167%200%209.24225V10.7519C0%2012.3637%200.190059%2013.9737%200.190059%2013.9737C0.190059%2013.9737%200.375367%2015.3457%200.944952%2015.9488C1.66837%2016.741%202.61688%2016.7171%203.03976%2016.7999C4.55964%2016.9527%209.5%2017%209.5%2017C9.5%2017%2013.4924%2016.993%2016.1515%2016.7929C16.5227%2016.7462%2017.3322%2016.7416%2018.055%2015.9494C18.624%2015.3462%2018.8099%2013.9742%2018.8099%2013.9742C18.8099%2013.9742%2019%2012.3637%2019%2010.7525V9.24283C19%207.63167%2018.8099%206.02108%2018.8099%206.02108Z'%20fill='white'/%3e%3cpath%20d='M7%206.5V13.5L12.8333%2010L7%206.5Z'%20fill='black'/%3e%3c/svg%3e"
                    alt="dribbble"
                  />
                </div>
              </div>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2 !text-white">
                PRODUCTS 🔥
              </h5>
              <ul class="space-y-4 text-[#ffffffb2]">
                <li
                  v-for="link in footerLinks.products"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2 !text-white">
                WHY CHOOSE 🌟
              </h5>
              <ul class="space-y-4 text-[#ffffffb2]">
                <li
                  v-for="link in footerLinks.whyChoose"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2 !text-white">
                RESOURCES ➕
              </h5>
              <ul class="space-y-4 text-[#ffffffb2]">
                <li
                  v-for="link in footerLinks.resources"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2 !text-white">
                COMPANY 💎
              </h5>
              <ul class="space-y-4 text-[#ffffffb2]">
                <li
                  v-for="link in footerLinks.company"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>
          </div>

          <div
            class="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[#ffffffb2] text-sm"
          >
            <div
              class="container flex flex-col md:flex-row justify-between items-center gap-6 text-[#ffffffb2] text-sm"
            >
              <p>2023 Staco. All rights reserved.</p>
              <div class="flex gap-8">
                <a href="#" class="hover:text-white">Terms and conditions</a>
                <a href="#" class="hover:text-white">Cookies</a>
                <a href="#" class="hover:text-white">Privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- Disclaimer section -->
    <div
      ref="disclaimerSection"
      class="fixed bottom-0 left-0 w-full z-0 bg-slate-50 ixYIBr"
    >
      <div class="container px-6 py-10 pb-30">
        <div class="">
          <h4 class="font-bold text-slate-900 mb-4">Disclaimer:</h4>
          <p class="text-gray-500 leading-relaxed mb-6">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
          <p class="text-gray-500 leading-relaxed">
            Making this the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined handful of model sentence structures.
          </p>
        </div>
      </div>
    </div>
    <!-- Disclaimer section -->
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-10 right-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group z-50"
    >
      <svg class="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          stroke-width="3"
          fill="transparent"
          class="text-gray-100"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          stroke-width="3"
          fill="transparent"
          stroke-dasharray="150.7"
          :stroke-dashoffset="150.7 - (150.7 * scrollProgress) / 100"
          class="text-emerald-500 transition-all duration-100"
        />
      </svg>
      <IconArrowUp
        class="w-6 h-6 text-emerald-500 relative z-10 group-hover:-translate-y-1 transition-transform"
      />
    </button>
  </div>
</template>

<style>
/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}
.ixYIBr {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 0;
  background-color: rgb(236, 241, 241);
}
</style>

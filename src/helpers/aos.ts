import AOS from 'aos';

const AOSInit = () => {
  // const windowHeight = window.innerHeight;

  // const offS = windowHeight <= 800 ? 100 : 300;
  AOS.init({
    disable: 'mobile',
    // startEvent: 'load',
    easing: 'ease-out-back',
    duration: 1200,
    // delay: 150,
    // offset: offS,
    // // startEvent: 'DOMContentLoaded',
    // useClassNames: true,
  });
};

export default AOSInit;

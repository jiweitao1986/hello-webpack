import { format } from 'date-fns'

const dateStr = format(new Date(), "'Today is a' iiii");
console.log(dateStr);

const lazyLoadBtn = document.getElementById('lazy-load-btn');
lazyLoadBtn.addEventListener('click', ()=> {

  console.log('clicked ...');

  import(/* webpackChunkName: "async" */ './async/async').then((asyncModule) =>{
    const print = asyncModule.default;
    print();
  });


  import(/* webpackChunkName: "async-first" */ './async/async-first').then((asyncModule) =>{
    const print = asyncModule.default;
    print();
  })


  import(/* webpackChunkName: "async-second" */ './async/async-second').then((asyncModule) =>{
    const print = asyncModule.default;
    print();
  })
})


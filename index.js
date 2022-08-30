const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

   listItem = $('.col.l-4.m-12.c-6.mt-40')
   item = $('.lucation__travel')
   row = $('.row.mt-40')
   btnClose = $('.btn__close')
   btnCloseMobile = $('.mobile__btn')
   modal = $('.modal')
   overlayClose = $('.modal__overlay-close')
   block = $('.block')

//    code time
   timeDay = $('.time--day')
   timeHour = $('.time--hour')
   timeMinute = $('.time--minute')
   timeSecond = $('.time--second')

// code form đăng kí
   submit = $('.signup__btn-sign-up')
   email = $('.email')
   userName = $('.name')
   err = $$('.error')
   password = $('.Password')
const content = {

    nation: [
        {
            path:'./asset/img/anh1-content.jpg',
            continent:'Erope',
            packages:'3 PACKAGES',
            nameNation: 'Berlin',
            province: 'Amsterdam'

        },
        {
            path:'./asset/img/anh2-content.jpg',
            continent:'Thailandia',
            packages:'4 PACKAGES',
            nameNation: 'PhuKet',
            province: 'Tràng An'

        },
        {
            path:'./asset/img/anh3-content.jpg',
            continent:'Asia',
            packages:'1 PACKAGES',
            nameNation: 'Hong Kong',
            province: 'PhuKet',

        },
        {
            path:'./asset/img/anh4-content.jpg',
            continent:'Italy',
            packages:'2 PACKAGES',
            nameNation: 'Tuscany',
            province: 'Hong Kong'

        },
        {
            path:'./asset/img/anh5-content.jpg',
            continent:'Netherlands',
            packages:'1 PACKAGES',
            nameNation: 'Amsterdam',
            province: 'United States'

        },
        {
            path:'./asset/img/anh6-content.jpg',
            continent:'United States',
            packages:'3 PACKAGES',
            nameNation: 'San Francisco',
            province: 'PhuKet'

        }
    ],
handleEvent: function() {
    btnClose.onclick = function() {
        modal.classList.add('block')
      };
      
      btnCloseMobile.onclick = function() {
        modal.classList.add('block')
      };

    overlayClose.onclick = function() {
        modal.classList.remove('block')
    }
},
animate: function() {
     var days = 10
     var hours = 10
     var minutes = 10
     var seconds = 20
    function countDown() {
        seconds--;
        if(seconds < 0 ) {
            minutes--;
            seconds = 59;
        }
        if(minutes < 0) {
            hours--;
            minutes = 59;
        }
        if(hours < 0) {
            days--;
            hours = 24;
        }
        if(days < 0) {
            day = 0
        }
        timeDay.innerHTML = days
        timeHour.innerHTML = hours
        timeMinute.innerHTML = minutes 
        timeSecond.innerHTML = seconds
    }
    var dem = setInterval(countDown,1000)
},

render: function() {
     const htmls = this.nation.map((item,index) => {
        return `
    <div class=" col l-4 m-12 c-6 mt-40 data-index=${index}">
        <div class="lucation__travel">
        <img src="${item.path}" alt="" class="lucation__travel-img">

        <div class="lucation__travel-package">
            <h1 class="lucation__travel-name">${item.continent}</h1>
            <h2 class="lucation__travel-mumber">${item.packages}</h2>
        </div>
        <div class="lucation__travel-view">
            <h1 class="lucation__travel-heading">Packages</h1>
            <p class="lucation__travel-nation">${item.nameNation}</p>
            <p class="lucation__travel-nation">${item.province}</p>
            <button class="lucation__travel-btn">VIEW DESTINATION</button>
        </div>
        </div>
        </div>`
         });
         row.innerHTML = htmls.join('')
  },
propties: function() {

},
start: function() {
    this.handleEvent();
    this.render();
    // this.propties();
   this.animate()
}
}

content.start();


// xu li form dang ki

// khi form loi dang nhap
const handlEvent = (name, id, msg, style) => {
    if(name.value.trim() === '') {
        name.style.border = style
        err[id].innerHTML = msg
    }
}

// khi form dang nhap thanh cong
function handle(name, id) {
    name.addEventListener('keyup', function(e) {
        name.style.border = '2px solid green'
          err[id].innerHTML = ''    
          })
}


submit.addEventListener('click', function(e) {
    e.preventDefault();
    handlEvent(userName, 0, 'User name cannot be blank', '2px solid red')
    handlEvent(email, 1, 'Email cannot be blank', '2px solid red')
    handlEvent(password, 2, 'Password cannot be blank', '2px solid red')
}) 

function running() {
handle(userName,0)
handle(email,1)
handle(password,2)
}
running()

window.addEventListener('scroll', () => {
    const yMark = window.scrollY
    const logo = document.querySelector('.logo');
    const joinBtn = document.querySelector('.join')

    if (yMark > 470) {
        logo.style.color = 'black';
    }   else if (yMark < 470)   {
        logo.style.color = 'white';
    };
    
    if (yMark < 470) {
        joinBtn.style.opacity = '0';
    }   else {
        joinBtn.style.opacity = '1';
    }
});


const check = document.querySelector ('#check');
check.onclick = () => {
    const inputs = document.querySelector('#inputs');
    const loginInput = document.querySelector('.loginInput');
    const contractInput = document.querySelector('.contractInput');

    if (check.checked == true) {
        inputs.style.height = '550px';
        loginInput.setAttribute('required', 'required');
        contractInput.setAttribute('required', 'required');
        contractInput.removeAttribute('disabled', 'disabled');
        loginInput.removeAttribute('disabled', 'disabled');
    };

    if (check.checked == false) {  
        inputs.style.height = '290px';
        contractInput.setAttribute('disabled', 'disabled');
        loginInput.setAttribute('disabled', 'disabled');
    };
};

const locker1 = document.querySelector('#locker1');
locker1.onclick = () => {
    const ra1 = document.querySelector('#ra1');
    const text1 = document.querySelector('#text1');
    
    if (locker1.checked == true) {
        ra1.style.rotate = '270deg';
        text1.style.height = '150px';
    };

    if (locker1.checked == false) {
        ra1.style.rotate = '90deg';
        text1.style.height = '1px';
    };
}

const locker2 = document.querySelector('#locker2');
locker2.onclick = () => {
    const ra2 = document.querySelector('#ra2');
    const text2 = document.querySelector('#text2');
    
    if (locker2.checked == true) {
        ra2.style.rotate = '270deg';
        text2.style.height = '150px';
    };

    if (locker2.checked == false) {
        ra2.style.rotate = '90deg';
        text2.style.height = '1px';
    };
}

const locker3 = document.querySelector('#locker3');
locker3.onclick = () => {
    const ra3 = document.querySelector('#ra3');
    const text3 = document.querySelector('#text3');
    
    if (locker3.checked == true) {
        ra3.style.rotate = '270deg';
        text3.style.height = '150px';
    };

    if (locker3.checked == false) {
        ra3.style.rotate = '90deg';
        text3.style.height = '1px';
    };
}

const goToForm = document.querySelector('#join');
const form = document.querySelector('#sendForm')

function scrollToForm (element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    });
};
let scrollBtn = document.querySelector('.join');
let scrollBtn2 = document.querySelector('.btn-join');

scrollBtn.addEventListener('click', () => {
    scrollToForm(form)
});
scrollBtn2.addEventListener('click', () => {
    scrollToForm(form)
});

/* const sendForm = document.querySelector("#sendForm");
sendForm.preventDefault();

sendForm.addEventListener('click', () => {
    openPopup();
});

function openPopup () {
    sendForm.onclick = () => {
        const popup = document.querySelector('#popup-submit');

        popup.style.display = 'block';
    }
}; */
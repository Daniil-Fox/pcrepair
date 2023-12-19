import JustValidate from 'just-validate';
import Inputmask from "inputmask";
const ctaForm = document.querySelector('.cta-form')
if(ctaForm){

  const validation = new JustValidate('.cta-form');


  const inputMask = new Inputmask('+7 (999) 999-99-99');
  const telSelector = ctaForm.querySelector('input[type="tel"]');

  inputMask.mask(telSelector);
  validation
    .addField('#input-contact-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => {
      console.log('sfsdffsdf form');
        const formData = new FormData(ctaForm)
        ctaForm.classList.add('_sending')
        fetch('mail-main.php', {
          method: 'POST',
          body: formData
        }).then(() => {
          alert('Ваши данные отправлены. В ближайшее время мы с вами свяжемся.')
          ctaForm.reset();
          ctaForm.classList.remove('_sending');
      })

    })
}



const ctaSec = document.querySelector('.cta-form__secondary')

if(ctaSec){
  const validationSec = new JustValidate('.cta-form__secondary');

  const telSelectorSec = ctaSec.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelectorSec);
  validationSec
    .addField('#input-sec-contact-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelectorSec.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => {
      console.log('sfsdffsdf form');
        const formData = new FormData(ctaSec)
        ctaSec.classList.add('_sending')
        fetch('mail-main.php', {
          method: 'POST',
          body: formData
        }).then(() => {
          alert('Ваши данные отправлены. В ближайшее время мы с вами свяжемся.')
          ctaSec.reset();
          ctaSec.classList.remove('_sending');
      })

    })


}



const modalForm = document.querySelector('.modal__form')

if(modalForm){
  const validationModal = new JustValidate('.modal__form');

  const telSelector = modalForm.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);
  validationModal
    .addField('#modal-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
      },
    ])
    .addField('#modal-name', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 15,
      },
    ])
    .onSuccess((event) => {
        const formData = new FormData(modalForm)
        modalForm.classList.add('_sending')
        fetch('mail-main.php', {
          method: 'POST',
          body: formData
        }).then(() => {
          alert('Ваши данные отправлены. В ближайшее время мы с вами свяжемся.')
          modalForm.reset();
          modalForm.classList.remove('_sending');
        })

    })
}

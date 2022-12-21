import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_o8ywdpn";
const TEMPLATE_ID = "template_uqaeznt";
const USER_ID = "7LTD-kKMn08FUPgTP";

const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Mensaje enviado satisfactoriamente'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Error, ntente nuevamente!',
              text: error.text,
            })
          });
        e.target.reset()
      };

  return (
      <div className="form-container" id="form-container">
          <h2 className="form-text">Haz tu cita o pregunta por nuestros servicios y promociones aquí!</h2>
          <div className="form-elements">
          <div className="form-image">
        <img src='https://res.cloudinary.com/dembmmjyq/image/upload/v1671650449/dental%20clinic/312024660_502210045119593_5391848802882991928_n_bgwpvi.gif' alt="reservaciones"/>
    </div>
    <div className="form" id="form">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Correo electrónico'
          name='user_email'
          placeholder='Correo electrónico...'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={Input}
          label='Teléfono'
          name='user_phone_number'
          placeholder='Numero de teléfono'
          icon='phone volume'
          iconPosition='left'
          required
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Nombre'
          name='user_name'
          placeholder='Nombre completo...'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Mensaje'
          name='user_message'
          placeholder='Mensaje'
          required
        />
        <Button type='submit' color='green'>Enviar</Button>
      </Form>
    </div>
    </div>
    </div>
  );
}

export default ContactForm;
import { useForm, ValidationError } from '@formspree/react';

export default function ContactMe() {
  const [state, handleSubmit] = useForm("mvojnjpd");
  if (state.succeeded) {
    return <h2 className='success-message'>Obrigado por entrar em contato!</h2>;
  }
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Entre em Contato</h2>
        <p className="text-lg">
          Sinta-se à vontade para entrar em contato comigo por e-mail usando o formulário abaixo.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Nome</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              className="contact--input text-md"
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Mensagem</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Digite a sua mensagem..."
          />
          <ValidationError
            prefix="Mensagem"
            field="message"
            errors={state.errors}
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit" disabled={state.submitting}>Enviar</button>
        </div>
      </form>
      {state.succeeded && (
        <div className="success-message">
          <h2>Obrigado por entrar em contato!</h2>
        </div>
      )}
    </section>
  );
}

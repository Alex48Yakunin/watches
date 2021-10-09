import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default function Form ({handleAdd}) {
  const [form, setForm] = useState({city: null, timeZone: null});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prevForm) => ({...prevForm, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const clock = {
      city:  form.city,
      timeZone: form.timeZone,
      id: nanoid()
    }

    console.log(clock);

    handleAdd(clock);
    setForm({ city: null, timeZone: null });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__item">
        <label htmlFor="city" className="form__label">Название</label>
        <input 
          defaultValue={form.city} 
          name="city" id="city" 
          type="text" 
          className="form__input"
          required
          autoComplete="off"
          onChange={handleChange} />
      </div>
      <div className="form__item">
        <label htmlFor="timeZone" className="form__label">Временная зона</label>
        <input 
          defaultValue={form.timeZone} 
          name="timeZone" 
          id="timeZone" 
          type="text" 
          className="form__input"
          required
          autoComplete="off"
          onChange={handleChange} />
      </div>
      <div className="form__item">
        <button type="submit" className="form__btn">Добавить</button>
      </div>
    </form>
  )
}

Form.propTypes = {
  handleAdd: PropTypes.func,
};

Form.defaultPropTypes = {
  handleAdd: () => {},
};

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { addDog, getAllDogs, getAllTemperaments } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import validate from './Validation';
import style from './Form.module.css';
import HomeLogo from '../../Components/HomeLogo.png'

export const Form = () => {
    const allTemperaments = useSelector((state) => state.allTemperaments);
    const dispatch = useDispatch('');
    const [form, setForm] = useState({
        image: '',
        name: '',
        height: '',
        weight: '',
        life_span: '',
        temperamentID: [],
    });
    const [errors, setErrors] = useState({
        image: '',
        name: '',
        height: '',
        weight: '',
        life_span: '',
        temperamentID: [],
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addDog(form));
        if(form.name.length > 0 && form.height.length > 0 && form.weight.length > 0 && form.life_span.length > 0 && form.temperamentID.length > 0){
            setForm({
                image: '',
                name: '',
                height: '',
                weight: '',
                life_span: '',
                temperamentID: [],
            });
            alert('Dog created');
        } else {
            alert(errors.name || errors.height || errors.weight || errors.life_span || errors.temperamentID)
        }
    };
    const handleSelectTemperaments = (e) => {
        setForm({
            ...form,
            temperamentID: [...form.temperamentID, e.target.value]
        });
    };
    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
    }, [dispatch]);
    
    return(
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <Link to="/home" className={style.btnHome}>
                    <button><img src= {HomeLogo} alt= "Home" width={60}></img></button>
                </Link>
                <div className={style.formContainer}>
                    <h1>Add Dogs Form.</h1>
                    <label>Image 
                        <input 
                        type="text" 
                        value={form.image} 
                        name="image" 
                        placeholder="Image URL..." 
                        onChange={handleChange}></input></label>
                    <label>Name 
                        <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        placeholder="Name..."></input></label>
                    <label>Height 
                        <input 
                        type="text" 
                        name="height" 
                        value={form.height} 
                        onChange={handleChange} 
                        placeholder="Height..."></input></label>
                    <label>Weight 
                        <input 
                        type="text" 
                        name="weight" 
                        value={form.weight} 
                        onChange={handleChange} 
                        placeholder="Weight..."></input></label>
                    <label>Life Span 
                        <input 
                        type="text" 
                        name="life_span" 
                        value={form.life_span} 
                        onChange={handleChange} 
                        placeholder="Life Span..."></input></label>
                    <label>Temperaments 
                        <select 
                        name="temperaments" 
                        onChange={handleSelectTemperaments} 
                        value={form.id} 
                        key={form.id}>{allTemperaments?.map((a) =>(
                            <option key={a.name} value={a.name}>{a.name}</option>))}</select>
                            <div className={style.btnSelect}>
                                {Array.isArray(form.temperamentID) 
                                ? form.temperamentID.map((a) => 
                                <button type="button" key={a.name} value={a.name} className={style.btn}>Add Dog</button>) 
                                : null}
                            </div>
                    </label>
                </div>
            </form>
        </div>
    )
};

const dispatchDog = (dispatch) => {
    return {
        addDog: (dog) => {dispatch(addDog(dog))}
    };
};
export default connect(null, dispatchDog)(Form);
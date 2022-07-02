import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useForm } from 'react-hook-form'
import { chooseColor, chooseEmail, chooseMake, chooseModel, chooseName, chooseYear } from '../../redux/slices/RootSlice'
import { Input } from '../SharedComponents/Input'
import { Button } from '@material-ui/core'
import { server_calls } from '../../api'



interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    name: string;
    email: string;
    car_color: string;
    car_make: string;
    car_model: string;
    car_year: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<CarState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000)
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseName(data.name));
            dispatch(chooseEmail(data.email));
            dispatch(chooseColor(data.car_color));
            dispatch(chooseMake(data.car_make));
            dispatch(chooseModel(data.car_model));
            dispatch(chooseYear(data.car_year));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name"> Name </label>
                    <Input {...register('name')} name="name" placeholder='Name'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input {...register('email')} name="email" placeholder='Email'/>
                </div>
                <div>
                    <label htmlFor="name">Car Color</label>
                    <Input {...register('car_color')} name= "car_color" placeholder='Car Color'/>
                </div>
                <div>
                    <label htmlFor="car_make">Car Make</label>
                    <Input {...register('car_make')} name="car_make" placeholder='Car Make'/>
                </div>
                <div>
                    <label htmlFor="car_model">Car Model</label>
                    <Input {...register('car_model')} name="car_model" placeholder='Car Model'/>
                </div>
                <div>
                    <label htmlFor="car_year">Car Year</label>
                    <Input {...register('car_year')} name="car_year" placeholder='Car Year'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
import React, { useState } from 'react';

//step-1 - adding function component 
//interface define
interface IProps{
    name: string;
    age: number;
}

const Form: React.FC<IProps> = () => {
    //create components for useSate
    const [formData, setFormData] = useState<IProps>({name: ' ', age: 0});
    //input handler adds
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Convert age to number if the field is 'age'
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value
    }));
  };
    //submit Events
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', formData); // Replace with actual submit logic
  };
    return(
        <>
        <div>
            <form onSubmit = {handleSubmit}>
            <label>
                Name: <input type="text" name ="name" value={formData.name} onChange={handleInputChange}/>

            </label>
            <label>
            Age:
            <input type="number" name="age" value ={formData.age} onChange={handleInputChange}/>
            </label>
            </form>
        </div>
        </>
    )
}

export default Form;
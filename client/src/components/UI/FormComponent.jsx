import React, { useState } from 'react';
import FormInput from "./FormInput.jsx";
import Divider from './Divider.jsx';
import FormCategory from "./FormCategory.jsx";
import styles from '../../cssModules/Form.module.css';

function FormComponent() {
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setOutput([]);

    const formData = new FormData(event.target);
    const data = {
      frontendFramework: formData.get('frontendFramework'),
      frontendLanguage: formData.get('frontendLanguage'),
      frontendBuildTool: formData.get('buildTool'),
      backendFramework: formData.get('backendFramework'),
      backendEnvironment: formData.get('environment'),
      backendLanguage: formData.get('backendLanguage'),
      backendDatabase: formData.get('database'),
    };

    try {
      const response = await fetch('http://localhost:8000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setOutput((prev) => [...prev, chunk]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className={styles.h3}>Your Technologies</h3>
      </div>


      <div className={styles.box_container}>
        <FormCategory title='Front End :'/>
        <div className={styles.formInput_container}>
          <FormInput
            id='dropdown'
            label='Framework'
            name='frontendFramework'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
          <FormInput
            id='dropdown'
            label='Language'
            name='frontendLanguage'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
          <FormInput
            id='dropdown'
            label='Build Tool'
            name='buildTool'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
        </div>
      </div>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <Divider black/>
      </div>


      <div className={styles.box_container}>
        <FormCategory title='Back End :'/>
        <div className={styles.formInput_container}>
          <FormInput
            id='dropdown'
            label='Framework'
            name='backendFramework'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
          <FormInput
            id='dropdown'
            label='Environment'
            name='environment'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
          <FormInput
            id='dropdown'
            label='Language'
            name='backendLanguage'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
          <FormInput
            id='dropdown'
            label='Database'
            name='database'
            value1='Node.js'
            value2='React.js'
            value3='Express.js'
            value4='Vue.js'
          />
        </div>
      </div>


      <div className={styles.submitForm_container}>
        <p className={styles.p}>
          For instructions, <span className={styles.span}>Click here.</span>
        </p>
        <button type="submit" className={styles.btn}>Submit</button>
      </div>

      <div className="output">
        {output.map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
    </form>
  )
}

export default FormComponent;



import FormInput from "./FormInput.jsx";
import Divider from './Divider.jsx';
import FormCategory from "./FormCategory.jsx";
import styles from '../../cssModules/Form.module.css';
import axios from 'axios';




function FormComponent() {
  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = {
        frontendFramework : formData.get('frontendFramework'),
        frontendLanguage: formData.get('frontendLanguage'),
        frontendBuildTool: formData.get('buildTool'),
        backendFramework: formData.get('backendFramework'),
        backendEnvironment: formData.get('environment'),
        backendLanguage: formData.get('backendLanguage'),
        backendDatabase: formData.get('database'),
      };
      
      console.log(data);
  
      // const response = await axios.post('http://localhost:8000/suggest' , { data });
    } catch(error) {
      console.error('There was an error' , error);
    }
  };


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
    </form>
  )
}

export default FormComponent;



import { Form } from "react-router-dom";
import FormInput from "./FormInput.jsx";
import Divider from './Divider.jsx';
import FormCategory from "./FormCategory.jsx";
import styles from '../../cssModules/Form.module.css';

function FormComponent() {
  return (
    <Form>
      <div>
        <h3 className={styles.h3}>Your Technologies</h3>
      </div>


      <div className={styles.box_container}>
          <FormCategory title='Front End :'/>
          <div className={styles.formInput_container}>
            <FormInput 
              id='dropdown'
              label='Framework'
              name='inut'
              value1='Node.js'
              value2='React.js'
              value3='Express.js'
              value4='Vue.js'
            />
            <FormInput 
              id='dropdown'
              label='Language'
              name='inut'
              value1='Node.js'
              value2='React.js'
              value3='Express.js'
              value4='Vue.js'
            />
            <FormInput 
              id='dropdown'
              label='Build Tool'
              name='inut'
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
              name='inut'
              value1='Node.js'
              value2='React.js'
              value3='Express.js'
              value4='Vue.js'
            />
            <FormInput 
              id='dropdown'
              label='Environment'
              name='inut'
              value1='Node.js'
              value2='React.js'
              value3='Express.js'
              value4='Vue.js'
            />
            <FormInput 
              id='dropdown'
              label='Language'
              name='inut'
              value1='Node.js'
              value2='React.js'
              value3='Express.js'
              value4='Vue.js'
            />
            <FormInput 
              id='dropdown'
              label='Database'
              name='inut'
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
        <button className={styles.btn}>Submit</button>
      </div>
    </Form>
  )
}

export default FormComponent;
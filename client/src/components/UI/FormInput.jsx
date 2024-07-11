import styles from '../../cssModules/Form.module.css';


function FormInput({ id, label, name, value1, value2, value3, value4 }) {
  return (
    <div className={styles.select_container}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select_container} id={id} name={name} required>
        <option value="" defaultValue >Choose an option</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
        <option value={value4}>{value4}</option>
      </select>
    </div>
  )
}

export default FormInput
































// data = {
//   frontendFramwork :  'xxx',
//   frontendFramwork : 'sad',
// }
import { HeroList } from '../components';
import './styles.css/DcPage.css'


export const DcPage = () => {
  return (
    <>
      <h1 className='form-title-importadas' >FRUTAS IMPORTADAS</h1>
      <hr className='form-divider-importadas' />

      <HeroList publisher='DC Comics' />
    </>
  )
}

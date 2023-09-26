import { HeroList } from '../components';


export const DcPage = () => {
  return (
    <>
      <h1 className='display-4 text-center mt-5' >FRUTAS IMPORTADAS</h1>
      <hr className='w-50 mx-auto mb-3' />

      <HeroList publisher='DC Comics' />
    </>
  )
}

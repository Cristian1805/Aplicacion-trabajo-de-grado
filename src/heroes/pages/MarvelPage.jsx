import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className='display-4 text-center mt-5' >FRUTAS TROPICALES</h1>
      <hr className='w-50 mx-auto mb-3' />

      <HeroList publisher='Marvel Comics' />

    </>
  )
}

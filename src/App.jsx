import './App.css'

function App() {


  return (
    <>
      <h1 class="text-3xl font-bold text-center">Food El BLog</h1>
      <nav className="flex justify-center gap-[5rem] text-2xl mt-7">
        <a href="" className='bg-[#edd014] px-7 py-4 rounded-md ' >Ana Sayfa</a>
        <a href="" className='bg-[#edd014] px-7 py-4 rounded-md' >Aperatifler</a>
        <a href="" className='bg-[#edd014] px-7 py-4 rounded-md' >Vegan</a>
        <a href="" className='bg-[#edd014] px-7 py-4 rounded-md' >Yemekler</a>
        <a href="" className='bg-[#edd014] px-7 py-4 rounded-md' >Tatlılar</a>
        <a href="" className='bg-[#edd014] px-7 py-4 rounded-md'>İçecekler</a>
      </nav>
      <div className='pt-10'>
        <img src="images/gorsel.jpg" alt="" />
      </div>
    </>
  )
}

export default App

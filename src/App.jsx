import './App.css'

function App() {


  return (
    <>
      <h1 class="text-3xl font-bold text-center mt-2">Food El Blog</h1>
      <nav className="flex justify-center gap-[5rem] text-2xl mt-7">
        <a href="" className='bg-[#e49d22cd] px-6 py-3 rounded-md ' >Ana Sayfa</a>
        <a href="" className='bg-[#e49d22cd] px-6 py-3 rounded-md' >Aperatifler</a>
        <a href="" className='bg-[#e49d22cd] px-6 py-3 rounded-md' >Vegan</a>
        <a href="" className='bg-[#e49d22cd] px-6 py-3 rounded-md' >Yemekler</a>
        <a href="" className='bg-[#e49d22cd] px-6 py-3 rounded-md' >Tatlılar</a>
        <a href="" className='bg-[#e49d22cd] px-6 py-3 rounded-md'>İçecekler</a>
      </nav>
      <div className='pt-10 flex justify-center bg-[#1111] mt-10'>
        <img src="images/gorsel.jpg" alt="" className='h-[270px] mb-8 rounded-xl' />
      </div>
      <div class="mt-10 px-[50px]">
        <h1 className='font-semibold text-2xl'>Hakkımızda</h1>
        <p className='mt-5 mx-auto max-w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt pariatur, autem tempora dignissimos vel dolore consequatur itaque expedita possimus obcaecati saepe necessitatibus. Odit distinctio in quibusdam sunt expedita quaerat accusamus neque magni odio nihil suscipit vel pariatur qui, excepturi eos natus tempore quam id, earum unde dolore aspernatur officiis porro! Iure odio atque repudiandae expedita iusto vitae? Aliquam inventore beatae voluptas dolor iure voluptate maiores vero iste magnam odio ex unde nihil provident id, accusantium aliquid et quae hic quisquam. Cum, minus. Dolore blanditiis voluptas, animi doloribus harum ratione, odit molestias a ab amet aut quibusdam iste eaque nihil.</p>
      </div>
      <div className='mt-10 px-[50px] flex items-start gap-[50px]'>
        <img src="images/yemekler.jpg" alt="" className='h-[270px] rounded-md' />
        <div>
          <h1 className='font-semibold text-xl'>Yemekler</h1>
          <p className='mt-5 text-justify pr-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime voluptas molestiae optio provident tempore laboriosam explicabo magnam excepturi tenetur dicta deleniti, nisi sapiente accusantium autem porro placeat inventore vel. <span className='mt-4 block'> Numquam beatae iste optio officia quasi expedita animi obcaecati, magnam pariatur veritatis minus sapiente distinctio voluptatibus fugit, similique, quia repellat corrupti sequi ad. Architecto nihil tempora minima autem recusandae atque esse, placeat, optio ab excepturi, sit odit ad a enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nesciunt voluptatum repellendus soluta recusandae! Minus.</span></p>
        </div>
      </div>
      <div className='mt-10 px-[50px] flex flex-row-reverse items-center gap-[60px]'>
        <img src="images/aperatifler.jpg" alt="" className='h-[400px] mr-20 rounded-md' />
        <div className='pb-[50px] '>
          <h1 className='text-2xl font-bold ' >Aperatifler</h1>
          <p className='mt-5 text-justify pr-7'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio unde, aspernatur enim excepturi commodi dolorum. Provident, natus odio necessitatibus libero maiores totam ducimus eligendi illum repudiandae laborum optio quod? Quis ab rerum similique obcaecati vitae debitis eaque expedita rem, fugiat quaerat eveniet sunt voluptas recusandae, animi doloremque reprehenderit. Ex tenetur rerum possimus rem odio animi? Rem placeat quam esse autem incidunt ipsam asperiores tenetur, eum commodi ut, similique molestias nobis harum illum distinctio. Atque aliquid cupiditate laborum rem ex voluptatum possimus. Maiores eaque reprehenderit quidem. <span className='mt-5 block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illo corrupti. Magnam fuga aperiam, voluptas eius, ad repudiandae labore optio vitae, esse commodi quaerat quos perferendis quae odit nostrum ex similique consequatur laborum maiores nihil earum error architecto odio! Distinctio minus qui harum fugit dolor quisquam asperiores consequuntur fugiat ad, consequatur libero optio cum vero voluptas magnam odit, culpa ipsa quaerat, aliquid earum aperiam sequi et! Illum non quam voluptatem?</span>
          </p>
        </div>
      </div>
      <div className='mt-10 px-[50px] flex items-start gap-[50px] pb-10'>
        <img src="images/tatlilar.jpg" alt="" className='h-[270px] rounded-md' />
        <div>
          <h1 className='font-semibold text-xl'>Tatlılar</h1>
          <p className='mt-5 text-justify pr-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus impedit eaque expedita voluptatum, officiis delectus temporibus reiciendis, rerum earum distinctio iste atque laborum ratione excepturi repudiandae fugit modi necessitatibus accusamus dolores doloribus odio omnis amet. Officiis consequuntur repellendus perferendis sapiente voluptatibus explicabo porro vero possimus optio sit natus ipsam, ipsa officia quasi voluptate doloribus laudantium incidunt enim sequi praesentium reprehenderit, beatae saepe quaerat! Pariatur, temporibus! Saepe sapiente quod architecto.</p>
        </div>
      </div>
      <div className='px-[50px] pb-8'>
        <h1 className='font-semibold text-xl'>İletişim</h1>
        <div className='space-y-2 mt-3'>
          <p>yemek@foodelblog.com</p>
          <p>216-550-5905</p>
          <p>Bağdat Cd. No:3512/2</p>
          <p>Kadıköy, İstanbul,34578</p>
        </div>
      </div>
      <div className='px-[50px] bg-[#edd014] h-24'>
        <h1 className='pt-5 text-xl text-gray-600'>Food El Blog</h1>
        <nav className='pt-3 text-lg'>
          <a href="" className=' px-7 rounded-md underline' >Ana Sayfa</a>
          <a href="" className=' px-7 rounded-md underline' >Aperatifler</a>
          <a href="" className=' px-7 rounded-md underline' >Vegan</a>
          <a href="" className=' px-7 rounded-md underline' >Yemekler</a>
          <a href="" className=' px-7 rounded-md underline' >Tatlılar</a>
          <a href="" className=' px-7 rounded-md underline'>İçecekler</a>
        </nav>
      </div>
    </>
  )
}

export default App

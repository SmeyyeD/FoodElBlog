import './App.css'

function App() {


  return (
    <>
      <h1 class="text-xl  md:text-3xl lg:text-4xl font-bold text-center mt-2 font-[Gruppo]">FOOD EL BLOG</h1>

      <nav class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-[3rem] md:gap-[0.5rem] lg:gap-[4rem] xl:gap-[5rem] text-sm sm:text-xl mt-7 font-[Gruppo]">
        <a href="" class="bg-[#e49d22cd] px-6 py-3 rounded-3xl">Ana Sayfa</a>
        <a href="" class="bg-[#e49d22cd] px-6 py-3 rounded-3xl">Aperatifler</a>
        <a href="" class="bg-[#e49d22cd] px-6 py-3 rounded-3xl">Vegan</a>
        <a href="" class="bg-[#e49d22cd] px-6 py-3 rounded-3xl">Yemekler</a>
        <a href="" class="bg-[#e49d22cd] px-6 py-3 rounded-3xl">Tatlılar</a>
        <a href="" class="bg-[#e49d22cd] px-6 py-3 rounded-3xl">İçecekler</a>
      </nav>

      <div class="pt-10 flex justify-center bg-[#1111] mt-10">
        <img src="images/gorsel.jpg" alt="" class="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[250px] xl:h-[300px] mb-8 rounded-xl" />
      </div>

      <div class="mt-10 px-[50px]">
        <h1 class="font-semibold text-sm sm:text-4xl md:text-4xl font-[Gruppo]">Hakkımızda</h1>
        <p class="mt-5 mx-auto max-w-full font-[Gruppo] font-semibold text-sm sm:text-xl md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt pariatur, autem tempora dignissimos vel dolore consequatur itaque expedita possimus obcaecati saepe necessitatibus. Odit distinctio in quibusdam sunt expedita quaerat accusamus neque magni odio nihil suscipit vel pariatur qui, excepturi eos natus tempore quam id, earum unde dolore aspernatur officiis porro! Iure odio atque repudiandae expedita iusto vitae? Aliquam inventore beatae voluptas dolor iure voluptate maiores vero iste magnam odio ex unde nihil provident id, accusantium aliquid et quae hic quisquam. Cum, minus. Dolore blanditiis voluptas, animi doloribus harum ratione, odit molestias a ab amet aut quibusdam iste eaque nihil.</p>
      </div>

      <div class="mt-10 px-[50px] flex flex-col sm:flex-row gap-[50px] sm:gap-[30px]">
        <img src="images/yemekler.jpg" alt="" class="h-[170px] sm:h-[300px] md:h-[250px] lg:h-[300px] rounded-md" />
        <div>
          <h1 class="font-semibold text-sm sm:text-4xl md:text-3xl font-[Gruppo]">Yemekler</h1>
          <p class="mt-5 text-justify pr-7 font-[Gruppo] text-sm sm:text-xl md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime voluptas molestiae optio provident tempore laboriosam explicabo magnam excepturi tenetur dicta deleniti, nisi sapiente accusantium autem porro placeat inventore vel. <span class="mt-4 block"> Numquam beatae iste optio officia quasi expedita animi obcaecati, magnam pariatur veritatis minus sapiente distinctio voluptatibus fugit, similique, quia repellat corrupti sequi ad. Architecto nihil tempora minima autem recusandae atque esse, placeat, optio ab excepturi, sit odit ad a enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nesciunt voluptatum repellendus soluta recusandae! Minus.</span></p>
        </div>
      </div>

      <div class="mt-10 px-[50px] flex flex-col sm:flex-row-reverse items-center gap-[60px] sm:gap-[30px]">
        <img src="images/aperatifler.jpg" alt="" class="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg pr-[70px]" />
        <div class="pb-[50px]">
          <h1 class="text-sm sm:text-4xl md:text-5xl lg:text-3xl font-bold font-[Gruppo]">Aperatifler</h1>
          <p class="mt-5 text-justify pr-7 font-[Gruppo] text-sm sm:text-xl md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio unde, aspernatur enim excepturi commodi dolorum. Provident, natus odio necessitatibus libero maiores totam ducimus eligendi illum repudiandae laborum optio quod? Quis ab rerum similique obcaecati vitae debitis eaque expedita rem, fugiat quaerat eveniet sunt voluptas recusandae, animi doloremque reprehenderit. Ex tenetur rerum possimus rem odio animi? Rem placeat quam esse autem incidunt ipsam asperiores tenetur, eum commodi ut, similique molestias nobis harum illum distinctio. Atque aliquid cupiditate laborum rem ex voluptatum possimus. Maiores eaque reprehenderit quidem. <span class="mt-5 block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illo corrupti. Magnam fuga aperiam, voluptas eius, ad repudiandae labore optio vitae, esse commodi quaerat quos perferendis quae odit nostrum ex similique consequatur laborum maiores nihil earum error architecto odio! Distinctio minus qui harum fugit dolor quisquam asperiores consequuntur fugiat ad, consequatur libero optio cum vero voluptas magnam odit, culpa ipsa quaerat, aliquid earum aperiam sequi et! Illum non quam voluptatem?</span></p>
        </div>
      </div>

      <div class="mt-10 px-[50px] flex flex-col sm:flex-row items-center gap-[50px] sm:gap-[30px] pb-10">
        <img src="images/tatlilar.jpg" alt="" class="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-md" />
        <div>
          <h1 class="font-semibold text-sm sm:text-xl md:text-3xl font-[Gruppo]">Tatlılar</h1>
          <p class="mt-5 text-justify pr-7 font-[Gruppo] text-sm sm:text-xl md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus impedit eaque expedita voluptatum, officiis delectus temporibus reiciendis, rerum earum distinctio iste atque laborum ratione excepturi repudiandae fugit modi necessitatibus accusamus dolores doloribus odio omnis amet. Officiis consequuntur repellendus perferendis sapiente voluptatibus explicabo porro vero possimus optio sit natus ipsam, ipsa officia quasi voluptate doloribus laudantium incidunt enim sequi praesentium reprehenderit, beatae saepe quaerat! Pariatur, temporibus! Saepe sapiente quod architecto.</p>
        </div>
      </div>

      <div class="border-t border-gray-400 mt-20"></div>

      <div class="px-[50px] pb-6 mt-5">
        <h1 class="font-semibold text-xl sm:text-3xl md:text-3xl font-[Gruppo]">İletişim</h1>
        <div class="space-y-2 mt-3 font-[Gruppo] text-sm sm:text-xl md:text-xl">
          <p>yemek@foodelblog.com</p>
          <p>216-550-5905</p>
          <p>Bağdat Cd. No:3512/2</p>
          <p>Kadıköy, İstanbul,34578</p>
        </div>
      </div>

      <div class="px-[50px] bg-[#edd014] h-26">
        <h1 class="pt-5 text-lg sm:text-md md:text-3xl text-gray-600 font-[Gruppo]">Food El Blog</h1>
        <nav class="pt-3 text-sm sm:text-xl md:text-xl font-[Gruppo] flex flex-wrap justify-center">
          <a href="" class="px-7 rounded-md underline decoration-1">Ana Sayfa</a>
          <a href="" class="px-7 rounded-md underline decoration-1">Aperatifler</a>
          <a href="" class="px-7 rounded-md underline decoration-1">Vegan</a>
          <a href="" class="px-7 rounded-md underline decoration-1">Yemekler</a>
          <a href="" class="px-7 rounded-md underline decoration-1">Tatlılar</a>
          <a href="" class="px-7 rounded-md underline decoration-1">İçecekler</a>
        </nav>
        <p class="text-center text-sm sm:text-base md:text-md text-gray-500 mt-2 pb-1">@Food El Blog 2022</p>
      </div>
    </>
  )
}

export default App

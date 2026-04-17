//import Banner from '../../public/img/banner.jpg'
import Banner from '/img/banner.jpg'
import { fechaActual } from '../../utils/fechaActual'; 

export function BannerIndex() {
    
    return (
      <section>
        <img
          className="rounded-md w-full"
          src={Banner}
          alt="banner del index"
        />
        <div className="flex flex-row justify-between items-center">
          <div className="border-b border-[#a5a1a1] w-1/3"></div>
          <div className="w-1/3 italic tracking-[1px] text-center">{fechaActual()}</div>
          <div className="border-b border-[#a5a1a1] w-1/3"></div>
        </div>
      </section>
    );
}
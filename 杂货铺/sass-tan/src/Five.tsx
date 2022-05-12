import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './five.scss'

const Three = () => {


  const [hen, setHen] = useState<boolean>(false);
  const [cloth, setCloth] = useState<boolean>(false);

  useEffect(() => {
    (function (doc, win) {
      var docEl = doc.documentElement as any,
        isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

      docEl.dataset.dpr = dpr;

      var recalc = function () {
        var width = docEl.clientWidth;
        if (width / dpr > 750) {
          width = 750 * dpr;
        }
        docEl.style.fontSize = 100 * (width / 750) + 'px';
      };
      recalc();
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
    })(document, window);


    // (function () {
    //   $('.spring').addClass('hen');
    //   $('.spring').on('click', function () {
    //     $(this).toggleClass('cloth');
    //   })
    // })();
  });

  const clothFun = () => {
    setCloth(!cloth);
  }

  const henFun = () => {
    setHen(!hen);
  }


  return (
    <>
      <div className={`spring ${cloth ? 'cloth' : ''} ${hen ? 'hen' : ''}`} >
        <div className="s-1"></div>
        <div className="s-2"></div>
        <div className="s-3"></div>
        <div className="s-4"></div>
        <div className="s-5"></div>
        <div className="s-6"></div>
        <div className="s-7"></div>
        <div className="s-8"></div>
        <div className="s-9"></div>
        <div className="s-10"></div>
        <div className="s-11"></div>
        <div className="s-12"></div>
        <div className="s-13"></div>
        <div className="s-14"></div>
        <div className="s-15"></div>
        <div className="s-16"></div>
        <div className="s-17"></div>
        <div className="s-18"></div>
        <div className="s-19"></div>
        <div className="s-20"></div>
        <div className="s-21"></div>
        <div className="s-22"></div>
        <div className="s-23"></div>
        <div className="s-24"></div>
        <div className="s-25"></div>
        <div className="s-26"></div>
        <div className="s-27"></div>
        <div className="s-28"></div>
        <div className="s-29"></div>
        <div className="s-30"></div>
        <div className="s-31"></div>
        <div className="s-32"></div>
        <div className="s-33"></div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80vh' }}>
        <button onClick={henFun} style={{ margin: '0 10px', padding: '0 10px' }}>show</button>
        <button onClick={clothFun} style={{ margin: '0 10px', padding: '0 10px' }}>color</button>
      </div>
    </>
  )
}

export default Three;

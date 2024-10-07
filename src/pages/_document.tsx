import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href='/favicon.ico' sizes="any" />
                <link rel="canonical" href="https://bits-dance-studio.by" />
                <meta name="google-site-verification" content="JS5ICxnjld9PhoMXXzl31slK1Yp_Q_9LPoMTAL18MZ0" />
                <title>Студия танцев BIT`S – Уроки танцев в Речице для детей и взрослых</title>
                <meta name="description" content="Обучение деток от 2,5 до 17 лет. Приглашаем ваших малышей в наш танцевальный мир, где гибкость и красота танца сочетаются с физическим развитием и формированием личности. Наши занятия проходят в удобное время, в комфортном зале, специально оборудованном для детей. Мы уделяем внимание дисциплине и готовим ребят к участию в республиканских и международных конкурсах. Подарите вашему ребенку возможность раскрыть свой потенциал и стать частью нашей дружной танцевальной семьи!  В студии проходят занятия для взрослых, где вы сможете раскрыть свою энергию и женственность! Наши тренировки помогут вам развить гибкость и пластичность, а также также подарят комфорт и удовольствие от каждого занятия. Присоединяйтесь и наслаждайтесь танцами" />
                <meta name="keywords"
                    content="студия танцев, студия танцев речица, танцы, танцы речица, танцевальная студия, танцевальная студия речица, школа танцев, школа танцев речица, речица танцы, кей-поп, kpop, кпоп, стрит денс, street dance, растяжка, растяжка речица, речица гимнастика, гимнастика, танцы соло, парные танцы речица, парные танцы, латина, латиноамериканские танцы, латина речица, латиноамериканские танцы речица, денсхолл,dancehall, хай хилс, хай хилз, high heels, фрейм ап, стрип, frame up strip, вог, vogue, танцы для детей, танцы для детей речица, детские танцы, детские танцы речица, танцы для взрослых, сольные танцы, индивидуальные танцы, индивидуальные занятия, групповые танцы, занятия с детьми, занятия для детей, детская пластика, классические танцы, хореография" />

                <meta name="author" content="Студия танцев BIT`S" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Студия танцев BIT`S – Уроки танцев в Речице для детей и взрослых" />
                <meta property="og:description" content="Обучение деток от 2,5 до 17 лет. Приглашаем ваших малышей в наш танцевальный мир, где гибкость и красота танца сочетаются с физическим развитием и формированием личности. Наши занятия проходят в удобное время, в комфортном зале, специально оборудованном для детей. Мы уделяем внимание дисциплине и готовим ребят к участию в республиканских и международных конкурсах. Подарите вашему ребенку возможность раскрыть свой потенциал и стать частью нашей дружной танцевальной семьи!  В студии проходят занятия для взрослых, где вы сможете раскрыть свою энергию и женственность! Наши тренировки помогут вам развить гибкость и пластичность, а также также подарят комфорт и удовольствие от каждого занятия. Присоединяйтесь и наслаждайтесь танцами" />
                <meta property="og:image" content='../../public/images/bits-logo.png' />
                <meta property="og:url" content="https://bits-dance-studio.by" />
                <meta property="og:type" content="website" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9D0JPYYYXV"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-9D0JPYYYXV');`}}>
                </script>

                <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
                    (function(m,e,t,r,i,k,a){m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(98572270, "init", {
                        clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
   });
   `}} >
                </script>
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
let sample_data = [
    {
        Brand:"M7 By Metronaut",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/i/i/2/m-tracksuit01-m7-by-metronaut-original-imagggbhydqyszpy.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹399",
        actualprice:"₹<strike>1,599</strike>",
        offer:"75% off",
        size: "size",
        size_sml:"M, L, XXL"
    },
    {
        Brand:"Vitaan",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/a/x/l/l-na-wolftee01-vitaan-original-imagz7gwgy3yjrmx.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹349",
        actualprice:"₹<strike>1,299</strike>",
        offer:"73% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"BLIVE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/e/x/q/xxl-bylrnful-z117-tchbljog-j35tracksuit-blive-original-imagse5rbx7efuhm.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹429",
        actualprice:"₹<strike>1,999</strike",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, L, XL, XXL"
    },
    {
        Brand:"TRIPR",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/c/c/l/m-togrrnfuld73-tbljogj35tracksuit-tripr-original-imagsy326xbpeefm.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹439",
        actualprice:"₹<strike>1,999</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, L, XL, XXL"
    }, 
    {
        Brand:"Alan Jones",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/i/e/9/s-tsuit21-p07-beige-alan-jones-original-imag7wbpzyywbqsz-bb.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹1,199",
        actualprice:"₹<strike>2,999</strike>",
        offer:"60% off",
        size: "size",
        size_sml:"S, M, L, XXL, 3XL"
    },
    {
        Brand:"Pace International",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/1/2/f/xl-pi-kbdsp-5010a-pace-international-original-imagbjphmphpwpgr-bb.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹999",
        actualprice:"₹<strike>1,599</strike",
        offer:"37% off",
        size: "size",
        size_sml:"M, L, XXL"
    },
    {
        Brand:"VeBNoR",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/1/w/t/s-trs12-vebnor-original-imagsyu6r2bgu4v2.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹499",
        actualprice:"₹<strike>1,999</strike>",
        offer:"75% off",
        size: "size",
        size_sml:"S, M, L, XL, XXL"
    },
    {
        Brand:"JACK & JONES",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/u/g/4/m-297749402-jack-jones-original-imagkyfddggm373z.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹1,999",
        actualprice:"₹<strike>4,999</strike>",
        offer:"60% off",
        size: "size",
        size_sml:"S, M, L, XL, XXL"
    },
    {
        Brand:"Alan Jones",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/c/p/l/xxl-tsuit21-p04-bck-alan-jones-original-imag6gqgvgvc3vyh-bb.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹1,399",
        actualprice:"₹<strike>2,999</strike>",
        offer:"53% off",
        size: "size",
        size_sml:"M"
    },
    {
        Brand:"RUNNING MACHINE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/x/a/r/m-trasu-running-machine-original-imagtahurpjtvgz3.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹439",
        actualprice:"₹<strike>999</strike>",
        offer:"56% off",
        size: "size",
        size_sml:"S, M, L, XXL, 3XL"
    },
    {
        Brand:"M7 By Metronaut",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/b/e/d/l-teeshort-m7-by-metronaut-original-imaghyfhjhzzzehy.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹349",
        actualprice:"₹<strike>1,599</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, L, XXL,"
    },
    {
        Brand:"Madfrog",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/7/x/w/xl-dn-003-madfrog-original-imagqjdefrgwh4t2.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹494",
        actualprice:"₹<strike>1,200</strike>",
        offer:"58% off",
        size: "size",
        size_sml:"S, M, L, XXL,"
    },
    {
        Brand:"Vitaan",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/o/8/5/l-na-wolftee01-vitaan-original-imagz7gwbsmjpwgb.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹3,49",
        actualprice:"₹<strike>1,299</strike>",
        offer:"73% off",
        size: "size",
        size_sml:"S, M, L, XXL, 3XL"
    },
    {
        Brand:"Ruggstar",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/c/7/h/l-black-hh-ruggstar-original-imagqzf336ddgfdh.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹328",
        actualprice:"₹<strike>799</strike>",
        offer:"58% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"VIMAL JONNEY",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-track-suit/d/4/s/xxl-maroon-sw-rn-lower-02-vimal-jonney-men-original-imagg7gjgs5qdva4.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹703",
        actualprice:"₹<strike>3,398</strike>",
        offer:"79% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"M7 By Metronaut",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/e/8/s/m-teeshort-m7-by-metronaut-original-imaghyfhzwhvjpd5.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹349",
        actualprice:"₹<strike>1,599</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, L, XXL, 3XL"
    },
    {
        Brand:"M7 By Metronaut",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/y/r/a/l-m7hood-m7-by-metronaut-original-imagnjykgy75qpdj.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹399",
        actualprice:"₹<strike>1,599</strike>",
        offer:"75% off",
        size: "size",
        size_sml:"M"
    },
    {
        Brand:"BLIVE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/r/r/m/xs-bogrrnfulz55-tgyjogj35tracksuit-blive-original-imagsh2pvrydkng7.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹429",
        actualprice:"₹<strike>1,999</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, L, XL, XXL"
    },
    {
        Brand:"M7 By Metronaut",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/d/k/m/m-teetrack-m7-by-metronaut-original-imaghkfczmrwh2rj.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹399",
        actualprice:"₹<strike>1,599</strike>",
        offer:"75% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"Praume",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/z/8/j/m-plsplpblkts11-praume-original-imafyrhbvyjyhguj-bb.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹1,671",
        actualprice:"₹<strike>2,999</strike>",
        offer:"44% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"HPS Sports",
        img_src:"https://rukminim2.flixcart.com/image/612/612/l16rde80/track-suit/s/t/3/m-hpscwk859-hps-sports-original-imagcswjd747maqy.jpeg?q=70",
        names:"Striped Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹809",
        actualprice:"₹<strike>2,498</strike>",
        offer:"67% off",
        size: "size",
        size_sml:"M"
    },
    {
        Brand:"BLIVE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/t/y/a/l-bogrblrnfull-mz105-tbljog-j36tracksuit-bliive-original-imagtjkvgsu6nfnr.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹489",
        actualprice:"₹<strike>1,999</strike>",
        offer:"75% off",
        size: "size",
        size_sml:"XXL"
    },
    {
        Brand:"Mom's Cradle",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/8/0/s/xl-border-white-ts-momscradle-original-imags8mbpgfmzfau.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹489",
        actualprice:"₹<strike>1,499</strike>",
        offer:"67% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"BLIVE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/3/r/z/3xl-bbgrnful-z62-tbljog-j37tracksuit-blive-original-imagskzgjzyeqxub.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹429",
        actualprice:"₹<strike>1,99</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"M, XL, XXL"
    },
    {
        Brand:"M7 By Metronaut",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/g/p/d/m-teeshort-m7-by-metronaut-original-imaghyfhjmhm95gw.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹349",
        actualprice:"₹<strike>1,599</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"Ruggstar",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-track-suit/f/i/h/m-black-jeep-m-19-ruggstar-men-original-imaggnx8vce82at3.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹325",
        actualprice:"₹<strike>799</strike>",
        offer:"59% off",
        size: "size",
        size_sml:"M"
    },
    {
        Brand:"TRIPR",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/8/b/s-twtrnfuld106-tbljogtracksuit-tripr-original-imagu9btyhyfxcpv.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹469",
        actualprice:"₹<strike>1,999</strike>",
        offer:"76% off",
        size: "size",
        size_sml:"S, L, XXL"
    },
    {
        Brand:"Veltick",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/2/s/g/xl-vltmj-white-black-xl-veltick-original-imaggybwm7ezhvhv.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹817",
        actualprice:"₹<strike>1,999</strike>",
        offer:"59% off",
        size: "size",
        size_sml:"S, M, XL, 3XL"
    },
    {
        Brand:"Chauhan",
        img_src:"https://rukminim2.flixcart.com/image/612/612/l5jxt3k0/track-suit/p/q/s/3xl-ch-730-s-chauhan-original-imagg7482uuhgw6d.jpeg?q=70",
        names:"Striped Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹470",
        actualprice:"₹<strike>1,999</strike>",
        offer:"76% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"TRIPR",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/8/m/i/l-tblrnfuld73-tbljogj35tracksuit-tripr-original-imagsy32amzuudzy.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹439",
        actualprice:"₹<strike>1,999</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"Chrome & Coral",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/j/u/0/l-set5035-grey-chrome-coral-original-imaghnnqsmcw4nxc.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹494",
        actualprice:"₹<strike>1,500</strike>",
        offer:"67% off",
        size: "size",
        size_sml:"S, L, XL, XXL"
    },
    {
        Brand:"M7 By Metronaut",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/g/z/o/xl-na-hoodnshort01-m7-by-metronaut-original-imagz79qwh8hvsfh.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹399",
        actualprice:"₹<strike>1,299</strike>",
        offer:"69% off",
        size: "size",
        size_sml:"M,XL"
    },
    {
        Brand:"Chrome & Coral",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/w/s/g/xxl-set-sht8011-abstract-blue-bxr11-abstract-chrome-coral-original-imagm8ey4keezn6u.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹487",
        actualprice:"₹<strike>1,500</strike>",
        offer:"67% off",
        size: "size",
        size_sml:"S, M, L, XL, XXL"
    },
    {
        Brand:"BLIVE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/c/t/k/xl-bblylrnfull-mz115-tbljog-j36tracksuit-bliive-original-imagtjkvgbfqrkyr.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹489",
        actualprice:"<strike>1,999</strike>",
        offer:"75% off",
        size: "size",
        size_sml:"S, M, L, XXL"
    },
    {
        Brand:"BLIVE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/h/l/k/xxl-bogrrnful-z117-tgyjog-j36tracksuit-blive-original-imagse5rgf7hjtmz.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹429",
        actualprice:"₹<strike>1,999</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"Vitaan",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/p/1/b/s-king-tracksuit-vitaan-original-imagrg9hrznssmxx.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹399",
        actualprice:"₹<strike>1,599</strike>",
        offer:"75% off",
        size: "size",
        size_sml:"S, M, XL, 3XL"
    },
    {
        Brand:"TRIPR",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/2/3xl-togrrnful-z91-tgyjog-j35tracksuit-tripr-original-imagsdb9tfjq2g5v.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹439",
        actualprice:"₹<strike>1,999</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, L, XL, XXL"
    },
    {
        Brand:"Veltick",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/7/f/o/xl-vltmj-red-black-xl-veltick-original-imaggkvydnyuuggz.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹841",
        actualprice:"₹<strike>1,999</strike>",
        offer:"57% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"Vitaan",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/b/c/v/l-king-tracksuit-vitaan-original-imagrg9hgfuftbsr.jpeg?q=70",
        names:"Solid Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹349",
        actualprice:"₹<strike>1,599</strike>",
        offer:"78% off",
        size: "size",
        size_sml:"S, M, XL, XXL"
    },
    {
        Brand:"Try This",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/q/w/0/m-65211155-try-this-original-imagqe2hcxr9nn7t.jpeg?q=70",
        names:"Printed Men Track Suit",
        img_assured :"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹359",
        actualprice:"₹<strike>1,299</strike>",
        offer:"72% off",
        size: "size",
        size_sml:"M"
    },
  

];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product(){

  collection.map((element)=>{
      
      let box = document.createElement("div");
      let flip = document.createElement("div");
      let innerbox = document.createElement("div");
      let sizebox = document.createElement("div");
  let price1 = document.createElement("span");
   price1.innerHTML = element.price
   price1.className = "price1"
  let price2 = document.createElement("span");
  price2.innerHTML = element.actualprice
  price2.className = "price2"
  let names = document.createElement("p");
  names.innerHTML = element.names;
  names.className = "names"
  let img_assured = document.createElement("img");
  img_assured.src = element.img_assured;
  img_assured.className = "img_assured"
  let offer = document.createElement("p");
  offer.innerHTML = element.offer;
  offer.className = "offer"
  let size = document.createElement("p");
  size.innerHTML = element.size;
  size.className = "size"
  let size_sml = document.createElement("p");
  size_sml.innerHTML = element.size_sml;
  size_sml.className = "size_sml"

  flip.append(names,img_assured);
  flip.className = "flip"

  innerbox.append(price1, price2,offer);
  innerbox.className = "innerbox"

  sizebox.append(size,size_sml);
  sizebox.className = "sizebox"

let avatar = document.createElement("img");
avatar.src = element.img_src;
avatar.className = "avatar"
let brand = document.createElement("p");
brand.innerHTML = element.Brand;
brand.className = "Brand"

 box.append(avatar,brand,flip,innerbox,sizebox);
 box.className = "box"
 document.getElementById("collection").append(box);

  })
}

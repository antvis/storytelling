import React from 'react';

type LogoProps = {
  style?: React.CSSProperties;
}

/**
 * Header.LOGO
 */
export const Logo: React.FC<LogoProps> = ({ style }) => {
  return (
    <svg width="94" height="28" version="1.1" viewBox="0 0 94 28" style={style}>
      <title>logo</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <linearGradient id="linearGradient-1" x1=".004%" x2="100.131%" y1="49.993%" y2="49.993%">
          <stop offset="0%" stopColor="#6500FF"></stop>
          <stop offset="16%" stopColor="#6A09FF"></stop>
          <stop offset="43%" stopColor="#7623FF"></stop>
          <stop offset="77%" stopColor="#8A4CFF"></stop>
          <stop offset="99%" stopColor="#996BFF"></stop>
        </linearGradient>
        <linearGradient id="linearGradient-2" x1="50.004%" x2="50.004%" y1="100.012%" y2="0%">
          <stop offset="0%" stopColor="#6500FF"></stop>
          <stop offset="16%" stopColor="#6909FF"></stop>
          <stop offset="43%" stopColor="#7523FF"></stop>
          <stop offset="77%" stopColor="#894CFF"></stop>
          <stop offset="99%" stopColor="#976BFF"></stop>
        </linearGradient>
        <linearGradient id="linearGradient-3" x1="49.854%" x2="49.854%" y1="100.255%" y2="0%">
          <stop offset="0%" stopColor="#FF6E06"></stop>
          <stop offset="28%" stopColor="#FF770C"></stop>
          <stop offset="75%" stopColor="#FF911C"></stop>
          <stop offset="100%" stopColor="#FFA126"></stop>
        </linearGradient>
        <linearGradient id="linearGradient-4" x1="57351%" x2="57351%" y1="59860%" y2="35023%">
          <stop offset="0%" stopColor="#FF6E06"></stop>
          <stop offset="28%" stopColor="#FF770C"></stop>
          <stop offset="75%" stopColor="#FF911C"></stop>
          <stop offset="100%" stopColor="#FFA126"></stop>
        </linearGradient>
      </defs>
      <g
        id="首页"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-40.000000, -21.000000)"
      >
        <g id="logo" fillRule="nonzero" transform="translate(40.000000, 21.000000)">
          <g id="text" fill="#000" transform="translate(40.000000, 4.000000)">
            <path
              id="Shape"
              d="M8.7405,1.2915 C8.51971803,0.727507979 7.97591631,0.356402076 7.37025,0.356402076 C6.76458369,0.356402076 6.22078197,0.727507979 6,1.2915 L0.0915,16.224 C0.303214856,16.7668034 0.833635444,17.1176139 1.416,17.1 C1.99787286,17.1149847 2.52631953,16.7624868 2.736,16.2195 L4.236,12.1845 L10.464,12.1845 L11.964,16.2195 C12.1824954,16.7696588 12.7145414,17.1308265 13.3065,17.1308265 C13.8984586,17.1308265 14.4305046,16.7696588 14.649,16.2195 L8.7405,1.2915 Z M4.875,10.3245 L7.3125,3.7755 L7.38,3.7755 L9.8175,10.3245 L4.875,10.3245 Z"
            ></path>
            <path
              id="Shape"
              d="M23.616,4.8675 C21.711,4.8675 20.3625,5.5605 19.6155,6.885 L19.5705,6.885 L19.5705,4.992 C19.3939707,4.49572722 18.9242345,4.16424813 18.3975,4.16424813 C17.8707655,4.16424813 17.4010293,4.49572722 17.2245,4.992 L17.2245,16.23 C17.3727212,16.7871906 17.8771818,17.1750009 18.45375,17.1750009 C19.0303182,17.1750009 19.5347788,16.7871906 19.683,16.23 L19.683,9.741 C19.683,7.971 20.907,6.792 22.7655,6.792 C24.5655,6.792 25.542,7.7445 25.542,9.4515 L25.542,16.23 C25.6902212,16.7871906 26.1946818,17.1750009 26.77125,17.1750009 C27.3478182,17.1750009 27.8522788,16.7871906 28.0005,16.23 L28.0005,9.03 C28.002,6.4395 26.3355,4.8675 23.616,4.8675 Z"
            ></path>
            <path
              id="Shape"
              d="M37.164,15.2175 C37.005,15.2385 36.5865,15.27 36.3255,15.27 C35.2935,15.27 34.818,14.82 34.818,13.842 L34.818,7.5555 L37.176,7.5555 C37.4674337,7.35650372 37.6417542,7.0263925 37.6417542,6.6735 C37.6417542,6.3206075 37.4674337,5.99049628 37.176,5.7915 L37.176,5.7795 L34.818,5.7795 L34.818,3.2625 L34.809,3.2625 C34.5697886,2.81087163 34.1005678,2.5284255 33.5895,2.5284255 C33.0784322,2.5284255 32.6092114,2.81087163 32.37,3.2625 L32.37,5.787 L30.669,5.787 L30.669,5.8035 C30.3813594,6.00305662 30.2097838,6.33091436 30.2097838,6.681 C30.2097838,7.03108564 30.3813594,7.35894338 30.669,7.5585 L32.37,7.5585 L32.37,14.0655 C32.37,16.239 33.3225,17.097 35.7825,17.097 C36.246017,17.1013951 36.708959,17.063235 37.1655,16.983 C37.4531479,16.7817619 37.6244786,16.4528028 37.6244786,16.10175 C37.6244786,15.7506972 37.4531479,15.4217381 37.1655,15.2205 L37.164,15.2175 Z"
            ></path>
            <path
              id="Shape"
              d="M53.9085,1.041 C53.6915775,0.484686746 53.1556096,0.118403837 52.5585,0.118403837 C51.9613904,0.118403837 51.4254225,0.484686746 51.2085,1.041 L46.7325,13.365 L46.665,13.365 L42.21,1.041 L42.219,1.041 C41.991677,0.479831031 41.4467137,0.112610372 40.84125,0.112610372 C40.2357863,0.112610372 39.690823,0.479831031 39.4635,1.041 L45.3,15.9735 C45.402,16.5915 45.9855,17.067 46.692,17.067 C47.3985,17.067 47.9805,16.593 48.084,15.9735 L53.9085,1.041 Z"
            ></path>
          </g>
          <g id="Shape">
            <path
              fill="url(#linearGradient-1)"
              d="M1.96144278,0.00379393843 C1.93278766,0.00379393843 1.90413254,0.00379393843 1.87375812,0.00597764254 C1.82628614,0.00725146994 1.80317101,0.00888924802 1.78005588,0.0108909768 C1.73258391,0.015258385 1.70450189,0.0186249288 1.67661091,0.0226283864 C1.63448789,0.0291794987 1.61271,0.0329099932 1.59093211,0.0370954261 C1.53906635,0.0471950576 1.51213054,0.0529272809 1.48548128,0.0594783932 C1.453101,0.0676672836 1.4290307,0.0742183959 1.40524695,0.0810424713 C1.36006738,0.0949635849 1.34096397,0.101150747 1.32186056,0.107519884 C1.2750572,0.123715689 1.25079587,0.132814456 1.22672557,0.142459149 C1.184316,0.16001977 1.16769603,0.167116808 1.15107606,0.174395822 L1.12242094,0.187225084 C1.10331753,0.196323851 1.08421412,0.205422618 1.06511071,0.214521385 L1.03387663,0.230899166 C1.01811632,0.239361019 1.002356,0.247822873 0.986882238,0.256557689 L0.955934712,0.274573248 L0.917250303,0.29832103 L0.888595186,0.316882515 C0.869491775,0.329438814 0.850388363,0.342268075 0.831284952,0.3553703 L0.797758465,0.38075586 L0.76738404,0.40341179 L0.734717207,0.42879735 L0.706062089,0.452545133 C0.686958678,0.468013037 0.66871492,0.483844892 0.651330815,0.500040697 L0.627833619,0.521331812 C0.616562606,0.531704407 0.605482628,0.542258976 0.594593683,0.552995522 L0.57424855,0.573194785 C0.550942388,0.596669604 0.528304845,0.620690349 0.506335922,0.64525702 C0.4888563,0.66518332 0.477967356,0.677739619 0.467364963,0.69056888 L0.451891199,0.709403328 C0.441288806,0.722505553 0.430686412,0.73669963 0.420657121,0.748710002 C0.392766141,0.78592396 0.373089627,0.813220261 0.354177249,0.840698538 L0.343288305,0.856803356 C0.333736599,0.871179408 0.324184893,0.885737435 0.314633188,0.900477438 L0.304317345,0.917401145 L0.296293912,0.931049295 L4.0804887,3.1453528 L4.88168578,4 C4.79792689,3.87330151 4.79075687,3.71385419 4.86283506,3.58079687 C4.93491326,3.44773955 5.07548957,3.36091705 5.23242441,3.35253173 L18.126081,3.35253173 C18.1716426,3.35580729 18.2172042,3.35799099 18.2636255,3.35799099 C19.2247383,3.34437937 19.997179,2.59972948 19.9999923,1.68409514 C20.0028056,0.768460793 19.234954,0.0195165058 18.2739414,0.000545926027 L1.96144278,0.00379393843 Z"
            ></path>
            <path
              fill="url(#linearGradient-2)"
              d="M22.7438388,11.3151867 L16.3508566,22.3257033 C16.274965,22.4547197 16.1378066,22.5359862 15.9875806,22.5409448 C15.8373546,22.5459034 15.6950786,22.4738603 15.6107503,22.3501325 L11.5484958,15.3552589 C11.5151833,15.2756059 11.4759174,15.1985462 11.4310276,15.1247266 L4.67293385,3.45883542 C4.28425,2.75990644 4.28254958,1.91173703 4.66842791,1.21127254 C5.05430624,0.510808047 5.77401391,0.0556169131 6.57558023,0.00506221373 L1.98726011,0.000850295183 C1.70028191,-0.00773775303 1.4151096,0.0488237358 1.15340515,0.166238297 C1.11086057,0.18570672 1.07725788,0.202180002 1.04412582,0.219589265 C0.955459897,0.268541118 0.934752357,0.281176874 0.914233068,0.29428062 L0.814836879,0.361671317 C0.763726906,0.399952977 0.748102127,0.412307938 0.732665597,0.424850095 C0.693227147,0.457796658 0.67910837,0.470151619 0.665177844,0.482693776 C0.629598526,0.514985152 0.611526491,0.532394415 0.594019208,0.550084473 C0.559381142,0.585183794 0.543756362,0.601844272 0.528508083,0.618879143 C0.501964783,0.648362572 0.484739875,0.668860576 0.467797343,0.689639374 C0.436736033,0.727546641 0.420923003,0.748325439 0.405392349,0.769385032 C0.385908437,0.795779721 0.370095407,0.819085671 0.354564752,0.842672415 C0.3274567,0.884230011 0.312490797,0.908378344 0.298089644,0.933369061 C-0.0900333359,1.52939569 -0.081932791,2.25296668 0.269004964,2.83322512 L0.435324156,3.12188194 L14.3089991,27.0174998 C14.4452697,27.2688135 14.6373487,27.4859373 14.870644,27.6523763 C14.9087647,27.679239 14.9399202,27.6999242 14.9717345,27.719767 C15.0597415,27.7702164 15.0811079,27.781729 15.1027567,27.7927736 L15.2100594,27.8435974 C15.2692642,27.8684945 15.2880892,27.8757952 15.3069142,27.8829087 C15.3553887,27.9000371 15.3731784,27.9060274 15.3910621,27.9118305 C15.4370894,27.926151 15.4610913,27.9328901 15.4853756,27.9393484 C15.5335677,27.9512353 15.5558753,27.9563832 15.5782771,27.9612503 C15.6169626,27.9693934 15.6435059,27.9738861 15.6700492,27.978098 C15.7186178,27.9851179 15.7445963,27.9887682 15.7708572,27.9912954 C15.8041776,27.9941033 15.8324151,27.9960689 15.8606527,27.9977536 C15.9100684,27.9977536 15.9383059,28 15.9665435,28 C16.0055113,28 16.0292309,28 16.052668,27.9983152 C16.1029309,27.9969113 16.1286271,27.9949457 16.1551704,27.9921378 C16.1882083,27.9893298 16.2164458,27.9856795 16.2424244,27.9817484 C16.2892987,27.9744477 16.3133007,27.9702358 16.3370202,27.9654623 C16.3740114,27.9581616 16.3997076,27.9519841 16.4254037,27.9458066 C16.4708662,27.9339197 16.4916679,27.928023 16.5123754,27.9216583 C16.5536022,27.9090226 16.5773218,27.9008795 16.6010413,27.8924557 C16.6464097,27.8759824 16.6634463,27.8692433 16.6803889,27.8621299 C16.7264161,27.842755 16.7478766,27.833208 16.7690548,27.8239418 L16.8402134,27.7882809 C16.8972533,27.7573935 16.9127839,27.7486889 16.9277498,27.7397034 C17.014345,27.6850421 17.0367468,27.6697856 17.0587721,27.6540611 C17.0796679,27.6390854 17.1047052,27.6202721 17.133884,27.5976214 C17.1766168,27.563926 17.2177495,27.5284523 17.2572821,27.4912002 C17.3084862,27.4427164 17.3481129,27.401346 17.3857629,27.3581036 C17.4284017,27.3092454 17.4652987,27.2624463 17.500125,27.2137752 C17.5353279,27.1645426 17.5680834,27.1136251 17.5983917,27.061023 L17.9739512,26.4216537 L18.0558401,26.2812564 L25.73589,13.0558322 C26.070421,12.5242035 26.0883782,11.8538976 25.7827856,11.3053117 C25.4771931,10.7567258 24.8962203,10.4163314 24.2655606,10.4163633 C23.6317102,10.4178657 23.048049,10.7619023 22.7438388,11.3151867 Z"
            ></path>
            <path
              fill="url(#linearGradient-3)"
              d="M30.1437101,0 L23.6847716,0 C22.749424,0.0183223345 22,0.84716472 22,1.86331122 C22,2.87945772 22.749424,3.7083001 23.6847716,3.72662244 C23.7299585,3.72662244 23.7743086,3.72419862 23.8186587,3.72056289 L26.7432558,3.72056289 C26.957527,3.75250166 27.1172208,3.95131508 27.117303,4.1862392 C27.1173323,4.23951108 27.1089352,4.29239242 27.0924781,4.34257556 L25.5505446,7.24358449 C25.0967914,8.1471655 25.403314,9.27921269 26.235182,9.77208267 C27.0670501,10.2649526 28.1092519,9.93200556 28.5630051,9.02842455 L31.7528661,3.02795647 C31.782061,2.97321855 31.8089314,2.91686475 31.8334773,2.85889507 L31.8365456,2.85132063 C31.8516079,2.81516532 31.8657404,2.77850505 31.8789432,2.74133982 L31.8811746,2.73558325 C31.8870322,2.71861651 31.8928898,2.7013468 31.8984684,2.68407709 L31.9068363,2.65741507 C31.9142745,2.63337886 31.9212478,2.60903968 31.9277562,2.58439751 C31.9316612,2.57046055 31.9352873,2.55622061 31.9389135,2.54228365 C31.9425396,2.52834669 31.9453289,2.51531866 31.9483971,2.50198765 C31.9514654,2.48865664 31.9559283,2.46714524 31.9595544,2.44957255 C31.9620648,2.43715048 31.9645752,2.4247284 31.9668066,2.41230633 C31.9710836,2.38867409 31.9749886,2.36483986 31.9785217,2.34080365 C31.9800094,2.33090639 31.981404,2.32080714 31.9827057,2.31050591 C31.9860529,2.28505581 31.9891211,2.25930272 31.9916315,2.23354964 C31.9916315,2.22991391 31.9916315,2.22658116 31.9916315,2.22294543 C31.9944208,2.19264769 31.9963734,2.16234995 31.997768,2.13387007 C31.997768,2.12619464 31.997768,2.11841822 31.997768,2.1105408 C31.997768,2.08024306 31.9999995,2.04994532 31.9999995,2.01964757 C32.00077,0.905181759 31.1697259,0.00100355849 30.1437101,0 Z"
            ></path>
            <path
              fill="url(#linearGradient-4)"
              d="M19.8878401,7.40978464 C19.7383064,7.15620152 19.4618641,6.99998235 19.1626937,7.00000003 L12.8373895,7.00000003 C12.5382281,6.9999242 12.261761,7.15608029 12.1121725,7.40962229 C11.962584,7.66316428 11.9626109,7.97555472 12.112243,8.22907204 L15.2751831,13.5903738 C15.4247323,13.8438523 15.7011,14 16.0001856,14 C16.2992712,14 16.5756388,13.8438523 16.725188,13.5903738 L19.8878401,8.22935388 C20.0373866,7.97586547 20.0373866,7.66355488 19.8878401,7.41006648 L19.8878401,7.40978464 Z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

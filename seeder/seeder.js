//ejecutar en la terminal:  node seeder/seeder.js

const mongoose = require("mongoose");
const { Case, User, Office, Device } = require("../models");

async function seedData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fixit", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const offices = [
      {
        name: "Globant Tower",
        address: {
          street: "Carlos M. Della Paolera 261",
          city: "Buenos Aires",
          state: "CABA",
          country: "Argentina",
        },
        location: [1, 2],
        map: `<svg
        width="1110"
        height="1160"
        viewBox="0 0 1110 1160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1110" height="1160" fill="#E5E5E5" />
        <rect
          id="Rectangle Main"
          width="1110"
          height="1160"
          rx="34"
          fill="white"
        />
        <rect
          id="Rectangle Main"
          x="67"
          y="40"
          width="967"
          height="401"
          rx="8"
          fill="#D7E3ED"
        />
      
        <g id="dsks">
          <rect
            id="Rectangle 130"
            x="192.298"
            y="120.748"
            width="73"
            height="40"
            transform="rotate(35 192.298 120.748)"
            fill="#AFC0CD"
          />
      
          <rect
            id="Rectangle 136"
            x="186.916"
            y="117.943"
            width="83.9497"
            height="40"
            transform="rotate(125 186.916 117.943)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137"
            x="419.272"
            y="282.691"
            width="83.9497"
            height="40"
            transform="rotate(125 419.272 282.691)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131"
            x="256.298"
            y="165.748"
            width="73"
            height="40"
            transform="rotate(35 256.298 165.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132"
            x="320.298"
            y="211.748"
            width="73"
            height="40"
            transform="rotate(35 320.298 211.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133"
            x="166.297"
            y="157.748"
            width="73"
            height="40"
            transform="rotate(35 166.297 157.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134"
            x="230.298"
            y="203.748"
            width="73"
            height="40"
            transform="rotate(35 230.298 203.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135"
            x="295.298"
            y="249.748"
            width="73"
            height="40"
            transform="rotate(35 295.298 249.748)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_2">
          <rect
            id="Rectangle 130_2"
            x="468.299"
            y="120.748"
            width="73"
            height="40"
            transform="rotate(35 468.299 120.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_2"
            x="462.917"
            y="117.943"
            width="83.9497"
            height="40"
            transform="rotate(125 462.917 117.943)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_2"
            x="695.274"
            y="282.691"
            width="83.9497"
            height="40"
            transform="rotate(125 695.274 282.691)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_2"
            x="532.299"
            y="165.748"
            width="73"
            height="40"
            transform="rotate(35 532.299 165.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_2"
            x="596.299"
            y="211.748"
            width="73"
            height="40"
            transform="rotate(35 596.299 211.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_2"
            x="442.299"
            y="157.748"
            width="73"
            height="40"
            transform="rotate(35 442.299 157.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_2"
            x="506.299"
            y="203.748"
            width="73"
            height="40"
            transform="rotate(35 506.299 203.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_2"
            x="571.299"
            y="249.748"
            width="73"
            height="40"
            transform="rotate(35 571.299 249.748)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_3">
          <rect
            id="Rectangle 130_3"
            x="742.299"
            y="109.748"
            width="73"
            height="40"
            transform="rotate(35 742.299 109.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_3"
            x="736.917"
            y="106.943"
            width="83.9497"
            height="40"
            transform="rotate(125 736.917 106.943)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_3"
            x="969.274"
            y="271.691"
            width="83.9497"
            height="40"
            transform="rotate(125 969.274 271.691)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_3"
            x="806.299"
            y="154.748"
            width="73"
            height="40"
            transform="rotate(35 806.299 154.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_3"
            x="870.299"
            y="200.748"
            width="73"
            height="40"
            transform="rotate(35 870.299 200.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_3"
            x="716.299"
            y="146.748"
            width="73"
            height="40"
            transform="rotate(35 716.299 146.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_3"
            x="780.299"
            y="192.748"
            width="73"
            height="40"
            transform="rotate(35 780.299 192.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_3"
            x="845.299"
            y="238.748"
            width="73"
            height="40"
            transform="rotate(35 845.299 238.748)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_4">
          <rect
            id="Rectangle 130_4"
            x="749.166"
            y="557.019"
            width="73"
            height="40"
            transform="rotate(-0.585194 749.166 557.019)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_4"
            x="743.157"
            y="557.869"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 743.157 557.869)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_4"
            x="1027.99"
            y="556.64"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 1027.99 556.64)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_4"
            x="827.4"
            y="556.373"
            width="73"
            height="40"
            transform="rotate(-0.585192 827.4 556.373)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_4"
            x="906.216"
            y="556.54"
            width="73"
            height="40"
            transform="rotate(-0.585195 906.216 556.54)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_4"
            x="749.552"
            y="602.239"
            width="73"
            height="40"
            transform="rotate(-0.585194 749.552 602.239)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_4"
            x="828.369"
            y="602.406"
            width="73"
            height="40"
            transform="rotate(-0.585192 828.369 602.406)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_4"
            x="907.998"
            y="601.992"
            width="73"
            height="40"
            transform="rotate(-0.585195 907.998 601.992)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_5">
          <rect
            id="Rectangle 130_5"
            x="142.166"
            y="966.019"
            width="73"
            height="40"
            transform="rotate(-0.585194 142.166 966.019)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_5"
            x="136.157"
            y="966.869"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 136.157 966.869)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_5"
            x="420.99"
            y="965.64"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 420.99 965.64)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_5"
            x="220.4"
            y="965.373"
            width="73"
            height="40"
            transform="rotate(-0.585192 220.4 965.373)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_5"
            x="299.216"
            y="965.54"
            width="73"
            height="40"
            transform="rotate(-0.585195 299.216 965.54)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_5"
            x="142.552"
            y="1011.24"
            width="73"
            height="40"
            transform="rotate(-0.585194 142.552 1011.24)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_5"
            x="221.369"
            y="1011.41"
            width="73"
            height="40"
            transform="rotate(-0.585192 221.369 1011.41)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_5"
            x="300.998"
            y="1010.99"
            width="73"
            height="40"
            transform="rotate(-0.585195 300.998 1010.99)"
            fill="#AFC0CD"
          />
        </g>
        <rect
          id="Rectangle 138_2"
          x="133"
          y="542"
          width="73"
          height="40"
          transform="rotate(90 133 542)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 139"
          x="133"
          y="620"
          width="73"
          height="40"
          transform="rotate(90 133 620)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 140"
          x="133"
          y="698"
          width="73"
          height="40"
          transform="rotate(90 133 698)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 141"
          x="133"
          y="776"
          width="73"
          height="40"
          transform="rotate(90 133 776)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 142"
          x="133"
          y="542"
          width="73"
          height="40"
          transform="rotate(90 133 542)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 143"
          x="133"
          y="620"
          width="73"
          height="40"
          transform="rotate(90 133 620)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 144"
          x="133"
          y="698"
          width="73"
          height="40"
          transform="rotate(90 133 698)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 145"
          x="133"
          y="776"
          width="73"
          height="40"
          transform="rotate(90 133 776)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 146"
          x="1034"
          y="788"
          width="73"
          height="40"
          transform="rotate(90 1034 788)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 147"
          x="1034"
          y="866"
          width="73"
          height="40"
          transform="rotate(90 1034 866)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 148"
          x="1034"
          y="944"
          width="73"
          height="40"
          transform="rotate(90 1034 944)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 149"
          x="1034"
          y="1022"
          width="73"
          height="40"
          transform="rotate(90 1034 1022)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 150"
          x="1034"
          y="788"
          width="73"
          height="40"
          transform="rotate(90 1034 788)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 151"
          x="1034"
          y="866"
          width="73"
          height="40"
          transform="rotate(90 1034 866)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 152"
          x="1034"
          y="944"
          width="73"
          height="40"
          transform="rotate(90 1034 944)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 153"
          x="1034"
          y="1022"
          width="73"
          height="40"
          transform="rotate(90 1034 1022)"
          fill="#AFC0CD"
        />
        <g id="Group 2">
          <line
            id="Line 14"
            x1="447"
            y1="538.982"
            x2="448"
            y2="814.982"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <line
            id="Line 15"
            x1="418.026"
            y1="849"
            x2="226.026"
            y2="850"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Line 16"
            d="M448 812L447.5 819L445 826.5L443 831.5L440 836.5L435 842L429 846L422 848.5L415 849"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Ellipse 7"
            d="M407 599C407 590.858 405.396 582.796 402.281 575.274C399.165 567.751 394.598 560.917 388.841 555.159C383.083 549.402 376.249 544.835 368.726 541.719C361.204 538.604 353.142 537 345 537L345 599H407Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 8"
            d="M343 537C334.858 537 326.796 538.604 319.274 541.719C311.751 544.835 304.917 549.402 299.159 555.159C293.402 560.917 288.835 567.751 285.719 575.274C282.604 582.796 281 590.858 281 599L343 599L343 537Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 9"
            d="M281 601C281 609.142 282.604 617.204 285.719 624.726C288.835 632.249 293.402 639.083 299.159 644.841C304.917 650.598 311.751 655.165 319.274 658.281C326.796 661.396 334.858 663 343 663L343 601L281 601Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 10"
            d="M345 663C353.142 663 361.204 661.396 368.726 658.281C376.249 655.165 383.083 650.598 388.841 644.841C394.598 639.083 399.165 632.249 402.281 624.726C405.396 617.204 407 609.142 407 601L345 601L345 663Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 11"
            d="M405 751C405 742.858 403.396 734.796 400.281 727.274C397.165 719.751 392.598 712.917 386.841 707.159C381.083 701.402 374.249 696.835 366.726 693.719C359.204 690.604 351.142 689 343 689L343 751H405Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 12"
            d="M341 689C332.858 689 324.796 690.604 317.274 693.719C309.751 696.835 302.917 701.402 297.159 707.159C291.402 712.917 286.835 719.751 283.719 727.274C280.604 734.796 279 742.858 279 751L341 751L341 689Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 13"
            d="M279 753C279 761.142 280.604 769.204 283.719 776.726C286.835 784.249 291.402 791.083 297.159 796.841C302.917 802.598 309.751 807.165 317.274 810.281C324.796 813.396 332.858 815 341 815L341 753L279 753Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 14"
            d="M343 815C351.142 815 359.204 813.396 366.726 810.281C374.249 807.165 381.083 802.598 386.841 796.841C392.598 791.083 397.165 784.249 400.281 776.726C403.396 769.204 405 761.142 405 753L343 753L343 815Z"
            fill="#D7DFE5"
          />
        </g>
        <g id="Group 3">
          <line
            id="Line 14_2"
            x1="697.004"
            y1="1096.02"
            x2="696.539"
            y2="820.018"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <line
            id="Line 15_2"
            x1="726.578"
            y1="786.058"
            x2="918.58"
            y2="785.43"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Line 16_2"
            d="M696.533 823L697.046 816.001L699.561 808.506L701.57 803.51L704.58 798.516L709.591 793.025L715.599 789.037L722.603 786.551L729.604 786.064"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Ellipse 7_2"
            d="M737.12 1036.08C737.104 1044.22 738.692 1052.29 741.793 1059.81C744.895 1067.34 749.448 1074.19 755.194 1079.95C760.94 1085.72 767.766 1090.3 775.282 1093.43C782.799 1096.56 790.858 1098.18 799 1098.2L799.12 1036.2L737.12 1036.08Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 8_2"
            d="M801 1098.2C809.142 1098.22 817.207 1096.63 824.735 1093.53C832.263 1090.43 839.107 1085.87 844.875 1080.13C850.644 1074.38 855.224 1067.56 858.354 1060.04C861.485 1052.52 863.104 1044.47 863.12 1036.32L801.12 1036.2L801 1098.2Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 9_2"
            d="M863.124 1034.32C863.14 1026.18 861.552 1018.12 858.45 1010.59C855.349 1003.06 850.795 996.216 845.049 990.448C839.303 984.679 832.477 980.099 824.961 976.969C817.445 973.838 809.386 972.219 801.244 972.203L801.124 1034.2L863.124 1034.32Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 10_2"
            d="M799.244 972.199C791.102 972.184 783.037 973.772 775.509 976.873C767.98 979.974 761.137 984.528 755.368 990.274C749.6 996.02 745.02 1002.85 741.889 1010.36C738.759 1017.88 737.14 1025.94 737.124 1034.08L799.124 1034.2L799.244 972.199Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 11_2"
            d="M739.414 884.083C739.399 892.225 740.987 900.291 744.088 907.819C747.189 915.347 751.743 922.191 757.489 927.959C763.235 933.727 770.061 938.307 777.577 941.438C785.093 944.568 793.152 946.187 801.294 946.203L801.414 884.203L739.414 884.083Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 12_2"
            d="M803.294 946.207C811.436 946.223 819.501 944.635 827.03 941.534C834.558 938.432 841.401 933.879 847.17 928.133C852.938 922.387 857.518 915.561 860.649 908.045C863.779 900.528 865.398 892.469 865.414 884.327L803.414 884.207L803.294 946.207Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 13_2"
            d="M865.418 882.327C865.434 874.185 863.846 866.12 860.745 858.592C857.644 851.064 853.09 844.22 847.344 838.452C841.598 832.683 834.772 828.103 827.256 824.973C819.74 821.842 811.68 820.223 803.538 820.207L803.418 882.207L865.418 882.327Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 14_2"
            d="M801.538 820.203C793.397 820.188 785.331 821.776 777.803 824.877C770.275 827.978 763.431 832.532 757.663 838.278C751.894 844.024 747.314 850.85 744.184 858.366C741.054 865.882 739.434 873.941 739.418 882.083L801.418 882.203L801.538 820.203Z"
            fill="#D7DFE5"
          />
        </g>
      </svg>`,
      },
      {
        name: "La Docta",
        address: {
          street: "Av. Colón 3440",
          city: "Barrio Alto Alberdi",
          state: "Cordoba",
          country: "Argentina",
        },
        location: [2, 3],
        map: `<svg width="1110" height="1160" viewBox="0 0 1110 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1110" height="1160" fill="#E5E5E5"/>
        <rect id="Rectangle Main" width="1110" height="1160" rx="34" fill="white"/>
        <rect id="Rectangle Main" x="71" y="63" width="967" height="401" rx="8" fill="#D7E3ED"/>
        <g id="dsks">
        <rect id="Rectangle 130" x="489.279" y="379.257" width="73" height="40" transform="rotate(-90 489.279 379.257)" fill="#AFC0CD"/>
        <rect id="Rectangle 136" x="490.068" y="385.275" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 137" x="491.748" y="100.443" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 131" x="489.432" y="301.02" width="73" height="40" transform="rotate(-90 489.432 301.02)" fill="#AFC0CD"/>
        <rect id="Rectangle 132" x="490.404" y="222.21" width="73" height="40" transform="rotate(-90 490.404 222.21)" fill="#AFC0CD"/>
        <rect id="Rectangle 133" x="534.501" y="379.333" width="73" height="40" transform="rotate(-90 534.501 379.333)" fill="#AFC0CD"/>
        <rect id="Rectangle 134" x="535.473" y="300.522" width="73" height="40" transform="rotate(-90 535.473 300.522)" fill="#AFC0CD"/>
        <rect id="Rectangle 135" x="535.871" y="220.893" width="73" height="40" transform="rotate(-90 535.871 220.893)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_2">
        <rect id="Rectangle 130_2" x="316.279" y="379.257" width="73" height="40" transform="rotate(-90 316.279 379.257)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_2" x="317.068" y="385.275" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 137_2" x="318.748" y="100.443" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 131_2" x="316.432" y="301.02" width="73" height="40" transform="rotate(-90 316.432 301.02)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_2" x="317.404" y="222.21" width="73" height="40" transform="rotate(-90 317.404 222.21)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_2" x="361.501" y="379.333" width="73" height="40" transform="rotate(-90 361.501 379.333)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_2" x="362.473" y="300.522" width="73" height="40" transform="rotate(-90 362.473 300.522)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_2" x="362.871" y="220.893" width="73" height="40" transform="rotate(-90 362.871 220.893)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_3">
        <rect id="Rectangle 130_3" x="138.279" y="377.257" width="73" height="40" transform="rotate(-90 138.279 377.257)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_3" x="139.068" y="383.275" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 137_3" x="140.748" y="98.4435" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 131_3" x="138.432" y="299.02" width="73" height="40" transform="rotate(-90 138.432 299.02)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_3" x="139.404" y="220.21" width="73" height="40" transform="rotate(-90 139.404 220.21)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_3" x="183.501" y="377.333" width="73" height="40" transform="rotate(-90 183.501 377.333)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_3" x="184.473" y="298.522" width="73" height="40" transform="rotate(-90 184.473 298.522)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_3" x="184.871" y="218.893" width="73" height="40" transform="rotate(-90 184.871 218.893)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_4">
        <rect id="Rectangle 130_4" x="662.279" y="380.257" width="73" height="40" transform="rotate(-90 662.279 380.257)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_4" x="663.068" y="386.274" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 137_4" x="664.748" y="101.443" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 131_4" x="662.432" y="302.02" width="73" height="40" transform="rotate(-90 662.432 302.02)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_4" x="663.404" y="223.21" width="73" height="40" transform="rotate(-90 663.404 223.21)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_4" x="707.5" y="380.332" width="73" height="40" transform="rotate(-90 707.5 380.332)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_4" x="708.473" y="301.522" width="73" height="40" transform="rotate(-90 708.473 301.522)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_4" x="708.871" y="221.893" width="73" height="40" transform="rotate(-90 708.871 221.893)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_5">
        <rect id="Rectangle 130_5" x="836.279" y="380.257" width="73" height="40" transform="rotate(-90 836.279 380.257)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_5" x="837.068" y="386.274" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 137_5" x="838.748" y="101.443" width="83.9497" height="40" fill="#AFC0CD"/>
        <rect id="Rectangle 131_5" x="836.432" y="302.02" width="73" height="40" transform="rotate(-90 836.432 302.02)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_5" x="837.404" y="223.21" width="73" height="40" transform="rotate(-90 837.404 223.21)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_5" x="881.5" y="380.332" width="73" height="40" transform="rotate(-90 881.5 380.332)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_5" x="882.473" y="301.522" width="73" height="40" transform="rotate(-90 882.473 301.522)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_5" x="882.872" y="221.893" width="73" height="40" transform="rotate(-90 882.872 221.893)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_6">
        <rect id="Rectangle 130_6" x="753.166" y="580.019" width="73" height="40" transform="rotate(-0.585194 753.166 580.019)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_6" x="747.157" y="580.869" width="83.9497" height="40" transform="rotate(89.4148 747.157 580.869)" fill="#AFC0CD"/>
        <rect id="Rectangle 137_6" x="1031.99" y="579.64" width="83.9497" height="40" transform="rotate(89.4148 1031.99 579.64)" fill="#AFC0CD"/>
        <rect id="Rectangle 131_6" x="831.4" y="579.373" width="73" height="40" transform="rotate(-0.585192 831.4 579.373)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_6" x="910.216" y="579.54" width="73" height="40" transform="rotate(-0.585195 910.216 579.54)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_6" x="753.552" y="625.239" width="73" height="40" transform="rotate(-0.585194 753.552 625.239)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_6" x="832.369" y="625.406" width="73" height="40" transform="rotate(-0.585192 832.369 625.406)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_6" x="911.998" y="624.992" width="73" height="40" transform="rotate(-0.585195 911.998 624.992)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_7">
        <rect id="Rectangle 130_7" x="346.166" y="580.019" width="73" height="40" transform="rotate(-0.585194 346.166 580.019)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_7" x="340.157" y="580.87" width="83.9497" height="40" transform="rotate(89.4148 340.157 580.87)" fill="#AFC0CD"/>
        <rect id="Rectangle 137_7" x="624.99" y="579.64" width="83.9497" height="40" transform="rotate(89.4148 624.99 579.64)" fill="#AFC0CD"/>
        <rect id="Rectangle 131_7" x="424.4" y="579.373" width="73" height="40" transform="rotate(-0.585192 424.4 579.373)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_7" x="503.216" y="579.54" width="73" height="40" transform="rotate(-0.585195 503.216 579.54)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_7" x="346.552" y="625.239" width="73" height="40" transform="rotate(-0.585194 346.552 625.239)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_7" x="425.369" y="625.406" width="73" height="40" transform="rotate(-0.585192 425.369 625.406)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_7" x="504.998" y="624.992" width="73" height="40" transform="rotate(-0.585195 504.998 624.992)" fill="#AFC0CD"/>
        </g>
        <rect id="Rectangle 156" x="137" y="565" width="73" height="40" transform="rotate(90 137 565)" fill="#AFC0CD"/>
        <rect id="Rectangle 157" x="137" y="643" width="73" height="40" transform="rotate(90 137 643)" fill="#AFC0CD"/>
        <rect id="Rectangle 158" x="137" y="721" width="73" height="40" transform="rotate(90 137 721)" fill="#AFC0CD"/>
        <rect id="Rectangle 159" x="137" y="799" width="73" height="40" transform="rotate(90 137 799)" fill="#AFC0CD"/>
        <rect id="Rectangle 160" x="137" y="565" width="73" height="40" transform="rotate(90 137 565)" fill="#AFC0CD"/>
        <rect id="Rectangle 161" x="137" y="643" width="73" height="40" transform="rotate(90 137 643)" fill="#AFC0CD"/>
        <rect id="Rectangle 162" x="137" y="721" width="73" height="40" transform="rotate(90 137 721)" fill="#AFC0CD"/>
        <rect id="Rectangle 163" x="137" y="799" width="73" height="40" transform="rotate(90 137 799)" fill="#AFC0CD"/>
        <rect id="Rectangle 164" x="1038" y="811" width="73" height="40" transform="rotate(90 1038 811)" fill="#AFC0CD"/>
        <rect id="Rectangle 165" x="1038" y="889" width="73" height="40" transform="rotate(90 1038 889)" fill="#AFC0CD"/>
        <rect id="Rectangle 166" x="1038" y="967" width="73" height="40" transform="rotate(90 1038 967)" fill="#AFC0CD"/>
        <rect id="Rectangle 167" x="1038" y="1045" width="73" height="40" transform="rotate(90 1038 1045)" fill="#AFC0CD"/>
        <rect id="Rectangle 168" x="1038" y="811" width="73" height="40" transform="rotate(90 1038 811)" fill="#AFC0CD"/>
        <rect id="Rectangle 169" x="1038" y="889" width="73" height="40" transform="rotate(90 1038 889)" fill="#AFC0CD"/>
        <rect id="Rectangle 170" x="1038" y="967" width="73" height="40" transform="rotate(90 1038 967)" fill="#AFC0CD"/>
        <rect id="Rectangle 171" x="1038" y="1045" width="73" height="40" transform="rotate(90 1038 1045)" fill="#AFC0CD"/>
        <g id="Group 4">
        <line id="Line 14" x1="406" y1="815.982" x2="407" y2="1091.98" stroke="#AFC0CD" stroke-width="10"/>
        <line id="Line 15" x1="377.026" y1="1126" x2="185.026" y2="1127" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Line 16" d="M407 1089L406.5 1096L404 1103.5L402 1108.5L399 1113.5L394 1119L388 1123L381 1125.5L374 1126" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Ellipse 7" d="M366 876C366 867.858 364.396 859.796 361.281 852.274C358.165 844.751 353.598 837.917 347.841 832.159C342.083 826.402 335.249 821.835 327.726 818.719C320.204 815.604 312.142 814 304 814L304 876H366Z" fill="#AFC0CD"/>
        <path id="Ellipse 8" d="M302 814C293.858 814 285.796 815.604 278.274 818.719C270.751 821.835 263.917 826.402 258.159 832.159C252.402 837.917 247.835 844.751 244.719 852.274C241.604 859.796 240 867.858 240 876L302 876L302 814Z" fill="#AFC0CD"/>
        <path id="Ellipse 9" d="M240 878C240 886.142 241.604 894.204 244.719 901.726C247.835 909.249 252.402 916.083 258.159 921.841C263.917 927.598 270.751 932.165 278.274 935.281C285.796 938.396 293.858 940 302 940L302 878L240 878Z" fill="#AFC0CD"/>
        <path id="Ellipse 10" d="M304 940C312.142 940 320.204 938.396 327.726 935.281C335.249 932.165 342.083 927.598 347.841 921.841C353.598 916.083 358.165 909.249 361.281 901.726C364.396 894.204 366 886.142 366 878L304 878L304 940Z" fill="#AFC0CD"/>
        <path id="Ellipse 11" d="M364 1028C364 1019.86 362.396 1011.8 359.281 1004.27C356.165 996.751 351.598 989.917 345.841 984.159C340.083 978.402 333.249 973.835 325.726 970.719C318.204 967.604 310.142 966 302 966L302 1028H364Z" fill="#AFC0CD"/>
        <path id="Ellipse 12" d="M300 966C291.858 966 283.796 967.604 276.274 970.719C268.751 973.835 261.917 978.402 256.159 984.159C250.402 989.917 245.835 996.751 242.719 1004.27C239.604 1011.8 238 1019.86 238 1028L300 1028L300 966Z" fill="#AFC0CD"/>
        <path id="Ellipse 13" d="M238 1030C238 1038.14 239.604 1046.2 242.719 1053.73C245.835 1061.25 250.402 1068.08 256.159 1073.84C261.917 1079.6 268.751 1084.16 276.274 1087.28C283.796 1090.4 291.858 1092 300 1092L300 1030L238 1030Z" fill="#AFC0CD"/>
        <path id="Ellipse 14" d="M302 1092C310.142 1092 318.204 1090.4 325.726 1087.28C333.249 1084.16 340.083 1079.6 345.841 1073.84C351.598 1068.08 356.165 1061.25 359.281 1053.73C362.396 1046.2 364 1038.14 364 1030L302 1030L302 1092Z" fill="#AFC0CD"/>
        </g>
        <g id="Group 6">
        <line id="Line 14_2" x1="662" y1="815.982" x2="663" y2="1091.98" stroke="#AFC0CD" stroke-width="10"/>
        <line id="Line 15_2" x1="633.026" y1="1126" x2="441.026" y2="1127" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Line 16_2" d="M663 1089L662.5 1096L660 1103.5L658 1108.5L655 1113.5L650 1119L644 1123L637 1125.5L630 1126" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Ellipse 7_2" d="M622 876C622 867.858 620.396 859.796 617.281 852.274C614.165 844.751 609.598 837.917 603.841 832.159C598.083 826.402 591.249 821.835 583.726 818.719C576.204 815.604 568.142 814 560 814L560 876H622Z" fill="#AFC0CD"/>
        <path id="Ellipse 8_2" d="M558 814C549.858 814 541.796 815.604 534.274 818.719C526.751 821.835 519.917 826.402 514.159 832.159C508.402 837.917 503.835 844.751 500.719 852.274C497.604 859.796 496 867.858 496 876L558 876L558 814Z" fill="#AFC0CD"/>
        <path id="Ellipse 9_2" d="M496 878C496 886.142 497.604 894.204 500.719 901.726C503.835 909.249 508.402 916.083 514.159 921.841C519.917 927.598 526.751 932.165 534.274 935.281C541.796 938.396 549.858 940 558 940L558 878L496 878Z" fill="#AFC0CD"/>
        <path id="Ellipse 10_2" d="M560 940C568.142 940 576.204 938.396 583.726 935.281C591.249 932.165 598.083 927.598 603.841 921.841C609.598 916.083 614.165 909.249 617.281 901.726C620.396 894.204 622 886.142 622 878L560 878L560 940Z" fill="#AFC0CD"/>
        <path id="Ellipse 11_2" d="M620 1028C620 1019.86 618.396 1011.8 615.281 1004.27C612.165 996.751 607.598 989.917 601.841 984.159C596.083 978.402 589.249 973.835 581.726 970.719C574.204 967.604 566.142 966 558 966L558 1028H620Z" fill="#AFC0CD"/>
        <path id="Ellipse 12_2" d="M556 966C547.858 966 539.796 967.604 532.274 970.719C524.751 973.835 517.917 978.402 512.159 984.159C506.402 989.917 501.835 996.751 498.719 1004.27C495.604 1011.8 494 1019.86 494 1028L556 1028L556 966Z" fill="#AFC0CD"/>
        <path id="Ellipse 13_2" d="M494 1030C494 1038.14 495.604 1046.2 498.719 1053.73C501.835 1061.25 506.402 1068.08 512.159 1073.84C517.917 1079.6 524.751 1084.16 532.274 1087.28C539.796 1090.4 547.858 1092 556 1092L556 1030L494 1030Z" fill="#AFC0CD"/>
        <path id="Ellipse 14_2" d="M558 1092C566.142 1092 574.204 1090.4 581.726 1087.28C589.249 1084.16 596.083 1079.6 601.841 1073.84C607.598 1068.08 612.165 1061.25 615.281 1053.73C618.396 1046.2 620 1038.14 620 1030L558 1030L558 1092Z" fill="#AFC0CD"/>
        </g>
        <g id="Group 7">
        <line id="Line 14_3" x1="920" y1="815.982" x2="921" y2="1091.98" stroke="#AFC0CD" stroke-width="10"/>
        <line id="Line 15_3" x1="891.026" y1="1126" x2="699.026" y2="1127" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Line 16_3" d="M921 1089L920.5 1096L918 1103.5L916 1108.5L913 1113.5L908 1119L902 1123L895 1125.5L888 1126" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Ellipse 7_3" d="M880 876C880 867.858 878.396 859.796 875.281 852.274C872.165 844.751 867.598 837.917 861.841 832.159C856.083 826.402 849.249 821.835 841.726 818.719C834.204 815.604 826.142 814 818 814L818 876H880Z" fill="#AFC0CD"/>
        <path id="Ellipse 8_3" d="M816 814C807.858 814 799.796 815.604 792.274 818.719C784.751 821.835 777.917 826.402 772.159 832.159C766.402 837.917 761.835 844.751 758.719 852.274C755.604 859.796 754 867.858 754 876L816 876L816 814Z" fill="#AFC0CD"/>
        <path id="Ellipse 9_3" d="M754 878C754 886.142 755.604 894.204 758.719 901.726C761.835 909.249 766.402 916.083 772.159 921.841C777.917 927.598 784.751 932.165 792.274 935.281C799.796 938.396 807.858 940 816 940L816 878L754 878Z" fill="#AFC0CD"/>
        <path id="Ellipse 10_3" d="M818 940C826.142 940 834.204 938.396 841.726 935.281C849.249 932.165 856.083 927.598 861.841 921.841C867.598 916.083 872.165 909.249 875.281 901.726C878.396 894.204 880 886.142 880 878L818 878L818 940Z" fill="#AFC0CD"/>
        <path id="Ellipse 11_3" d="M878 1028C878 1019.86 876.396 1011.8 873.281 1004.27C870.165 996.751 865.598 989.917 859.841 984.159C854.083 978.402 847.249 973.835 839.726 970.719C832.204 967.604 824.142 966 816 966L816 1028H878Z" fill="#AFC0CD"/>
        <path id="Ellipse 12_3" d="M814 966C805.858 966 797.796 967.604 790.274 970.719C782.751 973.835 775.917 978.402 770.159 984.159C764.402 989.917 759.835 996.751 756.719 1004.27C753.604 1011.8 752 1019.86 752 1028L814 1028L814 966Z" fill="#AFC0CD"/>
        <path id="Ellipse 13_3" d="M752 1030C752 1038.14 753.604 1046.2 756.719 1053.73C759.835 1061.25 764.402 1068.08 770.159 1073.84C775.917 1079.6 782.751 1084.16 790.274 1087.28C797.796 1090.4 805.858 1092 814 1092L814 1030L752 1030Z" fill="#AFC0CD"/>
        <path id="Ellipse 14_3" d="M816 1092C824.142 1092 832.204 1090.4 839.726 1087.28C847.249 1084.16 854.083 1079.6 859.841 1073.84C865.598 1068.08 870.165 1061.25 873.281 1053.73C876.396 1046.2 878 1038.14 878 1030L816 1030L816 1092Z" fill="#AFC0CD"/>
        </g>
        </svg>`,
      },
      {
        name: "Bahia Blanca",
        address: {
          street: "Dr. Luis María Drago 45, 9° Piso",
          city: "Bahía Blanca",
          state: "Buenos Aires",
          country: "Argentina",
        },
        location: [3, 4],
        map: `<svg width="1110" height="1160" viewBox="0 0 1110 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1110" height="1160" fill="#E5E5E5"/>
        <rect id="Rectangle Main" width="1110" height="1160" rx="34" fill="white"/>
        <g id="dsks">
        <rect id="Rectangle 130" x="148.591" y="34.4863" width="73" height="40" transform="rotate(0.264883 148.591 34.4863)" fill="#AFC0CD"/>
        <rect id="Rectangle 136" x="142.57" y="35.2474" width="83.9497" height="40" transform="rotate(90.2649 142.57 35.2474)" fill="#AFC0CD"/>
        <rect id="Rectangle 137" x="427.391" y="38.2438" width="83.9497" height="40" transform="rotate(90.2649 427.391 38.2438)" fill="#AFC0CD"/>
        <rect id="Rectangle 131" x="226.827" y="35.0009" width="73" height="40" transform="rotate(0.264885 226.827 35.0009)" fill="#AFC0CD"/>
        <rect id="Rectangle 132" x="305.631" y="36.3373" width="73" height="40" transform="rotate(0.264882 305.631 36.3373)" fill="#AFC0CD"/>
        <rect id="Rectangle 133" x="148.307" y="79.7073" width="73" height="40" transform="rotate(0.264883 148.307 79.7073)" fill="#AFC0CD"/>
        <rect id="Rectangle 134" x="227.112" y="81.0435" width="73" height="40" transform="rotate(0.264885 227.112 81.0435)" fill="#AFC0CD"/>
        <rect id="Rectangle 135" x="306.738" y="81.8101" width="73" height="40" transform="rotate(0.264882 306.738 81.8101)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_2">
        <rect id="Rectangle 130_2" x="148.428" y="396.92" width="73" height="40" transform="rotate(0.0513802 148.428 396.92)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_2" x="142.41" y="397.703" width="83.9497" height="40" transform="rotate(90.0514 142.41 397.703)" fill="#AFC0CD"/>
        <rect id="Rectangle 137_2" x="427.239" y="399.638" width="83.9497" height="40" transform="rotate(90.0514 427.239 399.638)" fill="#AFC0CD"/>
        <rect id="Rectangle 131_2" x="226.665" y="397.143" width="73" height="40" transform="rotate(0.0513822 226.665 397.143)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_2" x="305.474" y="398.185" width="73" height="40" transform="rotate(0.0513794 305.474 398.185)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_2" x="148.312" y="442.141" width="73" height="40" transform="rotate(0.0513802 148.312 442.141)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_2" x="227.121" y="443.184" width="73" height="40" transform="rotate(0.0513822 227.121 443.184)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_2" x="306.75" y="443.654" width="73" height="40" transform="rotate(0.0513794 306.75 443.654)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_3">
        <rect id="Rectangle 130_3" x="718.591" y="929.486" width="73" height="40" transform="rotate(0.264883 718.591 929.486)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_3" x="712.57" y="930.247" width="83.9497" height="40" transform="rotate(90.2649 712.57 930.247)" fill="#AFC0CD"/>
        <rect id="Rectangle 137_3" x="997.391" y="933.244" width="83.9497" height="40" transform="rotate(90.2649 997.391 933.244)" fill="#AFC0CD"/>
        <rect id="Rectangle 131_3" x="796.827" y="930.001" width="73" height="40" transform="rotate(0.264885 796.827 930.001)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_3" x="875.631" y="931.337" width="73" height="40" transform="rotate(0.264882 875.631 931.337)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_3" x="718.307" y="974.707" width="73" height="40" transform="rotate(0.264883 718.307 974.707)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_3" x="797.112" y="976.043" width="73" height="40" transform="rotate(0.264885 797.112 976.043)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_3" x="876.738" y="976.81" width="73" height="40" transform="rotate(0.264882 876.738 976.81)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_4">
        <rect id="Rectangle 130_4" x="593.377" y="175.729" width="73" height="40" transform="rotate(90.1491 593.377 175.729)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_4" x="592.604" y="169.71" width="83.9497" height="40" transform="rotate(-179.851 592.604 169.71)" fill="#AFC0CD"/>
        <rect id="Rectangle 137_4" x="590.183" y="454.535" width="83.9497" height="40" transform="rotate(-179.851 590.183 454.535)" fill="#AFC0CD"/>
        <rect id="Rectangle 131_4" x="593.021" y="253.965" width="73" height="40" transform="rotate(90.1491 593.021 253.965)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_4" x="591.844" y="332.773" width="73" height="40" transform="rotate(90.1491 591.844 332.773)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_4" x="548.156" y="175.536" width="73" height="40" transform="rotate(90.1491 548.156 175.536)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_4" x="546.979" y="254.343" width="73" height="40" transform="rotate(90.1491 546.979 254.343)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_4" x="546.373" y="333.971" width="73" height="40" transform="rotate(90.1491 546.373 333.971)" fill="#AFC0CD"/>
        </g>
        <g id="Group 8">
        <line id="Line 14" x1="428.019" y1="378.155" x2="152.018" y2="378.125" stroke="#AFC0CD" stroke-width="10"/>
        <line id="Line 15" x1="118.112" y1="348.025" x2="117.828" y2="156.022" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Line 16" d="M155 378.136L148.001 377.61L140.511 375.082L135.518 373.064L130.53 370.045L125.048 365.025L121.071 359.01L118.597 352L118.123 344.999" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Ellipse 7" d="M368.151 337.931C376.293 337.961 384.361 336.388 391.895 333.3C399.429 330.212 406.281 325.671 412.059 319.935C417.838 314.2 422.43 307.382 425.574 299.871C428.718 292.361 430.352 284.305 430.382 276.163L368.382 275.932L368.151 337.931Z" fill="#AFC0CD"/>
        <path id="Ellipse 8" d="M430.389 274.163C430.42 266.021 428.846 257.953 425.759 250.419C422.671 242.885 418.129 236.033 412.394 230.255C406.658 224.476 399.84 219.884 392.33 216.74C384.819 213.596 376.763 211.962 368.621 211.932L368.39 273.931L430.389 274.163Z" fill="#AFC0CD"/>
        <path id="Ellipse 9" d="M366.621 211.924C358.479 211.894 350.411 213.468 342.877 216.555C335.344 219.643 328.492 224.185 322.713 229.92C316.934 235.656 312.342 242.474 309.198 249.984C306.055 257.495 304.421 265.551 304.39 273.693L366.39 273.924L366.621 211.924Z" fill="#AFC0CD"/>
        <path id="Ellipse 10" d="M304.383 275.693C304.353 283.835 305.926 291.903 309.014 299.437C312.102 306.97 316.643 313.822 322.379 319.601C328.114 325.38 334.932 329.972 342.443 333.116C349.953 336.26 358.009 337.893 366.151 337.924L366.383 275.924L304.383 275.693Z" fill="#AFC0CD"/>
        <path id="Ellipse 11" d="M216.16 335.364C224.301 335.395 232.37 333.821 239.903 330.733C247.437 327.646 254.289 323.104 260.068 317.368C265.846 311.633 270.439 304.815 273.582 297.304C276.726 289.794 278.36 281.738 278.39 273.596L216.391 273.365L216.16 335.364Z" fill="#AFC0CD"/>
        <path id="Ellipse 12" d="M278.398 271.596C278.428 263.454 276.855 255.386 273.767 247.852C270.679 240.318 266.138 233.466 260.402 227.688C254.666 221.909 247.849 217.317 240.338 214.173C232.828 211.029 224.771 209.395 216.629 209.365L216.398 271.365L278.398 271.596Z" fill="#AFC0CD"/>
        <path id="Ellipse 13" d="M214.63 209.358C206.488 209.327 198.419 210.901 190.886 213.989C183.352 217.076 176.5 221.618 170.721 227.353C164.943 233.089 160.35 239.907 157.207 247.417C154.063 254.928 152.429 262.984 152.399 271.126L214.398 271.357L214.63 209.358Z" fill="#AFC0CD"/>
        <path id="Ellipse 14" d="M152.391 273.126C152.361 281.268 153.935 289.336 157.022 296.87C160.11 304.404 164.651 311.255 170.387 317.034C176.123 322.813 182.94 327.405 190.451 330.549C197.962 333.693 206.018 335.326 214.16 335.357L214.391 273.357L152.391 273.126Z" fill="#AFC0CD"/>
        </g>
        <g id="dsks_5">
        <rect id="Rectangle 130_5" x="742.65" y="28.4863" width="73" height="40" transform="rotate(0.264883 742.65 28.4863)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_5" x="736.629" y="29.2474" width="83.9497" height="40" transform="rotate(90.2649 736.629 29.2474)" fill="#AFC0CD"/>
        <rect id="Rectangle 137_5" x="1021.45" y="32.2438" width="83.9497" height="40" transform="rotate(90.2649 1021.45 32.2438)" fill="#AFC0CD"/>
        <rect id="Rectangle 131_5" x="820.885" y="29.0009" width="73" height="40" transform="rotate(0.264885 820.885 29.0009)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_5" x="899.69" y="30.3373" width="73" height="40" transform="rotate(0.264882 899.69 30.3373)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_5" x="742.365" y="73.7073" width="73" height="40" transform="rotate(0.264883 742.365 73.7073)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_5" x="821.17" y="75.0435" width="73" height="40" transform="rotate(0.264885 821.17 75.0435)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_5" x="900.797" y="75.8101" width="73" height="40" transform="rotate(0.264882 900.797 75.8101)" fill="#AFC0CD"/>
        </g>
        <g id="dsks_6">
        <rect id="Rectangle 130_6" x="742.486" y="390.92" width="73" height="40" transform="rotate(0.0513802 742.486 390.92)" fill="#AFC0CD"/>
        <rect id="Rectangle 136_6" x="736.468" y="391.703" width="83.9497" height="40" transform="rotate(90.0514 736.468 391.703)" fill="#AFC0CD"/>
        <rect id="Rectangle 137_6" x="1021.3" y="393.638" width="83.9497" height="40" transform="rotate(90.0514 1021.3 393.638)" fill="#AFC0CD"/>
        <rect id="Rectangle 131_6" x="820.723" y="391.143" width="73" height="40" transform="rotate(0.0513822 820.723 391.143)" fill="#AFC0CD"/>
        <rect id="Rectangle 132_6" x="899.532" y="392.185" width="73" height="40" transform="rotate(0.0513794 899.532 392.185)" fill="#AFC0CD"/>
        <rect id="Rectangle 133_6" x="742.37" y="436.141" width="73" height="40" transform="rotate(0.0513802 742.37 436.141)" fill="#AFC0CD"/>
        <rect id="Rectangle 134_6" x="821.18" y="437.184" width="73" height="40" transform="rotate(0.0513822 821.18 437.184)" fill="#AFC0CD"/>
        <rect id="Rectangle 135_6" x="900.809" y="437.654" width="73" height="40" transform="rotate(0.0513794 900.809 437.654)" fill="#AFC0CD"/>
        </g>
        <g id="Group 12">
        <line id="Line 14_2" x1="1022.08" y1="372.155" x2="746.076" y2="372.125" stroke="#AFC0CD" stroke-width="10"/>
        <line id="Line 15_2" x1="712.17" y1="342.025" x2="711.886" y2="150.022" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Line 16_2" d="M749.058 372.136L742.06 371.61L734.569 369.082L729.577 367.064L724.588 364.045L719.107 359.025L715.129 353.01L712.655 346L712.181 338.999" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Ellipse 7_2" d="M962.21 331.931C970.352 331.961 978.42 330.388 985.954 327.3C993.487 324.212 1000.34 319.671 1006.12 313.935C1011.9 308.2 1016.49 301.382 1019.63 293.871C1022.78 286.361 1024.41 278.305 1024.44 270.163L962.441 269.932L962.21 331.931Z" fill="#AFC0CD"/>
        <path id="Ellipse 8_2" d="M1024.45 268.163C1024.48 260.021 1022.9 251.953 1019.82 244.419C1016.73 236.885 1012.19 230.033 1006.45 224.255C1000.72 218.476 993.899 213.884 986.388 210.74C978.878 207.596 970.822 205.962 962.68 205.932L962.449 267.931L1024.45 268.163Z" fill="#AFC0CD"/>
        <path id="Ellipse 9_2" d="M960.68 205.924C952.538 205.894 944.47 207.468 936.936 210.555C929.402 213.643 922.55 218.185 916.772 223.92C910.993 229.656 906.401 236.474 903.257 243.984C900.113 251.495 898.479 259.551 898.449 267.693L960.449 267.924L960.68 205.924Z" fill="#AFC0CD"/>
        <path id="Ellipse 10_2" d="M898.442 269.693C898.411 277.835 899.985 285.903 903.073 293.437C906.16 300.97 910.702 307.822 916.437 313.601C922.173 319.38 928.991 323.972 936.501 327.116C944.012 330.26 952.068 331.893 960.21 331.924L960.441 269.924L898.442 269.693Z" fill="#AFC0CD"/>
        <path id="Ellipse 11_2" d="M810.218 329.364C818.36 329.395 826.428 327.821 833.962 324.733C841.496 321.646 848.348 317.104 854.126 311.368C859.905 305.633 864.497 298.815 867.641 291.304C870.785 283.794 872.419 275.738 872.449 267.596L810.449 267.365L810.218 329.364Z" fill="#AFC0CD"/>
        <path id="Ellipse 12_2" d="M872.456 265.596C872.487 257.454 870.913 249.386 867.825 241.852C864.738 234.318 860.196 227.466 854.461 221.688C848.725 215.909 841.907 211.317 834.397 208.173C826.886 205.029 818.83 203.395 810.688 203.365L810.457 265.365L872.456 265.596Z" fill="#AFC0CD"/>
        <path id="Ellipse 13_2" d="M808.688 203.358C800.546 203.327 792.478 204.901 784.944 207.989C777.411 211.076 770.559 215.618 764.78 221.353C759.001 227.089 754.409 233.907 751.265 241.417C748.121 248.928 746.488 256.984 746.457 265.126L808.457 265.357L808.688 203.358Z" fill="#AFC0CD"/>
        <path id="Ellipse 14_2" d="M746.45 267.126C746.42 275.268 747.993 283.336 751.081 290.87C754.169 298.404 758.71 305.255 764.446 311.034C770.181 316.813 776.999 321.405 784.51 324.549C792.02 327.693 800.076 329.326 808.218 329.357L808.449 267.357L746.45 267.126Z" fill="#AFC0CD"/>
        </g>
        <rect id="Rectangle 173" x="413.151" y="580.244" width="73" height="40" transform="rotate(-179.991 413.151 580.244)" fill="#AFC0CD"/>
        <rect id="Rectangle 174" x="335.151" y="580.231" width="73" height="40" transform="rotate(-179.991 335.151 580.231)" fill="#AFC0CD"/>
        <rect id="Rectangle 175" x="257.151" y="580.219" width="73" height="40" transform="rotate(-179.991 257.151 580.219)" fill="#AFC0CD"/>
        <rect id="Rectangle 176" x="179.151" y="580.206" width="73" height="40" transform="rotate(-179.991 179.151 580.206)" fill="#AFC0CD"/>
        <rect id="Rectangle 177" x="413.151" y="580.244" width="73" height="40" transform="rotate(-179.991 413.151 580.244)" fill="#AFC0CD"/>
        <rect id="Rectangle 178" x="335.151" y="580.231" width="73" height="40" transform="rotate(-179.991 335.151 580.231)" fill="#AFC0CD"/>
        <rect id="Rectangle 189" x="335.151" y="580.231" width="73" height="40" transform="rotate(-179.991 335.151 580.231)" fill="#AFC0CD"/>
        <rect id="Rectangle 179" x="257.151" y="580.219" width="73" height="40" transform="rotate(-179.991 257.151 580.219)" fill="#AFC0CD"/>
        <rect id="Rectangle 180" x="179.151" y="580.206" width="73" height="40" transform="rotate(-179.991 179.151 580.206)" fill="#AFC0CD"/>
        <rect id="Rectangle 254" x="413" y="637.049" width="73" height="40" transform="rotate(-179.991 413 637.049)" fill="#AFC0CD"/>
        <rect id="Rectangle 255" x="335" y="637.037" width="73" height="40" transform="rotate(-179.991 335 637.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 256" x="257" y="637.024" width="73" height="40" transform="rotate(-179.991 257 637.024)" fill="#AFC0CD"/>
        <rect id="Rectangle 257" x="179" y="637.012" width="73" height="40" transform="rotate(-179.991 179 637.012)" fill="#AFC0CD"/>
        <rect id="Rectangle 258" x="413" y="637.049" width="73" height="40" transform="rotate(-179.991 413 637.049)" fill="#AFC0CD"/>
        <rect id="Rectangle 259" x="335" y="637.037" width="73" height="40" transform="rotate(-179.991 335 637.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 260" x="335" y="637.037" width="73" height="40" transform="rotate(-179.991 335 637.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 261" x="257" y="637.024" width="73" height="40" transform="rotate(-179.991 257 637.024)" fill="#AFC0CD"/>
        <rect id="Rectangle 262" x="179" y="637.012" width="73" height="40" transform="rotate(-179.991 179 637.012)" fill="#AFC0CD"/>
        <rect id="Rectangle 263" x="413.151" y="694.049" width="73" height="40" transform="rotate(-179.991 413.151 694.049)" fill="#AFC0CD"/>
        <rect id="Rectangle 264" x="335.151" y="694.037" width="73" height="40" transform="rotate(-179.991 335.151 694.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 265" x="257.151" y="694.024" width="73" height="40" transform="rotate(-179.991 257.151 694.024)" fill="#AFC0CD"/>
        <rect id="Rectangle 266" x="179.151" y="694.012" width="73" height="40" transform="rotate(-179.991 179.151 694.012)" fill="#AFC0CD"/>
        <rect id="Rectangle 267" x="413.151" y="694.049" width="73" height="40" transform="rotate(-179.991 413.151 694.049)" fill="#AFC0CD"/>
        <rect id="Rectangle 268" x="335.151" y="694.037" width="73" height="40" transform="rotate(-179.991 335.151 694.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 269" x="335.151" y="694.037" width="73" height="40" transform="rotate(-179.991 335.151 694.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 270" x="257.151" y="694.024" width="73" height="40" transform="rotate(-179.991 257.151 694.024)" fill="#AFC0CD"/>
        <rect id="Rectangle 271" x="179.151" y="694.012" width="73" height="40" transform="rotate(-179.991 179.151 694.012)" fill="#AFC0CD"/>
        <rect id="Rectangle 272" x="413" y="750.855" width="73" height="40" transform="rotate(-179.991 413 750.855)" fill="#AFC0CD"/>
        <rect id="Rectangle 273" x="335" y="750.842" width="73" height="40" transform="rotate(-179.991 335 750.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 274" x="257" y="750.83" width="73" height="40" transform="rotate(-179.991 257 750.83)" fill="#AFC0CD"/>
        <rect id="Rectangle 275" x="179" y="750.817" width="73" height="40" transform="rotate(-179.991 179 750.817)" fill="#AFC0CD"/>
        <rect id="Rectangle 276" x="413" y="750.855" width="73" height="40" transform="rotate(-179.991 413 750.855)" fill="#AFC0CD"/>
        <rect id="Rectangle 277" x="335" y="750.842" width="73" height="40" transform="rotate(-179.991 335 750.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 278" x="335" y="750.842" width="73" height="40" transform="rotate(-179.991 335 750.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 279" x="257" y="750.83" width="73" height="40" transform="rotate(-179.991 257 750.83)" fill="#AFC0CD"/>
        <rect id="Rectangle 280" x="179" y="750.817" width="73" height="40" transform="rotate(-179.991 179 750.817)" fill="#AFC0CD"/>
        <rect id="Rectangle 281" x="1014.15" y="580.049" width="73" height="40" transform="rotate(-179.991 1014.15 580.049)" fill="#AFC0CD"/>
        <rect id="Rectangle 282" x="936.151" y="580.037" width="73" height="40" transform="rotate(-179.991 936.151 580.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 283" x="858.151" y="580.024" width="73" height="40" transform="rotate(-179.991 858.151 580.024)" fill="#AFC0CD"/>
        <rect id="Rectangle 284" x="780.151" y="580.012" width="73" height="40" transform="rotate(-179.991 780.151 580.012)" fill="#AFC0CD"/>
        <rect id="Rectangle 285" x="1014.15" y="580.049" width="73" height="40" transform="rotate(-179.991 1014.15 580.049)" fill="#AFC0CD"/>
        <rect id="Rectangle 286" x="936.151" y="580.037" width="73" height="40" transform="rotate(-179.991 936.151 580.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 287" x="936.151" y="580.037" width="73" height="40" transform="rotate(-179.991 936.151 580.037)" fill="#AFC0CD"/>
        <rect id="Rectangle 288" x="858.151" y="580.024" width="73" height="40" transform="rotate(-179.991 858.151 580.024)" fill="#AFC0CD"/>
        <rect id="Rectangle 289" x="780.151" y="580.012" width="73" height="40" transform="rotate(-179.991 780.151 580.012)" fill="#AFC0CD"/>
        <rect id="Rectangle 290" x="1014" y="636.855" width="73" height="40" transform="rotate(-179.991 1014 636.855)" fill="#AFC0CD"/>
        <rect id="Rectangle 291" x="936" y="636.842" width="73" height="40" transform="rotate(-179.991 936 636.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 292" x="858" y="636.83" width="73" height="40" transform="rotate(-179.991 858 636.83)" fill="#AFC0CD"/>
        <rect id="Rectangle 293" x="780" y="636.817" width="73" height="40" transform="rotate(-179.991 780 636.817)" fill="#AFC0CD"/>
        <rect id="Rectangle 294" x="1014" y="636.855" width="73" height="40" transform="rotate(-179.991 1014 636.855)" fill="#AFC0CD"/>
        <rect id="Rectangle 295" x="936" y="636.842" width="73" height="40" transform="rotate(-179.991 936 636.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 296" x="936" y="636.842" width="73" height="40" transform="rotate(-179.991 936 636.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 297" x="858" y="636.83" width="73" height="40" transform="rotate(-179.991 858 636.83)" fill="#AFC0CD"/>
        <rect id="Rectangle 298" x="780" y="636.817" width="73" height="40" transform="rotate(-179.991 780 636.817)" fill="#AFC0CD"/>
        <rect id="Rectangle 299" x="1014.15" y="693.855" width="73" height="40" transform="rotate(-179.991 1014.15 693.855)" fill="#AFC0CD"/>
        <rect id="Rectangle 300" x="936.151" y="693.842" width="73" height="40" transform="rotate(-179.991 936.151 693.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 301" x="858.151" y="693.83" width="73" height="40" transform="rotate(-179.991 858.151 693.83)" fill="#AFC0CD"/>
        <rect id="Rectangle 302" x="780.151" y="693.817" width="73" height="40" transform="rotate(-179.991 780.151 693.817)" fill="#AFC0CD"/>
        <rect id="Rectangle 303" x="1014.15" y="693.855" width="73" height="40" transform="rotate(-179.991 1014.15 693.855)" fill="#AFC0CD"/>
        <rect id="Rectangle 304" x="936.151" y="693.842" width="73" height="40" transform="rotate(-179.991 936.151 693.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 305" x="936.151" y="693.842" width="73" height="40" transform="rotate(-179.991 936.151 693.842)" fill="#AFC0CD"/>
        <rect id="Rectangle 306" x="858.151" y="693.83" width="73" height="40" transform="rotate(-179.991 858.151 693.83)" fill="#AFC0CD"/>
        <rect id="Rectangle 307" x="780.151" y="693.817" width="73" height="40" transform="rotate(-179.991 780.151 693.817)" fill="#AFC0CD"/>
        <rect id="Rectangle 308" x="1014" y="750.661" width="73" height="40" transform="rotate(-179.991 1014 750.661)" fill="#AFC0CD"/>
        <rect id="Rectangle 309" x="936" y="750.648" width="73" height="40" transform="rotate(-179.991 936 750.648)" fill="#AFC0CD"/>
        <rect id="Rectangle 310" x="858" y="750.636" width="73" height="40" transform="rotate(-179.991 858 750.636)" fill="#AFC0CD"/>
        <rect id="Rectangle 311" x="780" y="750.623" width="73" height="40" transform="rotate(-179.991 780 750.623)" fill="#AFC0CD"/>
        <rect id="Rectangle 312" x="1014" y="750.661" width="73" height="40" transform="rotate(-179.991 1014 750.661)" fill="#AFC0CD"/>
        <rect id="Rectangle 313" x="936" y="750.648" width="73" height="40" transform="rotate(-179.991 936 750.648)" fill="#AFC0CD"/>
        <rect id="Rectangle 314" x="936" y="750.648" width="73" height="40" transform="rotate(-179.991 936 750.648)" fill="#AFC0CD"/>
        <rect id="Rectangle 315" x="858" y="750.636" width="73" height="40" transform="rotate(-179.991 858 750.636)" fill="#AFC0CD"/>
        <rect id="Rectangle 316" x="780" y="750.623" width="73" height="40" transform="rotate(-179.991 780 750.623)" fill="#AFC0CD"/>
        <g id="Group 10">
        <line id="Line 14_3" x1="657" y1="523.982" x2="658" y2="799.982" stroke="#AFC0CD" stroke-width="10"/>
        <line id="Line 15_3" x1="628.026" y1="834" x2="436.026" y2="835" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Line 16_3" d="M658 797L657.5 804L655 811.5L653 816.5L650 821.5L645 827L639 831L632 833.5L625 834" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Ellipse 7_3" d="M617 584C617 575.858 615.396 567.796 612.281 560.274C609.165 552.751 604.598 545.917 598.841 540.159C593.083 534.402 586.249 529.835 578.726 526.719C571.204 523.604 563.142 522 555 522L555 584H617Z" fill="#AFC0CD"/>
        <path id="Ellipse 8_3" d="M553 522C544.858 522 536.796 523.604 529.274 526.719C521.751 529.835 514.917 534.402 509.159 540.159C503.402 545.917 498.835 552.751 495.719 560.274C492.604 567.796 491 575.858 491 584L553 584L553 522Z" fill="#AFC0CD"/>
        <path id="Ellipse 9_3" d="M491 586C491 594.142 492.604 602.204 495.719 609.726C498.835 617.249 503.402 624.083 509.159 629.841C514.917 635.598 521.751 640.165 529.274 643.281C536.796 646.396 544.858 648 553 648L553 586L491 586Z" fill="#AFC0CD"/>
        <path id="Ellipse 10_3" d="M555 648C563.142 648 571.204 646.396 578.726 643.281C586.249 640.165 593.083 635.598 598.841 629.841C604.598 624.083 609.165 617.249 612.281 609.726C615.396 602.204 617 594.142 617 586L555 586L555 648Z" fill="#AFC0CD"/>
        <path id="Ellipse 11_3" d="M615 736C615 727.858 613.396 719.796 610.281 712.274C607.165 704.751 602.598 697.917 596.841 692.159C591.083 686.402 584.249 681.835 576.726 678.719C569.204 675.604 561.142 674 553 674L553 736H615Z" fill="#AFC0CD"/>
        <path id="Ellipse 12_3" d="M551 674C542.858 674 534.796 675.604 527.274 678.719C519.751 681.835 512.917 686.402 507.159 692.159C501.402 697.917 496.835 704.751 493.719 712.274C490.604 719.796 489 727.858 489 736L551 736L551 674Z" fill="#AFC0CD"/>
        <path id="Ellipse 13_3" d="M489 738C489 746.142 490.604 754.204 493.719 761.726C496.835 769.249 501.402 776.083 507.159 781.841C512.917 787.598 519.751 792.165 527.274 795.281C534.796 798.396 542.858 800 551 800L551 738L489 738Z" fill="#AFC0CD"/>
        <path id="Ellipse 14_3" d="M553 800C561.142 800 569.204 798.396 576.726 795.281C584.249 792.165 591.083 787.598 596.841 781.841C602.598 776.083 607.165 769.249 610.281 761.726C613.396 754.204 615 746.142 615 738L553 738L553 800Z" fill="#AFC0CD"/>
        </g>
        <g id="Group 11">
        <line id="Line 14_4" x1="419.243" y1="1075.01" x2="143.267" y2="1078.81" stroke="#AFC0CD" stroke-width="10"/>
        <line id="Line 15_4" x1="108.947" y1="1049.18" x2="106" y2="857.2" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Line 16_4" d="M146.249 1078.78L139.244 1078.35L131.719 1075.92L126.699 1073.97L121.669 1071.03L116.119 1066.08L112.058 1060.12L109.487 1053.15L108.916 1046.15" stroke="#AFC0CD" stroke-width="10"/>
        <path id="Ellipse 7_4" d="M358.822 1035.62C366.964 1035.54 375.01 1033.85 382.5 1030.66C389.99 1027.47 396.778 1022.83 402.477 1017.02C408.175 1011.2 412.673 1004.32 415.712 996.767C418.751 989.213 420.273 981.135 420.191 972.994L358.194 973.623L358.822 1035.62Z" fill="#AFC0CD"/>
        <path id="Ellipse 8_4" d="M420.17 970.994C420.088 962.852 418.402 954.807 415.21 947.317C412.018 939.826 407.382 933.038 401.567 927.34C395.752 921.641 388.871 917.144 381.318 914.104C373.764 911.065 365.686 909.543 357.545 909.626L358.173 971.623L420.17 970.994Z" fill="#AFC0CD"/>
        <path id="Ellipse 9_4" d="M355.545 909.646C347.403 909.729 339.358 911.414 331.867 914.606C324.377 917.798 317.589 922.434 311.89 928.249C306.192 934.064 301.695 940.945 298.655 948.499C295.616 956.052 294.094 964.13 294.177 972.272L356.173 971.643L355.545 909.646Z" fill="#AFC0CD"/>
        <path id="Ellipse 10_4" d="M294.197 974.271C294.28 982.413 295.965 990.459 299.157 997.949C302.349 1005.44 306.985 1012.23 312.8 1017.93C318.615 1023.62 325.496 1028.12 333.05 1031.16C340.603 1034.2 348.681 1035.72 356.823 1035.64L356.194 973.643L294.197 974.271Z" fill="#AFC0CD"/>
        <path id="Ellipse 11_4" d="M206.81 1035.16C214.951 1035.08 222.997 1033.39 230.487 1030.2C237.977 1027.01 244.765 1022.37 250.464 1016.56C256.163 1010.74 260.66 1003.86 263.699 996.308C266.739 988.755 268.261 980.677 268.178 972.535L206.181 973.164L206.81 1035.16Z" fill="#AFC0CD"/>
        <path id="Ellipse 12_4" d="M268.158 970.535C268.075 962.394 266.39 954.348 263.198 946.858C260.006 939.368 255.37 932.58 249.555 926.881C243.74 921.182 236.859 916.685 229.305 913.646C221.752 910.606 213.674 909.084 205.532 909.167L206.161 971.164L268.158 970.535Z" fill="#AFC0CD"/>
        <path id="Ellipse 13_4" d="M203.533 909.187C195.391 909.27 187.345 910.955 179.855 914.147C172.365 917.339 165.577 921.975 159.878 927.79C154.18 933.606 149.682 940.486 146.643 948.04C143.604 955.593 142.082 963.671 142.164 971.813L204.161 971.184L203.533 909.187Z" fill="#AFC0CD"/>
        <path id="Ellipse 14_4" d="M142.184 973.813C142.267 981.954 143.952 990 147.144 997.49C150.336 1004.98 154.972 1011.77 160.787 1017.47C166.603 1023.17 173.483 1027.66 181.037 1030.7C188.59 1033.74 196.668 1035.26 204.81 1035.18L204.181 973.184L142.184 973.813Z" fill="#AFC0CD"/>
        </g>
        </svg>`,
      },
    ];

    const users = [
      {
        name: "Julian Besteiro.",
        password:
          "$2b$08$2ogl9Z1H/di94an2uh5bvOiHaOGiQjdzyEND.WokzXGatqY21i5i6",
        email: "julianbesteiro1@gmail.com",
        cellphone: 1234,
        role: "backend developer",
        is_admin: false,
        address: "Carlos M. Della Paolera 1249, Buenos Aires, CABA, Argentina",
        location: [1, 2],
      },
      {
        name: "Juan Gonzalez",
        password:
          "$2b$08$CzQkUh.gtPee0b26WfnR0..gjb0HSN/SVb3m1tedFh7mAQDdi9eay",
        email: "juan@alfasd.com",
        cellphone: 2345,
        role: "service desk",
        is_admin: true,
        address: "Av. Colón 4440, Barrio Alto Alberdi, Cordoba, Argentina",
        location: [2, 3],
      },
    ];

    const devices = [
      {
        name: "Modem",
      },
      {
        name: "HDMI cable",
      },
      {
        name: "Monitor",
      },
      {
        name: "Cellphone",
      },
      {
        name: "Notebook",
      },
      {
        name: "Headset",
      },
      {
        name: "Mouse",
      },
      {
        name: "Chair",
      },
      {
        name: "Keyword",
      },
      {
        name: "Notebook charger",
      },
      {
        name: "Cellphone charger",
      },
      {
        name: "Port adapter",
      },
      {
        name: "Other",
      },
    ];

    await Office.insertMany(offices);
    await User.insertMany(users);
    await Device.insertMany(devices);

    const getCaseData = async () => {
      const caseData = await User.find();
      return caseData;
    };

    const getCaseData2 = async () => {
      const caseData2 = await Office.find();
      return caseData2;
    };

    const userData = await getCaseData();
    const officeData = await getCaseData2();

    const cases = [
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Headset",
          image: "headset.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Mouse",
          image: "mouse.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Modem",
          image: "modem.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Cellphone",
          image: "cellphone.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Chair",
          image: "chair.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Keyword",
          image: "keyword.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "open",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook charger",
          image: "notebookcharger.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Cellphone charger",
          image: "cellphonecharger.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Port adapter",
          image: "portadapter.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Other",
          image: "other.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "in progress",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "partially solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "partially solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "partially solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
        starting_date: Date.now() - 20 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 40 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "OLDEST, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
        starting_date: Date.now() - 80 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: true,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location:
            "Dr. Luis María Drago 1413, Bahía Blanca, Buenos Aires, Argentina",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "NEWEST, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[1]._id,
        starting_date: Date.now() + 1 * 24 * 60 * 60 * 1000,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 1",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
      {
        user: userData[0]._id,
        home_office: false,
        damaged_equipment: {
          name: "Notebook",
          image: "notebook.jpg",
          location: "Oficina Buenos Aires - puesto 2",
        },
        status: "solved",
        owner: userData[1]._id,
        description:
          "Lorem ipsum dolor sit amet, eum diam movet putent in. Usu ea utamur ullamcorper, his dicant suscipit phaedrum ad. Vim an modo dolores, quidam instructior qui ei.",
        closest_office: officeData[0]._id,
      },
    ];

    await Case.insertMany(cases);

    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

seedData();

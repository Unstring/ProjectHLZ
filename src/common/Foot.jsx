import { Link } from "react-router-dom"
export default function  Foot(){ return(
  <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto dark:bg-gray-900">
  {/* Grid */}
  <div className="text-center">
    <div>
      <a
        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-700 focus:outline-none transition dark:text-gray-200 dark:hover:text-gray-100 dark:hover:bg-gray-800"
        href="/"
        aria-label="Brand"
      >
        <svg
                className="w-20 h-10"
                xmlns="http://www.w3.org/2000/svg"
                width={500}
                height={500}
                fill="currentColor"
                viewBox="50 175 312 150"
              >
                {" "}
                <path
                  d="M 56.256 176.029 L 54.013 176.931 52.010 180.215 L 50.007 183.500 50.004 249.800 L 50 316.099 51.494 318.989 C 52.316 320.578, 53.991 322.581, 55.217 323.439 L 57.445 325 125.576 325 L 193.708 325 196.364 322.538 C 197.825 321.184, 199.466 318.905, 200.010 317.473 L 201 314.870 201 249.836 L 201 184.802 199.484 181.607 L 197.968 178.412 195.080 176.706 L 192.191 175 185.642 175 L 179.092 175 178.796 221.750 L 178.500 268.500 176.123 274.500 L 173.745 280.500 168.531 285.617 L 163.317 290.734 158.035 292.488 L 152.753 294.243 145.127 293.801 L 137.500 293.360 133.250 290.547 C 130.912 289, 129 287.344, 129 286.867 C 129 285.171, 127.227 286.049, 123.440 289.621 L 119.601 293.242 115.050 295.193 L 110.500 297.144 105 297.219 C 94.376 297.365, 87.760 294.718, 81.340 287.753 L 77.270 283.338 75.094 277.522 L 72.918 271.706 72.209 264.103 C 71.819 259.921, 71.638 254.588, 71.807 252.250 L 72.115 248 84.057 248 L 96 248 96.071 251.750 C 96.196 258.308, 97.039 263.174, 98.559 266.115 L 100.036 268.971 102.268 269.457 C 106.430 270.364, 107.496 270.393, 109.654 269.659 L 111.807 268.926 113.404 265.562 L 115 262.198 115 245.618 L 115 229.039 93.361 228.770 L 71.722 228.500 71.809 216 L 71.896 203.500 104.546 203 C 122.503 202.725, 137.582 202.740, 138.055 203.032 L 138.914 203.565 139.207 233.748 L 139.500 263.931 141.236 265.666 L 142.971 267.400 146.508 267.400 L 150.044 267.400 152.272 265.173 L 154.500 262.947 154.812 218.973 L 155.123 175 106.812 175.063 L 58.500 175.127 56.256 176.029 M 225.774 198.502 L 225.500 215.004 224.500 215.021 L 223.500 215.038 223 209.269 L 222.500 203.500 218.750 203.190 L 215 202.879 215 210.485 L 215 218.091 217.455 220.545 L 219.909 223 224.020 223 C 229.170 223, 231.566 221.740, 233.490 218.020 L 235 215.099 235 198.550 L 235 182 230.524 182 L 226.048 182 225.774 198.502 M 258.569 184.250 C 257.997 186.992, 255 217.664, 255 220.774 L 255 223 258.937 223 L 262.873 223 263.187 219.750 L 263.500 216.500 265.629 216.196 L 267.757 215.893 268.424 219.446 L 269.091 223 272.982 223 L 276.874 223 276.422 219.750 C 275.794 215.246, 273.007 185.894, 273.003 183.750 L 273 182 266.019 182 L 259.038 182 258.569 184.250 M 297 202.500 L 297 223 301 223 L 305 223 305 215 L 305 207 307.453 207 C 308.802 207, 311.002 206.500, 312.343 205.890 L 314.779 204.779 315.890 202.343 L 317 199.906 317 194.403 L 317 188.901 315.537 186.072 C 313.670 182.461, 312.353 182, 303.918 182 L 297 182 297 202.500 M 339.933 185.250 C 339.896 187.037, 339.093 196.262, 338.148 205.750 L 336.429 223 340.715 223 L 345 223 345 219.500 L 345 216 347.500 216 L 350 216 350 219.500 L 350 223 354 223 L 358 223 358.020 221.250 C 358.030 220.287, 357.269 211.063, 356.327 200.750 L 354.615 182 347.307 182 L 340 182 339.933 185.250 M 305 194.073 L 305 199.147 306.750 198.815 L 308.500 198.484 308.818 195.176 L 309.136 191.869 307.946 190.435 C 307.291 189.646, 306.360 189, 305.878 189 L 305 189 305 194.073 M 265.134 193.603 C 265.060 195.860, 264.711 200.473, 264.358 203.853 L 263.715 210 265.358 210 L 267 210 266.912 204.750 C 266.864 201.863, 266.474 197.250, 266.046 194.500 L 265.267 189.500 265.134 193.603 M 346.645 196.125 C 346.290 199.518, 346 204.027, 346 206.147 L 346 210 347.593 210 L 349.187 210 348.474 200.250 C 348.082 194.887, 347.655 190.378, 347.525 190.228 C 347.396 190.079, 346.999 192.732, 346.645 196.125 M 216 249.500 L 216 270 223.389 270 L 230.778 270 233.078 268.138 L 235.377 266.276 235.939 261.408 C 236.247 258.731, 236.275 251.289, 236 244.870 L 235.500 233.200 233.595 231.100 L 231.690 229 223.845 229 L 216 229 216 249.500 M 253.997 229.750 C 253.990 231.289, 250.995 261.663, 250.447 265.750 L 249.877 270 253.893 270 L 257.909 270 258.576 266.446 L 259.243 262.893 261.371 263.196 L 263.500 263.500 263.813 266.750 L 264.127 270 268.063 270 L 272 270 272 268.677 C 272 266.368, 268.999 235.638, 268.443 232.250 L 267.909 229 260.955 229 L 254 229 253.997 229.750 M 286 249.500 L 286 270 290 270 L 294 270 294 249.500 L 294 229 290 229 L 286 229 286 249.500 M 308 249.500 L 308 270 316.500 270 L 325 270 325 266.500 L 325 263 321 263 L 317 263 317 246 L 317 229 312.500 229 L 308 229 308 249.500 M 337.474 230.250 C 337.701 230.938, 339.262 237.272, 340.943 244.327 L 344 257.153 344 263.577 L 344 270 348 270 L 352 270 352 262.446 L 352 254.891 355 242.338 C 356.650 235.434, 358 229.608, 358 229.392 C 358 229.177, 356.209 229, 354.019 229 L 350.038 229 349.577 231.250 C 349.323 232.488, 348.780 235.300, 348.370 237.500 L 347.625 241.500 346.673 235.250 L 345.721 229 341.392 229 L 337.063 229 337.474 230.250 M 224.220 249.171 L 224.500 262.500 226 262.500 L 227.500 262.500 227.500 249.514 L 227.500 236.527 225.720 236.185 L 223.941 235.842 224.220 249.171 M 260.641 241.210 C 260.303 242.470, 260.021 246.537, 260.014 250.250 L 260 257 261.506 257 L 263.012 257 262.367 248.250 C 261.648 238.485, 261.515 237.945, 260.641 241.210 M 211.064 283.250 C 211.100 283.938, 211.887 291.475, 212.814 300 L 214.500 315.500 218.620 315.801 L 222.740 316.102 223.356 313.801 C 223.695 312.536, 224.024 309.475, 224.086 307 L 224.199 302.500 225 305 C 225.440 306.375, 225.845 309.413, 225.900 311.750 L 226 316 230.363 316 L 234.726 316 235.878 305.750 C 236.512 300.113, 237.314 292.462, 237.660 288.750 L 238.289 282 234.645 282 L 231 282 230.882 287.750 C 230.817 290.913, 230.420 294.850, 230 296.500 L 229.237 299.500 229.107 294.500 C 229.036 291.750, 228.699 287.813, 228.358 285.750 L 227.738 282 224.369 282 L 221 282 220.926 286.750 C 220.885 289.363, 220.491 293.525, 220.051 296 L 219.250 300.500 219.116 296.500 C 219.043 294.300, 218.699 290.137, 218.352 287.250 L 217.721 282 214.361 282 L 211 282 211.064 283.250 M 246 299 L 246 316 249.500 316 L 253 316 253 299 L 253 282 249.500 282 L 246 282 246 299 M 261 285 L 261 288 263 288 L 265 288 265 302 L 265 316 268.472 316 L 271.944 316 272.222 302.250 L 272.500 288.500 274.750 288.180 L 277 287.861 277 284.930 L 277 282 269 282 L 261 282 261 285 M 285 299 L 285 316 288.500 316 L 292 316 292 307.917 L 292 299.833 293.250 300.247 L 294.500 300.661 294.792 308.330 L 295.084 316 298.542 316 L 302 316 302 299 L 302 282 298.500 282 L 295 282 295 288 L 295 294 293.500 294 L 292 294 292 288 L 292 282 288.500 282 L 285 282 285 299 M 311 299 L 311 316 314.462 316 L 317.925 316 318.212 306.750 L 318.500 297.500 319.944 306.750 L 321.388 316 324.604 316 L 327.819 316 329.010 308.750 C 329.665 304.762, 330.560 299.925, 331 298 L 331.799 294.500 331.900 305.250 L 332 316 335 316 L 338 316 338 299 L 338 282 332.580 282 L 327.159 282 326.443 288.687 C 326.049 292.365, 325.411 296.528, 325.025 297.937 L 324.324 300.500 323.609 294.500 C 323.216 291.200, 322.643 287.038, 322.336 285.250 L 321.777 282 316.389 282 L 311 282 311 299 M 347 299 L 347 316 354.500 316 L 362 316 362 312.500 L 362 309 358.500 309 L 355 309 355 305.173 L 355 301.346 358 301.787 L 361 302.227 361 298.613 L 361 295 358 295 L 355 295 355 291.500 L 355 288 358 288 L 361 288 361 285 L 361 282 354 282 L 347 282 347 299"
                  stroke="none"
                  fillRule="evenodd"
                ></path>{" "}
              </svg>
      </a>
    </div>
    {/* End Col */}
    <div className="mt-3">
      <p className="text-gray-500">
        This is still a dev version check {" "}
        <a
          className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          href="https://github.com/Unstring/ProjectHLZ"
        >
          Unstring
        </a>{" "}
        for source code.
      </p>
      <p className="text-gray-500">
        © Unstring. 2023 Project HLZ. All rights reserved.
      </p>
    </div>
    {/* Social Brands */}
    <div className="mt-3 space-x-2">
      <a
        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
        href="#"
      >
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>
      </a>
      <a
        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
        href="#"
      >
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      </a>
      <a
        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
        href="#"
      >
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a
        className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
        href="#"
      >
        <svg
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
        </svg>
      </a>
    </div>
    {/* End Social Brands */}
  </div>
  {/* End Grid */}
</footer>


  )
}
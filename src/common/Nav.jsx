// import DarkLight from "./LightDark";
// import LightDark from "./LightDark";
import LightDark from "./Dark";
import { Link } from "react-router-dom";

export default function Foo() {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-900">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center">
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold dark:text-white"
              to="/"
              aria-label="Brand"
            >
              {/* <svg
                className="w-32 h-32 py-[-10]"
                xmlns="http://www.w3.org/2000/svg"
                width={500}
                height={500}
                fill="currentColor"
                viewBox="0 0 500 500"
              >
                <path
                  d="M 56.256 176.029 L 54.013 176.931 52.010 180.215 L 50.007 183.500 50.004 249.800 L 50 316.099 51.494 318.989 C 52.316 320.578, 53.991 322.581, 55.217 323.439 L 57.445 325 125.576 325 L 193.708 325 196.364 322.538 C 197.825 321.184, 199.466 318.905, 200.010 317.473 L 201 314.870 201 249.836 L 201 184.802 199.484 181.607 L 197.968 178.412 195.080 176.706 L 192.191 175 185.642 175 L 179.092 175 178.796 221.750 L 178.500 268.500 176.123 274.500 L 173.745 280.500 168.531 285.617 L 163.317 290.734 158.035 292.488 L 152.753 294.243 145.127 293.801 L 137.500 293.360 133.250 290.547 C 130.912 289, 129 287.344, 129 286.867 C 129 285.171, 127.227 286.049, 123.440 289.621 L 119.601 293.242 115.050 295.193 L 110.500 297.144 105 297.219 C 94.376 297.365, 87.760 294.718, 81.340 287.753 L 77.270 283.338 75.094 277.522 L 72.918 271.706 72.209 264.103 C 71.819 259.921, 71.638 254.588, 71.807 252.250 L 72.115 248 84.057 248 L 96 248 96.071 251.750 C 96.196 258.308, 97.039 263.174, 98.559 266.115 L 100.036 268.971 102.268 269.457 C 106.430 270.364, 107.496 270.393, 109.654 269.659 L 111.807 268.926 113.404 265.562 L 115 262.198 115 245.618 L 115 229.039 93.361 228.770 L 71.722 228.500 71.809 216 L 71.896 203.500 104.546 203 C 122.503 202.725, 137.582 202.740, 138.055 203.032 L 138.914 203.565 139.207 233.748 L 139.500 263.931 141.236 265.666 L 142.971 267.400 146.508 267.400 L 150.044 267.400 152.272 265.173 L 154.500 262.947 154.812 218.973 L 155.123 175 106.812 175.063 L 58.500 175.127 56.256 176.029 M 225.774 198.502 L 225.500 215.004 224.500 215.021 L 223.500 215.038 223 209.269 L 222.500 203.500 218.750 203.190 L 215 202.879 215 210.485 L 215 218.091 217.455 220.545 L 219.909 223 224.020 223 C 229.170 223, 231.566 221.740, 233.490 218.020 L 235 215.099 235 198.550 L 235 182 230.524 182 L 226.048 182 225.774 198.502 M 258.569 184.250 C 257.997 186.992, 255 217.664, 255 220.774 L 255 223 258.937 223 L 262.873 223 263.187 219.750 L 263.500 216.500 265.629 216.196 L 267.757 215.893 268.424 219.446 L 269.091 223 272.982 223 L 276.874 223 276.422 219.750 C 275.794 215.246, 273.007 185.894, 273.003 183.750 L 273 182 266.019 182 L 259.038 182 258.569 184.250 M 297 202.500 L 297 223 301 223 L 305 223 305 215 L 305 207 307.453 207 C 308.802 207, 311.002 206.500, 312.343 205.890 L 314.779 204.779 315.890 202.343 L 317 199.906 317 194.403 L 317 188.901 315.537 186.072 C 313.670 182.461, 312.353 182, 303.918 182 L 297 182 297 202.500 M 339.933 185.250 C 339.896 187.037, 339.093 196.262, 338.148 205.750 L 336.429 223 340.715 223 L 345 223 345 219.500 L 345 216 347.500 216 L 350 216 350 219.500 L 350 223 354 223 L 358 223 358.020 221.250 C 358.030 220.287, 357.269 211.063, 356.327 200.750 L 354.615 182 347.307 182 L 340 182 339.933 185.250 M 305 194.073 L 305 199.147 306.750 198.815 L 308.500 198.484 308.818 195.176 L 309.136 191.869 307.946 190.435 C 307.291 189.646, 306.360 189, 305.878 189 L 305 189 305 194.073 M 265.134 193.603 C 265.060 195.860, 264.711 200.473, 264.358 203.853 L 263.715 210 265.358 210 L 267 210 266.912 204.750 C 266.864 201.863, 266.474 197.250, 266.046 194.500 L 265.267 189.500 265.134 193.603 M 346.645 196.125 C 346.290 199.518, 346 204.027, 346 206.147 L 346 210 347.593 210 L 349.187 210 348.474 200.250 C 348.082 194.887, 347.655 190.378, 347.525 190.228 C 347.396 190.079, 346.999 192.732, 346.645 196.125 M 216 249.500 L 216 270 223.389 270 L 230.778 270 233.078 268.138 L 235.377 266.276 235.939 261.408 C 236.247 258.731, 236.275 251.289, 236 244.870 L 235.500 233.200 233.595 231.100 L 231.690 229 223.845 229 L 216 229 216 249.500 M 253.997 229.750 C 253.990 231.289, 250.995 261.663, 250.447 265.750 L 249.877 270 253.893 270 L 257.909 270 258.576 266.446 L 259.243 262.893 261.371 263.196 L 263.500 263.500 263.813 266.750 L 264.127 270 268.063 270 L 272 270 272 268.677 C 272 266.368, 268.999 235.638, 268.443 232.250 L 267.909 229 260.955 229 L 254 229 253.997 229.750 M 286 249.500 L 286 270 290 270 L 294 270 294 249.500 L 294 229 290 229 L 286 229 286 249.500 M 308 249.500 L 308 270 316.500 270 L 325 270 325 266.500 L 325 263 321 263 L 317 263 317 246 L 317 229 312.500 229 L 308 229 308 249.500 M 337.474 230.250 C 337.701 230.938, 339.262 237.272, 340.943 244.327 L 344 257.153 344 263.577 L 344 270 348 270 L 352 270 352 262.446 L 352 254.891 355 242.338 C 356.650 235.434, 358 229.608, 358 229.392 C 358 229.177, 356.209 229, 354.019 229 L 350.038 229 349.577 231.250 C 349.323 232.488, 348.780 235.300, 348.370 237.500 L 347.625 241.500 346.673 235.250 L 345.721 229 341.392 229 L 337.063 229 337.474 230.250 M 224.220 249.171 L 224.500 262.500 226 262.500 L 227.500 262.500 227.500 249.514 L 227.500 236.527 225.720 236.185 L 223.941 235.842 224.220 249.171 M 260.641 241.210 C 260.303 242.470, 260.021 246.537, 260.014 250.250 L 260 257 261.506 257 L 263.012 257 262.367 248.250 C 261.648 238.485, 261.515 237.945, 260.641 241.210 M 211.064 283.250 C 211.100 283.938, 211.887 291.475, 212.814 300 L 214.500 315.500 218.620 315.801 L 222.740 316.102 223.356 313.801 C 223.695 312.536, 224.024 309.475, 224.086 307 L 224.199 302.500 225 305 C 225.440 306.375, 225.845 309.413, 225.900 311.750 L 226 316 230.363 316 L 234.726 316 235.878 305.750 C 236.512 300.113, 237.314 292.462, 237.660 288.750 L 238.289 282 234.645 282 L 231 282 230.882 287.750 C 230.817 290.913, 230.420 294.850, 230 296.500 L 229.237 299.500 229.107 294.500 C 229.036 291.750, 228.699 287.813, 228.358 285.750 L 227.738 282 224.369 282 L 221 282 220.926 286.750 C 220.885 289.363, 220.491 293.525, 220.051 296 L 219.250 300.500 219.116 296.500 C 219.043 294.300, 218.699 290.137, 218.352 287.250 L 217.721 282 214.361 282 L 211 282 211.064 283.250 M 246 299 L 246 316 249.500 316 L 253 316 253 299 L 253 282 249.500 282 L 246 282 246 299 M 261 285 L 261 288 263 288 L 265 288 265 302 L 265 316 268.472 316 L 271.944 316 272.222 302.250 L 272.500 288.500 274.750 288.180 L 277 287.861 277 284.930 L 277 282 269 282 L 261 282 261 285 M 285 299 L 285 316 288.500 316 L 292 316 292 307.917 L 292 299.833 293.250 300.247 L 294.500 300.661 294.792 308.330 L 295.084 316 298.542 316 L 302 316 302 299 L 302 282 298.500 282 L 295 282 295 288 L 295 294 293.500 294 L 292 294 292 288 L 292 282 288.500 282 L 285 282 285 299 M 311 299 L 311 316 314.462 316 L 317.925 316 318.212 306.750 L 318.500 297.500 319.944 306.750 L 321.388 316 324.604 316 L 327.819 316 329.010 308.750 C 329.665 304.762, 330.560 299.925, 331 298 L 331.799 294.500 331.900 305.250 L 332 316 335 316 L 338 316 338 299 L 338 282 332.580 282 L 327.159 282 326.443 288.687 C 326.049 292.365, 325.411 296.528, 325.025 297.937 L 324.324 300.500 323.609 294.500 C 323.216 291.200, 322.643 287.038, 322.336 285.250 L 321.777 282 316.389 282 L 311 282 311 299 M 347 299 L 347 316 354.500 316 L 362 316 362 312.500 L 362 309 358.500 309 L 355 309 355 305.173 L 355 301.346 358 301.787 L 361 302.227 361 298.613 L 361 295 358 295 L 355 295 355 291.500 L 355 288 358 288 L 361 288 361 285 L 361 282 354 282 L 347 282 347 299"
                  stroke="none"
                  // fill="#f5f5f5"
                  fillRule="evenodd"
                />
              </svg> */}
              <svg
                className="w-24 h-16"
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
            </Link>
            <div className="md:hidden flex gap-2">
              <LightDark />
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-4 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                {/* <Link
                  className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500"
                  to="#"
                  aria-current="page"
                >
                  Landing
                </Link>
                <Link
                  className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  to="#"
                >
                  Company
                </Link> */}
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                  <button
                    id="hs-mega-menu-basic-dr"
                    type="button"
                    // className="group py-2.5 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus-visible:ring-gray-700 dark:focus-visible:ring-offset-gray-800"
                    className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
                  >
                    menu
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                    {/* <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      to="#"
                    >
                      about
                    </Link> */}
                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                      <button
                        type="button"
                        className="w-full flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      >
                        Input
                        <svg
                          className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          to="/inputfile"
                        >
                          with file
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          to="/inputurl"
                        >
                          with url
                        </Link>
                        {/* <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          to="#"
                        >
                          Team Account
                        </Link> */}
                      </div>
                    </div>
                    {/* <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      to="#"
                    >
                      Downloads
                    </Link>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      to="#"
                    >
                      Team Account
                    </Link> */}
                  </div>
                </div>
                <Link
                  className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  // className="group py-2.5 px-3 inline-flex justify-center items-center rounded-md border font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus-visible:ring-gray-700 dark:focus-visible:ring-offset-gray-800"
                  to="#"
                >
                  <div className="flex text-center align-bottom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>{" "}
                    <span className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">
                      4
                    </span>
                  </div>
                </Link>
                <div className="hidden md:block">
                  <LightDark />
                </div>
                <div className="pt-3 md:pt-0">
                  <Link
                    className="inline-flex m-1 justify-center items-center gap-x-2 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800"
                    to="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

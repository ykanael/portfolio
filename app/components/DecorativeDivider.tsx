export default function DecorativeDivider() {
  return (
    // Le fond beige/crème (#F9F6F0) pour correspondre à votre image
    <div className="flex w-full items-center justify-center bg-[#F9F6F0] py-8">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-[800px] w-full px-4"
      >
        {/* Lignes principales et boucles */}
        <path
          d="M 20 40 
             Q 200 65 370 40 
             C 340 10 320 60 360 70
             C 380 75 390 55 400 35
             C 410 55 420 75 440 70
             C 480 60 460 10 430 40
             Q 600 65 780 40"
          stroke="#45241C" // Couleur marron foncé de l'ornement
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Double ligne intérieure pour l'effet d'épaisseur (approximation) */}
        <path
          d="M 40 43 
             Q 200 60 365 43 
             C 345 20 330 55 360 63
             C 375 66 385 50 395 35
             C 405 50 415 66 430 63
             C 460 55 445 20 425 43
             Q 600 60 760 43"
          stroke="#45241C"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Boucle centrale en goutte */}
        <path
          d="M 400 35 C 390 60 390 80 400 85 C 410 80 410 60 400 35"
          stroke="#45241C"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
}

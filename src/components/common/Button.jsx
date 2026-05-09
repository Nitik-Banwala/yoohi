const Button = ({ text, className, onClick ,variants = "first" }) => {
 const variant = {
  first : "bg-dark text-white hover:bg-white border border-dark rounded-[4px] active:text-white active:bg-dark hover:text-dark",
 }
 return (
  
  <button
   onClick={onClick}
   className={`cursor-pointer duration-500 transform ${className} ${variant[variants]}`}
  >
   {text}
  </button>
 );
};

export default Button;
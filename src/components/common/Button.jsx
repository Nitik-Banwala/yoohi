const Button = ({ text, className, onClick ,variants = "first" }) => {
 const variant = {
  first : "bg-[#076787] text-white hover:bg-[#FFFFFF] border border-[#076787] rounded-[4px] active:text-white active:bg-[#076787] hover:text-dark",
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
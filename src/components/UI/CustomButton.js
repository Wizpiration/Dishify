export default function CustomButton(props) {
  return (
    <button className="bg-[#AFD28C]  text-white font-medium px-3  py-1 rounded-md hover:bg-[orange]">
      {props.children}
    </button>
  );
}

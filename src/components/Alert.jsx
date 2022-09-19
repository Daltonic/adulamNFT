import { useGlobalState } from '../store'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsCheck2Circle } from 'react-icons/bs'

const Alert = () => {
  const [alert] = useGlobalState('alert')

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center bg-black 
      bg-opacity-50 transform transition-transform
      duration-300 ${alert.show ? 'scale-100' : 'scale-0'}`}
    >
      <div
        className="flex flex-col justify-center items-center
        bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl
        min-w-min py-3 px-10"
      >
        {alert.color == 'red' ? (
          <FaRegTimesCircle className="text-red-600 text-4xl" />
        ) : (
          <BsCheck2Circle className="text-green-600 text-4xl" />
        )}
        <p className="text-white my-3">{alert.msg}</p>
      </div>
    </div>
  )
}

export default Alert
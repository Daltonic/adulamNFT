import { useGlobalState } from '../store'

const Loading = () => {
  const [loading] = useGlobalState('loading')

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center bg-black 
      bg-opacity-50 transform transition-transform
      duration-300 ${loading.show ? 'scale-100' : 'scale-0'}`}
    >
      <div
        className="flex flex-col justify-center
        items-center bg-[#151c25] shadow-xl 
        shadow-[#e32970] rounded-xl 
        min-w-min px-10 pb-2"
      >
        <div className="flex flex-row justify-center items-center">
          <div className="lds-dual-ring scale-50"></div>
          <p className="text-lg text-white">Loading...</p>
        </div>
        <small className="text-white">{loading.msg}</small>
      </div>
    </div>
  )
}

export default Loading